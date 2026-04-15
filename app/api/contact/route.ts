import { NextRequest, NextResponse } from 'next/server'
import { saveContactLead } from '@/lib/leadsDb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    await saveContactLead({ name, email, phone, message })
    return NextResponse.json({ success: true, message: 'Enquiry saved successfully.' })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to save enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
