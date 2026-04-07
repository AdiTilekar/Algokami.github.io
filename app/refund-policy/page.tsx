import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Algokami Infotech Solutions Pvt. Ltd. services.',
}

export default function RefundPolicyPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <h1>Refund Policy</h1>
          <p>Last updated: April 2025</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <h2>1. Overview</h2>
            <p>
              At Algokami Infotech Solutions Pvt. Ltd., we strive to deliver high-quality services that meet our clients&apos; expectations. This refund policy outlines the conditions under which refunds may be issued.
            </p>

            <h2>2. Before Project Commencement</h2>
            <p>
              If you cancel your project before work has begun, you may be eligible for a full refund of any advance payment, minus a 10% administrative fee.
            </p>

            <h2>3. During Project Development</h2>
            <p>
              Once work has commenced, refunds will be calculated based on the work completed:
            </p>
            <ul>
              <li><strong>0-25% completion:</strong> Up to 75% refund of total project value</li>
              <li><strong>25-50% completion:</strong> Up to 50% refund of total project value</li>
              <li><strong>50-75% completion:</strong> Up to 25% refund of total project value</li>
              <li><strong>75%+ completion:</strong> No refund available</li>
            </ul>

            <h2>4. After Project Completion</h2>
            <p>
              Once a project has been completed and delivered, no refunds will be issued. However, we offer a warranty period during which we will address any bugs or issues at no additional cost.
            </p>

            <h2>5. Digital Marketing Services</h2>
            <p>
              For ongoing digital marketing services:
            </p>
            <ul>
              <li>Monthly services can be cancelled with 30 days notice</li>
              <li>Prepaid services are non-refundable once the service period has begun</li>
            </ul>

            <h2>6. How to Request a Refund</h2>
            <p>
              To request a refund, please contact us at contact@algokami.com with your project details and reason for the refund request. We will review your request and respond within 5 business days.
            </p>

            <h2>7. Refund Processing</h2>
            <p>
              Approved refunds will be processed within 7-14 business days. Refunds will be issued to the original payment method when possible.
            </p>

            <h2>8. Exceptions</h2>
            <p>
              Refunds may be denied in cases of:
            </p>
            <ul>
              <li>Breach of contract by the client</li>
              <li>Project delays caused by client inaction</li>
              <li>Disputes over subjective design preferences after approval</li>
            </ul>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact us at contact@algokami.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
