import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Algokami Infotech Solutions Pvt. Ltd. - How we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <main style={{ paddingTop: '70px' }}>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: April 2025</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <h2>1. Introduction</h2>
            <p>
              Algokami Infotech Solutions Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out forms on our website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as analytics and email services) that collect and process data on our behalf. These services have their own privacy policies.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at algokamitech@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
