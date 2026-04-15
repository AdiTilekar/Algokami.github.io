import { NextRequest, NextResponse } from 'next/server'
import { appendQuoteLeadToSheet } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, service, company } = body

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    await appendQuoteLeadToSheet({
      name,
      email,
      phone,
      company,
      service,
      message,
    })

    return NextResponse.json({ success: true, message: 'Quote request saved to Google Sheets.' })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json(
      { error: 'Failed to save request to Google Sheets.' },
      { status: 500 }
    )
  }
}
