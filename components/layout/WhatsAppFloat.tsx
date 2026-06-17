import Link from 'next/link'

const whatsappPhone = '919834119669'
const message = encodeURIComponent('Hi Algokami, I want details about your website packages and pricing.')

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${whatsappPhone}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
      <span>Chat on WhatsApp</span>
    </Link>
  )
}
