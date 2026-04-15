import type { Metadata } from 'next'
import {
  getContactLeads,
  getQuoteLeads,
  type ContactLeadRecord,
  type QuoteLeadRecord,
} from '@/lib/leadsDb'

export const metadata: Metadata = {
  title: 'Enquiries Dashboard',
  description: 'View contact and quote enquiries from the database.',
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = 'force-dynamic'

function formatDate(dateValue: string) {
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) return 'Unknown time'

  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function EmptyState({ label }: { label: string }) {
  return <p className="enquiries-empty">No {label} enquiries yet.</p>
}

function ContactTable({ rows }: { rows: ContactLeadRecord[] }) {
  if (!rows.length) return <EmptyState label="contact" />

  return (
    <div className="enquiries-table-wrap">
      <table className="enquiries-table">
        <thead>
          <tr>
            <th>When</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{formatDate(row.created_at)}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone || '-'}</td>
              <td className="enquiries-message-cell">{row.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function QuoteTable({ rows }: { rows: QuoteLeadRecord[] }) {
  if (!rows.length) return <EmptyState label="quote" />

  return (
    <div className="enquiries-table-wrap">
      <table className="enquiries-table">
        <thead>
          <tr>
            <th>When</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Service</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{formatDate(row.created_at)}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone || '-'}</td>
              <td>{row.company || '-'}</td>
              <td>{row.service || '-'}</td>
              <td className="enquiries-message-cell">{row.message || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function EnquiriesPage() {
  let contactLeads: ContactLeadRecord[] = []
  let quoteLeads: QuoteLeadRecord[] = []
  let loadError = ''

  try {
    ;[contactLeads, quoteLeads] = await Promise.all([
      getContactLeads(200),
      getQuoteLeads(200),
    ])
  } catch (error) {
    console.error('Failed to load enquiries:', error)
    loadError = 'Unable to load enquiries. Check database connection settings.'
  }

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Internal</span>
          <h1>Enquiries Dashboard</h1>
          <p>Live enquiries from your website forms, fetched directly from the database.</p>
        </div>
      </section>

      <section className="page-section-muted enquiries-section">
        <div className="container">
          {loadError && <p className="enquiries-error">{loadError}</p>}

          <article className="enquiries-card">
            <div className="enquiries-card-head">
              <h2>Contact Enquiries</h2>
              <span>{contactLeads.length} records</span>
            </div>
            <ContactTable rows={contactLeads} />
          </article>

          <article className="enquiries-card">
            <div className="enquiries-card-head">
              <h2>Quote Enquiries</h2>
              <span>{quoteLeads.length} records</span>
            </div>
            <QuoteTable rows={quoteLeads} />
          </article>
        </div>
      </section>
    </main>
  )
}
