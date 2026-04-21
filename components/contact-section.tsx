"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We&apos;re here to help with all your corporate travel needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                <p className="text-muted-foreground">
                  S-06, 2nd Floor, Shopping Cum Office Complex<br />
                  (Triveni) Sheikh Sarai Phase-1<br />
                  New Delhi 110017
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+911140154725" className="hover:text-accent transition-colors">+91-11-40154725</a><br />
                  <a href="tel:+911140154724" className="hover:text-accent transition-colors">+91-11-40154724</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:insighttravels95@gmail.com" className="hover:text-accent transition-colors">
                    insighttravels95@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
