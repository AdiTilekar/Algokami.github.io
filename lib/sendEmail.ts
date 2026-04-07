import { Resend } from 'resend'

interface EmailPayload {
  name: string
  email: string
  phone?: string
  message: string
  subject?: string
}

export async function sendContactEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    throw new Error('Email service not configured')
  }

  const resend = new Resend(apiKey)
  const { name, email, phone, message, subject } = payload

  return resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'website@yourdomain.com',
    to:   process.env.RESEND_TO_EMAIL   || 'contact@yourdomain.com',
    reply_to: email,
    subject: subject || `New enquiry from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1A1F5E; border-bottom: 3px solid #F5A623; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 120px; color: #374151;">Name:</td>
              <td style="padding: 10px; color: #1E1E2E;">${name}</td>
            </tr>
            <tr style="background: #F7F8FC;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}" style="color: #F5A623;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 10px; color: #1E1E2E;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="background: #F7F8FC;">
              <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #1E1E2E; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #9CA3AF;">
            Sent from your website contact form at ${new Date().toLocaleString('en-IN')}
          </p>
        </body>
      </html>
    `,
  })
}
