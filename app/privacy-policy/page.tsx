import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Insight Travels and Tours",
  description: "Privacy policy for Insight Travels and Tours. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="mt-4 text-primary-foreground/80">Last updated: April 1, 2022</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Insight Travels ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            <p className="text-muted-foreground">
              This website is intended for informational and discovery purposes only. We do not currently process bookings or payments through the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">a) Information You Provide</h3>
            <p className="text-muted-foreground mb-3">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any details submitted via contact forms or inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">b) Information Collected Automatically</h3>
            <p className="text-muted-foreground mb-3">When you visit our website, we may collect certain information automatically, such as:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the site</li>
            </ul>
            <p className="text-muted-foreground mt-3">This information is collected through cookies and analytics tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Respond to inquiries and provide customer support</li>
              <li>Share information about our services</li>
              <li>Improve our website and user experience</li>
              <li>Communicate updates or promotional offers (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Offline Data Collection</h2>
            <p className="text-muted-foreground mb-3">
              While our website does not facilitate bookings, Insight Travels may collect additional personal information offline when you engage our services directly.
            </p>
            <p className="text-muted-foreground mb-3">This may include:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Passport details</li>
              <li>Travel preferences</li>
              <li>Booking-related information</li>
            </ul>
            <p className="text-muted-foreground mt-3">Such data is collected and handled securely and used solely for the purpose of providing travel services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Sharing of Information</h2>
            <p className="text-muted-foreground mb-3">We do not sell your personal information.</p>
            <p className="text-muted-foreground mb-3">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Trusted travel partners such as airlines, hotels, and visa service providers (only when required for bookings made offline)</li>
              <li>Service providers who assist in operating our website (e.g., analytics tools)</li>
              <li>Authorities if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground mb-3">
              We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.
            </p>
            <p className="text-muted-foreground">
              However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground">
              Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground mb-3">You may request to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data</li>
            </ul>
            <p className="text-muted-foreground mt-3">To do so, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground mb-3">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-foreground font-semibold">Insight Travels and Tours</p>
              <p className="text-muted-foreground mt-2">
                Email: <a href="mailto:insighttravels95@gmail.com" className="text-accent hover:underline">insighttravels95@gmail.com</a>
              </p>
              <p className="text-muted-foreground">Location: New Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
