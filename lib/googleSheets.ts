import { google } from 'googleapis'

interface QuoteSheetPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message?: string
}

const DEFAULT_SPREADSHEET_ID = '1R_xW-trRPPakQMp0TzPGfRBwMR-GYlFaiuANGM-Pybk'
const DEFAULT_SHEET_NAME = 'Sheet1'

async function appendViaAppsScript(payload: QuoteSheetPayload) {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL
  if (!webhookUrl) {
    return false
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      name: payload.name || '',
      email: payload.email || '',
      phone: payload.phone || '',
      company: payload.company || '',
      service: payload.service || '',
      budget: payload.budget || '',
      message: payload.message || '',
    }),
  })

  if (!response.ok) {
    throw new Error(`Apps Script webhook failed with status ${response.status}`)
  }

  return true
}

function getGooglePrivateKey() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  if (!privateKey) {
    throw new Error('GOOGLE_SHEETS_PRIVATE_KEY is not set')
  }

  return privateKey.replace(/\\n/g, '\n')
}

async function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  if (!clientEmail) {
    throw new Error('GOOGLE_SHEETS_CLIENT_EMAIL is not set')
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: getGooglePrivateKey(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  await auth.authorize()
  return google.sheets({ version: 'v4', auth })
}

export async function appendQuoteLeadToSheet(payload: QuoteSheetPayload) {
  const appendedByWebhook = await appendViaAppsScript(payload)
  if (appendedByWebhook) {
    return
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || DEFAULT_SPREADSHEET_ID
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || DEFAULT_SHEET_NAME
  const sheets = await getSheetsClient()

  const values = [
    [
      new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.company || '',
      payload.service || '',
      payload.budget || '',
      payload.message || '',
    ],
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  })
}
