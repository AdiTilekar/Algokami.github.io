import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Algokami Tech Solutions services.',
}

export default function RefundPolicyPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <h1>Refund Policy</h1>
          <p>Last updated: August 2026</p>
        </div>
      </section>

      <section className="page-section-white">
        <div className="container page-content-narrow">
          <div className="prose">
            <h2>Business Identity</h2>
            <ul>
              <li><strong>Operating Name:</strong> Algokami Tech Solutions</li>
              <li><strong>Email:</strong> algokami.tech@gmail.com</li>
              <li><strong>Phone:</strong> +91 88570 66841</li>
            </ul>

            <h2>1. Overview</h2>
            <p>
              At Algokami Tech Solutions, we strive to deliver high-quality services that meet our clients&apos; expectations. This refund policy outlines the conditions under which refunds may be issued.
            </p>

            <h2>2. Before Project Commencement</h2>
            <p>
              If you cancel your project before discovery or implementation work has begun, you may be
              eligible for a refund of advance payment minus documented administrative or banking fees.
            </p>

            <h2>3. During Project Development</h2>
            <p>
              Once work has commenced, any refundable amount is determined by completed milestones,
              delivered artifacts, and accepted outputs under the signed proposal or SOW:
            </p>
            <ul>
              <li>Discovery and consultation fees are non-refundable once workshops or analysis are delivered</li>
              <li>Milestone payments already approved by the client are non-refundable</li>
              <li>Unstarted milestones may be eligible for partial or full refund review</li>
            </ul>

            <h2>4. After Project Completion</h2>
            <p>
              Once a project has been completed and accepted against agreed scope, refunds are generally
              not available. We provide a defined support window for bug fixes under accepted deliverables.
            </p>

            <h2>5. Website Maintenance Services</h2>
            <p>
              For ongoing website maintenance and support services:
            </p>
            <ul>
              <li>Monthly services can be cancelled with 30 days notice</li>
              <li>Prepaid services are non-refundable once the service period has begun</li>
            </ul>

            <h2>6. How to Request a Refund</h2>
            <p>
              To request a refund, contact algokami.tech@gmail.com with project details, invoice references,
              and reason for request. We respond within 5 business days.
            </p>

            <h2>7. Refund Processing</h2>
            <p>
              Approved refunds are processed within 7-14 business days and, where possible, sent to the
              original payment method.
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
              If you have any questions about our refund policy, please contact us at algokami.tech@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
