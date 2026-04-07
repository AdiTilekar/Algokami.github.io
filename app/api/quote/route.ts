import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/sendEmail'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, service, budget, company } = body

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

    await sendContactEmail({
      name,
      email,
      phone,
      message: `
Company: ${company || 'Not specified'}
Service: ${service || 'Not specified'}
Budget: ${budget || 'Not specified'}

Project Details:
${message || 'No details provided'}
      `.trim(),
      subject: `Quote Request from ${name} — ${service || 'General'}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Failed to send request.' }, { status: 500 })
  }
}
