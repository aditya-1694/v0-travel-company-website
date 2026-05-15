"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services", hasDropdown: true },
    { name: "Clients", href: "/#clients" },
    { name: "Contact", href: "/#contact" },
  ]

  const services = [
    { name: "Medical Evacuation", href: "/services/medical-evacuation" },
    { name: "Corporate Travel", href: "/services/corporate-travel" },
    { name: "MICE & Events", href: "/services/mice-events" },
    { name: "Leisure Travel & Tourism", href: "/tour-packages" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/insight-logo.png" 
              alt="Insight Travels and Tours" 
              width={180} 
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <Link href={item.href}>{item.name}</Link>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-0 w-56 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/50 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a href="tel:+911140154725" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +91-11-40154725
            </a>
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.hasDropdown && setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Link href={item.href} onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {item.hasDropdown && servicesDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l border-border/50 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="tel:+911140154725" className="flex items-center gap-2 text-base text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91-11-40154725
              </a>
              <Button asChild className="w-full">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
