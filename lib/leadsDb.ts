import { Pool } from 'pg'

interface ContactLeadPayload {
  name: string
  email: string
  phone?: string
  message: string
}

interface QuoteLeadPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
}

export interface ContactLeadRecord {
  id: number
  name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

export interface QuoteLeadRecord {
  id: number
  name: string
  email: string
  phone: string | null
  company: string | null
  service: string | null
  message: string | null
  created_at: string
}

let tablesEnsured = false
let pool: Pool | null = null

function shouldAutoInitTables() {
  if (process.env.LEADS_AUTO_INIT === 'true') return true
  if (process.env.NODE_ENV !== 'production') return true
  return false
}

function getDatabaseUrl() {
  return (
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    ''
  )
}

function getPool() {
  if (pool) return pool

  const databaseUrl = getDatabaseUrl()
  if (!databaseUrl) {
    throw new Error(
      'Database URL env var is missing. Set DATABASE_URL, POSTGRES_URL, or POSTGRES_PRISMA_URL.'
    )
  }

  pool = new Pool({
    connectionString: databaseUrl,
    ssl: {
      rejectUnauthorized: false,
    },
    max: 5,
  })

  return pool
}

async function ensureLeadTables() {
  if (tablesEnsured) return

  // Some production DB roles can INSERT/SELECT but cannot CREATE TABLE.
  // Skip auto-init in production unless explicitly enabled.
  if (!shouldAutoInitTables()) {
    tablesEnsured = true
    return
  }

  const db = getPool()

  await db.query(`
    CREATE TABLE IF NOT EXISTS contact_leads (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  await db.query(`
    CREATE TABLE IF NOT EXISTS quote_leads (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      service TEXT,
      message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  tablesEnsured = true
}

export async function saveContactLead(payload: ContactLeadPayload) {
  await ensureLeadTables()
  const db = getPool()

  await db.query(
    `INSERT INTO contact_leads (name, email, phone, message)
     VALUES ($1, $2, $3, $4);`,
    [payload.name, payload.email, payload.phone ?? null, payload.message]
  )
}

export async function saveQuoteLead(payload: QuoteLeadPayload) {
  await ensureLeadTables()
  const db = getPool()

  await db.query(
    `INSERT INTO quote_leads (name, email, phone, company, service, message)
     VALUES ($1, $2, $3, $4, $5, $6);`,
    [
      payload.name,
      payload.email,
      payload.phone ?? null,
      payload.company ?? null,
      payload.service ?? null,
      payload.message ?? null,
    ]
  )
}

export async function getContactLeads(limit = 100): Promise<ContactLeadRecord[]> {
  await ensureLeadTables()
  const db = getPool()

  const result = await db.query(
    `SELECT id, name, email, phone, message, created_at
     FROM contact_leads
     ORDER BY created_at DESC
     LIMIT $1;`,
    [limit]
  )

  return result.rows as ContactLeadRecord[]
}

export async function getQuoteLeads(limit = 100): Promise<QuoteLeadRecord[]> {
  await ensureLeadTables()
  const db = getPool()

  const result = await db.query(
    `SELECT id, name, email, phone, company, service, message, created_at
     FROM quote_leads
     ORDER BY created_at DESC
     LIMIT $1;`,
    [limit]
  )

  return result.rows as QuoteLeadRecord[]
}
