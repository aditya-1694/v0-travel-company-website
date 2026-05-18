import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, CheckCircle, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "MICE, Conferences & Corporate Events | Insight Travels",
  description: "Full-service event management for meetings, incentives, conferences, and exhibitions with complete travel coordination.",
}

export default function MICEPage() {
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
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              MICE, Conferences & Corporate Events
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Full-service event management for meetings, incentives, conferences, and exhibitions. We create memorable corporate experiences that drive engagement and results.
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
                    From intimate meetings to large-scale international conferences, we provide end-to-end event management with seamless travel coordination for all participants.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Venue selection and booking",
                      "Group travel coordination and logistics",
                      "Accommodation management for large groups",
                      "Event planning and coordination",
                      "On-site event management",
                      "Transportation and ground handling",
                      "Incentive trip planning and execution"
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
                      <h3 className="text-xl font-semibold text-foreground mb-2">Proven Track Record</h3>
                      <p className="text-muted-foreground">Successfully managed hundreds of corporate events of all sizes across multiple continents.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Dedicated Project Management</h3>
                      <p className="text-muted-foreground">Assigned event coordinator manages all aspects ensuring smooth execution from planning to completion.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Complete Solutions</h3>
                      <p className="text-muted-foreground">Single vendor for all event and travel needs simplifies management and reduces coordination overhead.</p>
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
