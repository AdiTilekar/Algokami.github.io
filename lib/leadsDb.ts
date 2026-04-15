import { neon } from '@neondatabase/serverless'

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

let tablesEnsured = false

function getSqlClient() {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL or POSTGRES_URL is not set')
  }

  return neon(databaseUrl)
}

async function ensureLeadTables() {
  if (tablesEnsured) return

  const sql = getSqlClient()

  await sql`
    CREATE TABLE IF NOT EXISTS contact_leads (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `

  await sql`
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
  `

  tablesEnsured = true
}

export async function saveContactLead(payload: ContactLeadPayload) {
  await ensureLeadTables()
  const sql = getSqlClient()

  await sql`
    INSERT INTO contact_leads (name, email, phone, message)
    VALUES (${payload.name}, ${payload.email}, ${payload.phone ?? null}, ${payload.message});
  `
}

export async function saveQuoteLead(payload: QuoteLeadPayload) {
  await ensureLeadTables()
  const sql = getSqlClient()

  await sql`
    INSERT INTO quote_leads (name, email, phone, company, service, message)
    VALUES (
      ${payload.name},
      ${payload.email},
      ${payload.phone ?? null},
      ${payload.company ?? null},
      ${payload.service ?? null},
      ${payload.message ?? null}
    );
  `
}
