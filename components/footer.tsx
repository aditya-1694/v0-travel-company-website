import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Clients", href: "#clients" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Medical Evacuation", href: "#services" },
      { name: "Corporate Travel", href: "#services" },
      { name: "MICE & Events", href: "#services" },
    ],
  }

  return (
    <footer className="bg-foreground border-t border-card/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/images/insight-logo.png" 
                alt="Insight Travels and Tours" 
                width={180} 
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-card/70 mb-6">
              Your trusted partner in corporate travel management since 1994. 
              IATA certified and family-owned.
            </p>
            {/* IATA Badge */}
            <div className="inline-flex items-center gap-3 p-3 bg-card/5 rounded-lg border border-card/10">
              <div className="h-10 w-16 bg-card/10 rounded flex items-center justify-center border border-dashed border-card/20">
                <span className="text-[8px] text-card/50 font-medium text-center">IATA<br/>LOGO</span>
              </div>
              <span className="text-sm text-card/70">IATA Certified</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-card uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-card uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-card uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-card/80 shrink-0 mt-0.5" />
                <span className="text-card/70 text-sm">
                  S-06, 2nd Floor, Triveni Complex<br />
                  Sheikh Sarai Phase-1, New Delhi 110 017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-card/80 shrink-0" />
                <a href="tel:+911140154725" className="text-card/70 hover:text-card transition-colors text-sm">
                  +91-11-40154725
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-card/80 shrink-0" />
                <a href="mailto:insighttravels95@gmail.com" className="text-card/70 hover:text-card transition-colors text-sm">
                  insighttravels95@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-card/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-card/50">
              © {currentYear} Insight Travels and Tours. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-card/50 hover:text-card/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-card/50 hover:text-card/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
