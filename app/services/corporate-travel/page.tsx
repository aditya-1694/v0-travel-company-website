import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Plane, CheckCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Corporate Travel Management | Insight Travels",
  description: "End-to-end corporate travel solutions including flights, hotels, ground transportation, and complete logistics.",
}

export default function CorporateTravelPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <div className="pt-24 pb-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center">
              <Plane className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Corporate Travel Management
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            End-to-end travel solutions for your business. We handle flights, hotels, ground transportation, and complete logistics so your team travels seamlessly.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
                  <p className="text-muted-foreground mb-4">
                    From routine business travel to complex multi-city itineraries, we provide comprehensive travel management solutions that streamline your company&apos;s travel operations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Flight booking and airline negotiations",
                      "Hotel reservations and accommodation management",
                      "Ground transportation and car rentals",
                      "Travel insurance and documentation",
                      "Visa assistance and travel permits",
                      "24/7 traveler support and concierge services",
                      "Expense tracking and reporting solutions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cost Optimization</h3>
                      <p className="text-muted-foreground">Negotiate better rates and maximize your travel budget through our established vendor relationships.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Duty of Care</h3>
                      <p className="text-muted-foreground">Full traveler tracking and 24/7 emergency support to ensure employee safety and compliance.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Simplified Management</h3>
                      <p className="text-muted-foreground">Single point of contact for all travel needs, reducing administrative burden on your team.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="tel:+911140154725" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-accent/10 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91-11-40154725</p>
                    </div>
                  </a>
                  <a href="mailto:outbound@insighttravels.in" className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-accent/10 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">outbound@insighttravels.in</p>
                    </div>
                  </a>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href="/#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
