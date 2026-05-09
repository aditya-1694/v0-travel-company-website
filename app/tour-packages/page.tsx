"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TourPackagesPage() {
  const packages = [
    // Australia
    {
      destination: "Australia",
      image: "/images/packages-australia.jpg",
      title: "Sydney & Great Barrier Reef",
      duration: "8 Days / 7 Nights",
      price: "₹2,85,000",
      highlights: [
        "Sydney Opera House & Harbour Bridge tour with expert guide",
        "Bondi Beach visit and coastal walk experience",
        "Great Barrier Reef snorkeling and marine life exploration",
        "Melbourne city tour with cultural landmarks",
        "Blue Mountains day excursion with scenic views",
        "Wildlife encounters and native animal experiences"
      ],
      inclusions: [
        "5-star accommodation in premium hotels",
        "Daily breakfast, lunch, and dinner included",
        "All guided tours and entrance fees",
        "Reef snorkeling equipment and certified guide",
        "Ground transportation and airport transfers",
        "Travel insurance and emergency assistance",
        "Professional Indian tour coordinator"
      ]
    },
    {
      destination: "Australia",
      image: "/images/packages-australia.jpg",
      title: "Melbourne & Adelaide Wine Tour",
      duration: "7 Days / 6 Nights",
      price: "₹2,45,000",
      highlights: [
        "Barossa Valley premium wine tastings and vineyard tours",
        "Adelaide Hills scenic drive and local markets",
        "Great Ocean Road with Twelve Apostles rock formations",
        "Melbourne cultural heritage and street art tour",
        "Yarra Valley wineries and boutique brewery visits",
        "Gourmet dining experiences with Australian cuisine"
      ],
      inclusions: [
        "4-star accommodation in wine region hotels",
        "All meals including gourmet dinners",
        "Wine tastings at 5+ premium wineries",
        "Professional sommelier-guided experiences",
        "Luxury coach transportation throughout",
        "All entrance tickets and tour guiding",
        "Wine and produce shopping time included"
      ]
    },
    {
      destination: "Australia",
      image: "/images/packages-australia.jpg",
      title: "Uluru Red Centre Adventure",
      duration: "6 Days / 5 Nights",
      price: "₹2,15,000",
      highlights: [
        "Uluru sunset and sunrise viewings with photography time",
        "Kings Canyon Trek with trained trekking guides",
        "Aboriginal cultural experience and storytelling",
        "Outback desert adventure with 4x4 excursions",
        "Kata Tjuta Valley rock formation exploration",
        "Indigenous art and culture museum visits"
      ],
      inclusions: [
        "Premium desert resort accommodation",
        "All meals including outback BBQ experiences",
        "Professional trekking guide and safety equipment",
        "Aboriginal guide for cultural experiences",
        "Daily 4x4 desert tours",
        "All national park entrance permits",
        "Camping comfort experience option"
      ]
    },

    // Bali
    {
      destination: "Bali",
      image: "/images/packages-bali.jpg",
      title: "Bali Beach Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹1,35,000",
      highlights: [
        "Ubud rice terraces with scenic photo opportunities",
        "Bali Swing adventure among jungle canopy",
        "Tanah Lot temple with sunset ocean views",
        "Beach relaxation at Seminyak and Sanur beaches",
        "Traditional Balinese spa and wellness treatments",
        "Local market exploration and cultural immersion"
      ],
      inclusions: [
        "4-star beachfront resort accommodation",
        "Daily breakfast, lunch, and dinner",
        "All guided tours and entrance fees",
        "Bali swing adventure with safety harness",
        "Spa treatments and massages included",
        "Scooter tour with experienced guide",
        "Airport transfers and local transportation"
      ]
    },
    {
      destination: "Bali",
      image: "/images/packages-bali.jpg",
      title: "Adventure & Culture Week",
      duration: "7 Days / 6 Nights",
      price: "₹1,85,000",
      highlights: [
        "Mount Batur sunrise trek with expert mountaineer guide",
        "Waterfall trekking through rainforests to Tegenungan",
        "Traditional village exploration and craft workshops",
        "Spa and wellness center with ancient Balinese treatments",
        "Snorkeling in coral reefs and marine sanctuary",
        "Temple ceremonies and spiritual experiences"
      ],
      inclusions: [
        "5-star resort with premium amenities",
        "All meals featuring local and international cuisine",
        "Professional trek guides and climbing equipment",
        "Unlimited spa treatments and wellness sessions",
        "Snorkeling equipment and marine guide",
        "Workshop materials for craft activities",
        "Daily cultural activities and excursions"
      ]
    },
    {
      destination: "Bali",
      image: "/images/packages-bali.jpg",
      title: "Honeymoon Special",
      duration: "6 Days / 5 Nights",
      price: "₹1,95,000",
      highlights: [
        "Private beachfront dinner with candlelight setup",
        "Romantic sunset cruise with refreshments",
        "Couples spa and massage experience",
        "Island hopping tour with private boat",
        "Romantic helicopter ride over Bali landscape",
        "Private beach photography session"
      ],
      inclusions: [
        "Luxury 5-star oceanfront villa accommodation",
        "Romantic dinners at premium restaurants",
        "Private boat for island hopping tours",
        "Couples spa and massage packages",
        "Champagne and romantic setup in villa",
        "Professional photographer for sessions",
        "Concierge service for romantic arrangements"
      ]
    },

    // Vietnam
    {
      destination: "Vietnam",
      image: "/images/packages-vietnam.jpg",
      title: "Hanoi & Halong Bay",
      duration: "6 Days / 5 Nights",
      price: "₹1,55,000",
      highlights: [
        "Hanoi Old Quarter exploration with local guide",
        "Halong Bay UNESCO cruise on luxury junk boat",
        "Water puppet show - traditional Vietnamese art",
        "Overnight stay on traditional junk in Halong Bay",
        "Kayaking among limestone karsts",
        "Traditional Vietnamese cooking class"
      ],
      inclusions: [
        "3-star and 4-star mixed accommodation",
        "All meals including onboard dining",
        "Luxury cruise on traditional junk boat",
        "Water puppet show tickets",
        "Kayaking equipment and guide",
        "Cooking class with professional chef",
        "All transfers and tour guidance"
      ]
    },
    {
      destination: "Vietnam",
      image: "/images/packages-vietnam.jpg",
      title: "Ho Chi Minh to Mekong Delta",
      duration: "7 Days / 6 Nights",
      price: "₹1,75,000",
      highlights: [
        "Ho Chi Minh City war history and heritage tour",
        "Mekong Delta boat cruise through backwaters",
        "Floating markets exploration and local trading",
        "War museums and historical sites",
        "Fruit orchards and local farm visits",
        "Traditional village homestay experience"
      ],
      inclusions: [
        "4-star city and 3-star delta accommodation",
        "All meals including local cuisine",
        "Private Mekong Delta river cruises",
        "Museum entrance tickets and guide fees",
        "Floating market tours",
        "Homestay accommodation for authentic experience",
        "Daily transportation and tour coordination"
      ]
    },
    {
      destination: "Vietnam",
      image: "/images/packages-vietnam.jpg",
      title: "Northern Vietnam Explorer",
      duration: "8 Days / 7 Nights",
      price: "₹1,95,000",
      highlights: [
        "Sapa trek through terraced rice paddies",
        "Hanoi cultural immersion and street food tour",
        "Halong Bay multi-day cruise",
        "Local village homestay with ethnic minorities",
        "Ancient temple exploration",
        "Local artisan workshops and craft demonstrations"
      ],
      inclusions: [
        "Mix of 4-star hotels and homestay accommodation",
        "All meals including traditional home-cooked food",
        "Professional mountain trekking guide",
        "Halong Bay luxury cruise for 2 nights",
        "Homestay with ethnic family",
        "Workshop participation fees",
        "All guides, permits and transportation"
      ]
    },

    // Thailand
    {
      destination: "Thailand",
      image: "/images/packages-thailand.jpg",
      title: "Bangkok & Phuket Beach",
      duration: "6 Days / 5 Nights",
      price: "₹1,65,000",
      highlights: [
        "Bangkok Grand Palace tour with expert historian",
        "Phuket beach resorts and water activities",
        "Island hopping to Phi Phi Islands and Coral Island",
        "Night markets and street food exploration",
        "Thai massage training session",
        "Muay Thai boxing training experience"
      ],
      inclusions: [
        "5-star resort accommodation in both cities",
        "All meals with daily Thai and international cuisine",
        "Grand Palace and temple entrance fees",
        "Island hopping boat tours with guide",
        "Thai massage training classes",
        "Muay Thai gym training sessions",
        "Airport transfers and transportation"
      ]
    },
    {
      destination: "Thailand",
      image: "/images/packages-thailand.jpg",
      title: "Chiang Mai Cultural Experience",
      duration: "7 Days / 6 Nights",
      price: "₹1,75,000",
      highlights: [
        "Elephant sanctuary visit and ethical elephant interaction",
        "Buddhist temple tours with meditation sessions",
        "Night Bazaar shopping and local markets",
        "Thai cooking classes with professional chefs",
        "Traditional Lanna culture demonstrations",
        "Silk weaving workshops and artisan visits"
      ],
      inclusions: [
        "4-star boutique hotels in cultural settings",
        "All meals including cooking class meals",
        "Elephant sanctuary with ethical practices",
        "Cooking classes with ingredient market visit",
        "Temple tours and meditation sessions",
        "Artisan workshop visits and participation",
        "Daily guided cultural tours"
      ]
    },
    {
      destination: "Thailand",
      image: "/images/packages-thailand.jpg",
      title: "Krabi & Island Paradise",
      duration: "5 Days / 4 Nights",
      price: "₹1,45,000",
      highlights: [
        "Phi Phi Islands snorkeling and beach hopping",
        "Railay Beach kayaking and rock climbing",
        "Rock climbing with professional instructors",
        "Seafood dinner cruise with sunset views",
        "Emerald Pool nature trail exploration",
        "Limestone cave exploration and swimming"
      ],
      inclusions: [
        "5-star beachfront resort accommodation",
        "All meals with fresh seafood options",
        "Island tour boat with snorkeling guide",
        "Rock climbing equipment and instructor",
        "Sunset dinner cruise with beverages",
        "Nature trail guide and entry permits",
        "Water activities and safety equipment"
      ]
    },

    // Singapore
    {
      destination: "Singapore",
      image: "/images/packages-singapore.jpg",
      title: "Singapore City Explorer",
      duration: "4 Days / 3 Nights",
      price: "₹1,25,000",
      highlights: [
        "Marina Bay Sands observation deck with views",
        "Gardens by the Bay light show experience",
        "Sentosa Island theme parks and attractions",
        "Shopping districts - Orchard Road and Changi",
        "Cultural neighborhoods - Chinatown and Arab Quarter",
        "Singapore Flyer ferris wheel experience"
      ],
      inclusions: [
        "5-star city hotel accommodation",
        "Daily breakfast and select meals",
        "All major attraction entrance tickets",
        "Singapore Flyer ride included",
        "Guided city tours with cultural expert",
        "Airport transfers and metro card",
        "Shopping discount vouchers"
      ]
    },
    {
      destination: "Singapore",
      image: "/images/packages-singapore.jpg",
      title: "Singapore & Malaysia Combo",
      duration: "6 Days / 5 Nights",
      price: "₹1,65,000",
      highlights: [
        "Singapore Marina Bay and Gardens exploration",
        "Kuala Lumpur Petronas Twin Towers experience",
        "Batu Caves limestone caverns and temple",
        "Night markets in both cities",
        "Petronas shopping malls and retail therapy",
        "Colonial architecture tours in both cities"
      ],
      inclusions: [
        "5-star accommodation in both cities",
        "All meals with local cuisine specialties",
        "All major attraction entrance fees",
        "Cross-border transportation included",
        "Professional bilingual tour guides",
        "Petronas Twin Towers experience",
        "Shopping mall discount vouchers"
      ]
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
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg flex flex-col h-full"
                    >
                      {/* Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {pkg.title}
                        </h3>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4 text-accent" />
                          {pkg.duration}
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                          <span className="text-sm text-muted-foreground ml-2">per person</span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                          <ul className="space-y-1">
                            {pkg.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Inclusions */}
                        <div className="mb-6 flex-grow">
                          <p className="text-sm font-semibold text-foreground mb-2">Includes:</p>
                          <ul className="space-y-1">
                            {pkg.inclusions.map((inclusion, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                                <span>{inclusion}</span>
                              </li>
                            ))}
                          </ul>
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
