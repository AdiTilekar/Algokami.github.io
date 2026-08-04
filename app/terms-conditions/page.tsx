import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Algokami Tech Solutions services.',
}

export default function TermsConditionsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
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
              <li><strong>Registration and billing details:</strong> Shared in proposal, invoice, and signed agreement.</li>
            </ul>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Algokami Tech Solutions provides website development, personalized website development, e-commerce solutions, and related web services. The specific scope of services will be outlined in individual project agreements.
            </p>

            <h2>3. Scope, Assumptions, and Change Requests</h2>
            <p>
              Project scope is finalized through a written proposal or Statement of Work (SOW). Any change
              in deliverables, integrations, timeline, or dependencies may require a change request,
              timeline adjustment, and revised commercial terms.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, designs, and materials created by Algokami Tech Solutions remain our property until full payment is received. Upon full payment, intellectual property rights transfer to the client as specified in the project agreement.
            </p>

            <h2>5. Payment Terms</h2>
            <ul>
              <li>Payment terms are defined in each proposal/SOW</li>
              <li>Milestone billing is used for most projects</li>
              <li>Late payments may delay delivery milestones and may incur additional charges</li>
            </ul>

            <h2>6. Project Timeline</h2>
            <p>
              Project timelines are estimates and may vary based on project complexity, client feedback, and requirements changes. We will communicate any significant changes to the timeline.
            </p>

            <h2>7. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing necessary content, images, and information</li>
              <li>Timely feedback and approvals</li>
              <li>Ensuring provided materials do not infringe on third-party rights</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              Algokami Tech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by applicable laws of India. Any disputes are subject to the jurisdiction
              agreed in the signed service agreement.
            </p>

            <h2>10. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these Terms & Conditions, contact algokami.tech@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
