"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, DollarSign, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TourPackagesPage() {
  const packages = [
    // Australia
    {
      destination: "Australia",
      image: "🦘",
      title: "Sydney & Great Barrier Reef",
      duration: "8 Days / 7 Nights",
      price: "₹85,000",
      highlights: ["Sydney Opera House", "Bondi Beach", "Great Barrier Reef Snorkeling", "Melbourne City Tour"],
      inclusions: ["Flights from India", "4-Star Accommodation", "Daily Breakfast", "Guided Tours", "Travel Insurance"]
    },
    {
      destination: "Australia",
      image: "🦘",
      title: "Melbourne & Adelaide Wine Tour",
      duration: "7 Days / 6 Nights",
      price: "₹72,000",
      highlights: ["Barossa Valley Wineries", "Adelaide Hills", "Great Ocean Road", "Melbourne Cultural Tour"],
      inclusions: ["Flights from India", "4-Star Hotel", "Wine Tasting", "Meals Included", "Airport Transfers"]
    },
    {
      destination: "Australia",
      image: "🦘",
      title: "Uluru Red Centre Adventure",
      duration: "6 Days / 5 Nights",
      price: "₹68,000",
      highlights: ["Uluru Sunset View", "Kings Canyon Trek", "Aboriginal Cultural Experience", "Desert Adventure"],
      inclusions: ["Flights from India", "Resort Accommodation", "All Meals", "Expert Guide", "Park Entrance Fees"]
    },

    // Bali
    {
      destination: "Bali",
      image: "🏝️",
      title: "Bali Beach Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹38,000",
      highlights: ["Ubud Rice Terraces", "Bali Swing", "Tanah Lot Temple", "Beach Relaxation"],
      inclusions: ["Flights from India", "Resort Stay", "Daily Breakfast", "Airport Pickup", "City Tour"]
    },
    {
      destination: "Bali",
      image: "🏝️",
      title: "Adventure & Culture Week",
      duration: "7 Days / 6 Nights",
      price: "₹52,000",
      highlights: ["Mount Batur Sunrise", "Waterfall Trekking", "Cultural Villages", "Spa & Wellness"],
      inclusions: ["Flights from India", "4-Star Resort", "All Meals", "Activities Included", "Guide Services"]
    },
    {
      destination: "Bali",
      image: "🏝️",
      title: "Honeymoon Special",
      duration: "6 Days / 5 Nights",
      price: "₹55,000",
      highlights: ["Private Beach Dinner", "Romantic Sunset", "Couple's Massage", "Island Hopping"],
      inclusions: ["Flights from India", "Luxury Resort", "Romantic Dinners", "Spa Treatments", "Special Surprises"]
    },

    // Vietnam
    {
      destination: "Vietnam",
      image: "🌏",
      title: "Hanoi & Halong Bay",
      duration: "6 Days / 5 Nights",
      price: "₹42,000",
      highlights: ["Halong Bay Cruise", "Hanoi Old Quarter", "Water Puppet Show", "Overnight Boat Stay"],
      inclusions: ["Flights from India", "3-Star Hotels", "Daily Breakfast", "Cruises", "Guide Services"]
    },
    {
      destination: "Vietnam",
      image: "🌏",
      title: "Ho Chi Minh to Mekong Delta",
      duration: "7 Days / 6 Nights",
      price: "₹48,000",
      highlights: ["Ho Chi Minh City Tour", "Mekong Delta Cruise", "Floating Markets", "War Museums"],
      inclusions: ["Flights from India", "4-Star Hotels", "All Meals", "River Cruise", "Expert Guide"]
    },
    {
      destination: "Vietnam",
      image: "🌏",
      title: "Northern Vietnam Explorer",
      duration: "8 Days / 7 Nights",
      price: "₹58,000",
      highlights: ["Sapa Trek", "Hanoi Culture", "Halong Bay", "Local Village Stay"],
      inclusions: ["Flights from India", "Mixed Accommodation", "All Meals", "Trekking Guide", "Cultural Experience"]
    },

    // Thailand
    {
      destination: "Thailand",
      image: "🐘",
      title: "Bangkok & Phuket Beach",
      duration: "6 Days / 5 Nights",
      price: "₹45,000",
      highlights: ["Bangkok Grand Palace", "Phuket Beaches", "Island Hopping", "Night Markets"],
      inclusions: ["Flights from India", "4-Star Resort", "Daily Breakfast", "Boat Tours", "City Tour"]
    },
    {
      destination: "Thailand",
      image: "🐘",
      title: "Chiang Mai Cultural Experience",
      duration: "7 Days / 6 Nights",
      price: "₹50,000",
      highlights: ["Elephant Sanctuary", "Temple Tours", "Night Bazaar", "Cooking Classes"],
      inclusions: ["Flights from India", "Boutique Hotels", "All Meals", "Elephant Experience", "Cultural Workshops"]
    },
    {
      destination: "Thailand",
      image: "🐘",
      title: "Krabi & Island Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹40,000",
      highlights: ["Phi Phi Islands", "Railay Beach", "Rock Climbing", "Seafood Dinner Cruise"],
      inclusions: ["Flights from India", "Beach Resort", "Daily Breakfast", "Island Tours", "Water Activities"]
    },

    // Singapore
    {
      destination: "Singapore",
      image: "🌆",
      title: "Singapore City Explorer",
      duration: "4 Days / 3 Nights",
      price: "₹35,000",
      highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Shopping Districts"],
      inclusions: ["Flights from India", "4-Star Hotel", "Daily Breakfast", "City Tour", "Attraction Passes"]
    },
    {
      destination: "Singapore",
      image: "🌆",
      title: "Singapore & Malaysia Combo",
      duration: "6 Days / 5 Nights",
      price: "₹48,000",
      highlights: ["Singapore Highlights", "Kuala Lumpur", "Petronas Twin Towers", "Night Markets"],
      inclusions: ["Flights from India", "4-Star Hotels", "All Meals", "Both Cities Covered", "Transport Included"]
    }
  ]

  const groupedPackages = packages.reduce((acc, pkg) => {
    if (!acc[pkg.destination]) {
      acc[pkg.destination] = []
    }
    acc[pkg.destination].push(pkg)
    return acc
  }, {} as Record<string, typeof packages>)

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Explore the World with Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Curated tour packages from India to your dream destinations. Experience culture, adventure, and beauty with carefully planned itineraries.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {Object.entries(groupedPackages).map(([destination, destPackages]) => (
              <div key={destination}>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
                  Packages to {destination}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {destPackages.map((pkg, idx) => (
                    <div 
                      key={idx}
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg"
                    >
                      {/* Image */}
                      <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl">
                        {pkg.image}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {pkg.title}
                        </h3>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4 text-accent" />
                          {pkg.duration}
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-4">
                          <DollarSign className="h-5 w-5 text-accent" />
                          <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                          <span className="text-sm text-muted-foreground">per person</span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                          <ul className="space-y-1">
                            {pkg.highlights.slice(0, 2).map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          {pkg.highlights.length > 2 && (
                            <p className="text-sm text-muted-foreground mt-1">
                              +{pkg.highlights.length - 2} more highlights
                            </p>
                          )}
                        </div>

                        {/* Inclusions */}
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-foreground mb-2">Includes:</p>
                          <ul className="space-y-1">
                            {pkg.inclusions.slice(0, 2).map((inclusion, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-accent shrink-0" />
                                {inclusion}
                              </li>
                            ))}
                          </ul>
                          {pkg.inclusions.length > 2 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              +{pkg.inclusions.length - 2} more inclusions
                            </p>
                          )}
                        </div>

                        {/* CTA */}
                        <Button className="w-full" asChild>
                          <Link href="#contact">Inquire Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Book Your Adventure?</h2>
          <p className="text-muted-foreground mb-8">
            Contact us today to customize your package or answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="tel:+911140154725">Call: +91-11-40154725</a>
            </Button>
            <Button asChild>
              <a href="mailto:insighttravels95@gmail.com">Email: insighttravels95@gmail.com</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
