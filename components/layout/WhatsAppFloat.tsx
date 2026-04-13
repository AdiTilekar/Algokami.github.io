import Link from 'next/link'

const phone = '918857066841'
const message = encodeURIComponent('Hi Algokami, I want details about your website packages and pricing.')

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${phone}?text=${message}`}
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
