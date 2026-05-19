"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export function FeaturedPackagesSection() {
  const featuredPackages = [
    {
      id: 1,
      title: "Bali Paradise Escape",
      destination: "Indonesia",
      image: "/images/carousel-leisure.jpg",
      price: 125000,
      duration: "6 nights",
      groupSize: "4-10 people",
      highlights: ["Beaches", "Culture", "Adventure"]
    },
    {
      id: 2,
      title: "Thailand Adventure",
      destination: "Thailand",
      image: "/images/carousel-adventure.jpg",
      price: 145000,
      duration: "7 nights",
      groupSize: "6-12 people",
      highlights: ["Temples", "Food", "Island Hopping"]
    },
    {
      id: 3,
      title: "Australia Explorer",
      destination: "Australia",
      image: "/images/carousel-luxury.jpg",
      price: 180000,
      duration: "8 nights",
      groupSize: "2-8 people",
      highlights: ["Outback", "Sydney", "Great Barrier Reef"]
    },
    {
      id: 4,
      title: "Vietnam & Cambodia",
      destination: "Southeast Asia",
      image: "/images/carousel-corporate.jpg",
      price: 135000,
      duration: "7 nights",
      groupSize: "6-15 people",
      highlights: ["Hanoi", "Ha Long Bay", "Angkor Wat"]
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Featured Packages</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Curated Travel Experiences
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our most popular tour packages, handpicked for unforgettable journeys around the world
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="group overflow-hidden rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Destination Badge */}
                <Badge variant="outline" className="w-fit text-xs">
                  {pkg.destination}
                </Badge>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">
                    {pkg.title}
                  </h3>
                </div>

                {/* Quick Facts */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    {pkg.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{(pkg.price / 100000).toFixed(1)}L
                    </p>
                  </div>
                  <Button asChild className="w-full group/btn" variant="outline">
                    <Link href="/tour-packages">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/tour-packages">
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
