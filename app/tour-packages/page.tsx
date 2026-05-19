"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, CheckCircle, Flame, Trophy, AlertCircle, Users, Calendar, Zap, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourFilterSidebar, type FilterState } from "@/components/tour-filter-sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface Package {
  destination: string
  image: string
  title: string
  duration: string
  durationDays: number
  price: number
  highlights: string[]
  inclusions: string[]
  season: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  travelTypes: string[]
  groupSize: string
  spotsRemaining: number
  isPopular: boolean
  discount: number | null
  itinerary: { day: number; activity: string }[]
}

export default function TourPackagesPage() {
  const [filters, setFilters] = useState<FilterState>({
    destinations: [],
    priceRange: [100000, 300000],
    durations: [],
    travelTypes: [],
    seasons: [],
  })
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const packages: Package[] = [
    // Australia
    {
      destination: "Australia",
      image: "/images/package-sydney-reef.jpg",
      title: "Sydney & Great Barrier Reef",
      duration: "8 Days / 7 Nights",
      durationDays: 8,
      price: 285000,
      season: "Oct-Mar",
      difficulty: "Easy",
      travelTypes: ["Leisure", "Adventure"],
      groupSize: "8-20 people",
      spotsRemaining: 2,
      isPopular: true,
      discount: null,
      itinerary: [
        { day: 1, activity: "Arrival in Sydney, check-in at hotel" },
        { day: 2, activity: "Sydney Opera House & Harbour Bridge tour" },
        { day: 3, activity: "Bondi Beach visit and coastal walk" },
        { day: 4, activity: "Great Barrier Reef snorkeling" },
        { day: 5, activity: "Blue Mountains day excursion" },
        { day: 6, activity: "Melbourne city tour" },
        { day: 7, activity: "Wildlife encounters" },
        { day: 8, activity: "Departure" },
      ],
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
      image: "/images/package-wine-valley.jpg",
      title: "Melbourne & Adelaide Wine Tour",
      duration: "7 Days / 6 Nights",
      durationDays: 7,
      price: 245000,
      season: "Oct-Mar",
      difficulty: "Easy",
      travelTypes: ["Leisure", "Luxury"],
      groupSize: "6-15 people",
      spotsRemaining: 5,
      isPopular: false,
      discount: 10,
      itinerary: [
        { day: 1, activity: "Arrival in Melbourne" },
        { day: 2, activity: "Barossa Valley wine tasting tour" },
        { day: 3, activity: "Adelaide Hills scenic drive" },
        { day: 4, activity: "Great Ocean Road exploration" },
        { day: 5, activity: "Yarra Valley wineries visit" },
        { day: 6, activity: "Gourmet dining experience" },
        { day: 7, activity: "Departure" },
      ],
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
      image: "/images/package-uluru.jpg",
      title: "Uluru Red Centre Adventure",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      price: 215000,
      season: "May-Aug",
      difficulty: "Challenging",
      travelTypes: ["Adventure"],
      groupSize: "10-18 people",
      spotsRemaining: 3,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Arrival at Uluru" },
        { day: 2, activity: "Uluru sunset viewing" },
        { day: 3, activity: "Kings Canyon trek" },
        { day: 4, activity: "Aboriginal cultural experience" },
        { day: 5, activity: "4x4 desert adventure" },
        { day: 6, activity: "Departure" },
      ],
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
      image: "/images/package-bali-beach.jpg",
      title: "Bali Beach Paradise",
      duration: "5 Days / 4 Nights",
      durationDays: 5,
      price: 135000,
      season: "Apr-Oct",
      difficulty: "Easy",
      travelTypes: ["Leisure", "Honeymoon"],
      groupSize: "2-30 people",
      spotsRemaining: 1,
      isPopular: true,
      discount: null,
      itinerary: [
        { day: 1, activity: "Arrival in Bali" },
        { day: 2, activity: "Ubud rice terraces visit" },
        { day: 3, activity: "Bali Swing adventure" },
        { day: 4, activity: "Beach relaxation & spa treatment" },
        { day: 5, activity: "Departure" },
      ],
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
      image: "/images/package-mount-batur.jpg",
      title: "Adventure & Culture Week",
      duration: "7 Days / 6 Nights",
      durationDays: 7,
      price: 185000,
      season: "Apr-Oct",
      difficulty: "Moderate",
      travelTypes: ["Adventure", "Cultural"],
      groupSize: "8-25 people",
      spotsRemaining: 7,
      isPopular: true,
      discount: 15,
      itinerary: [
        { day: 1, activity: "Arrival and orientation" },
        { day: 2, activity: "Mount Batur sunrise trek" },
        { day: 3, activity: "Waterfall trekking adventure" },
        { day: 4, activity: "Traditional village exploration" },
        { day: 5, activity: "Spa and wellness day" },
        { day: 6, activity: "Snorkeling at coral reefs" },
        { day: 7, activity: "Departure" },
      ],
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
      image: "/images/package-honeymoon-bali.jpg",
      title: "Honeymoon Special",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      price: 195000,
      season: "Nov-Mar",
      difficulty: "Easy",
      travelTypes: ["Leisure", "Honeymoon", "Luxury"],
      groupSize: "2 people",
      spotsRemaining: 4,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Romantic arrival and check-in" },
        { day: 2, activity: "Private beachfront dinner" },
        { day: 3, activity: "Sunset cruise" },
        { day: 4, activity: "Couples spa experience" },
        { day: 5, activity: "Island hopping adventure" },
        { day: 6, activity: "Departure with memories" },
      ],
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
      image: "/images/package-halong-bay.jpg",
      title: "Hanoi & Halong Bay",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      price: 155000,
      season: "Oct-Apr",
      difficulty: "Easy",
      travelTypes: ["Cultural", "Adventure"],
      groupSize: "10-20 people",
      spotsRemaining: 8,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Arrival in Hanoi" },
        { day: 2, activity: "Hanoi Old Quarter exploration" },
        { day: 3, activity: "Halong Bay cruise departure" },
        { day: 4, activity: "Overnight on traditional junk boat" },
        { day: 5, activity: "Kayaking & water activities" },
        { day: 6, activity: "Departure" },
      ],
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
      image: "/images/package-mekong-delta.jpg",
      title: "Ho Chi Minh to Mekong Delta",
      duration: "7 Days / 6 Nights",
      durationDays: 7,
      price: 175000,
      season: "Nov-Mar",
      difficulty: "Easy",
      travelTypes: ["Cultural"],
      groupSize: "8-18 people",
      spotsRemaining: 6,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Ho Chi Minh City arrival" },
        { day: 2, activity: "War history and heritage tour" },
        { day: 3, activity: "Mekong Delta cruise" },
        { day: 4, activity: "Floating markets exploration" },
        { day: 5, activity: "Village homestay experience" },
        { day: 6, activity: "Fruit orchards tour" },
        { day: 7, activity: "Departure" },
      ],
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
      image: "/images/package-sapa-terraces.jpg",
      title: "Northern Vietnam Explorer",
      duration: "8 Days / 7 Nights",
      durationDays: 8,
      price: 195000,
      season: "Sep-Nov",
      difficulty: "Moderate",
      travelTypes: ["Adventure", "Cultural"],
      groupSize: "10-20 people",
      spotsRemaining: 5,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Hanoi arrival and orientation" },
        { day: 2, activity: "Street food tour" },
        { day: 3, activity: "Halong Bay cruise" },
        { day: 4, activity: "Sapa trek starts" },
        { day: 5, activity: "Mountain trekking adventure" },
        { day: 6, activity: "Village homestay" },
        { day: 7, activity: "Local artisan workshops" },
        { day: 8, activity: "Departure" },
      ],
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
      image: "/images/package-phuket-islands.jpg",
      title: "Bangkok & Phuket Beach",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      price: 165000,
      season: "Nov-Feb",
      difficulty: "Easy",
      travelTypes: ["Leisure"],
      groupSize: "6-25 people",
      spotsRemaining: 9,
      isPopular: true,
      discount: null,
      itinerary: [
        { day: 1, activity: "Bangkok arrival" },
        { day: 2, activity: "Grand Palace tour" },
        { day: 3, activity: "Phuket beach arrival" },
        { day: 4, activity: "Island hopping adventure" },
        { day: 5, activity: "Beach relaxation & activities" },
        { day: 6, activity: "Departure" },
      ],
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
      image: "/images/package-elephant-sanctuary.jpg",
      title: "Chiang Mai Cultural Experience",
      duration: "7 Days / 6 Nights",
      durationDays: 7,
      price: 175000,
      season: "Nov-Feb",
      difficulty: "Easy",
      travelTypes: ["Cultural"],
      groupSize: "8-20 people",
      spotsRemaining: 10,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Chiang Mai arrival" },
        { day: 2, activity: "Elephant sanctuary visit" },
        { day: 3, activity: "Buddhist temple tours" },
        { day: 4, activity: "Thai cooking class" },
        { day: 5, activity: "Night Bazaar shopping" },
        { day: 6, activity: "Silk weaving workshops" },
        { day: 7, activity: "Departure" },
      ],
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
      image: "/images/package-krabi-railay.jpg",
      title: "Krabi & Island Paradise",
      duration: "5 Days / 4 Nights",
      durationDays: 5,
      price: 145000,
      season: "Nov-Apr",
      difficulty: "Moderate",
      travelTypes: ["Adventure", "Leisure"],
      groupSize: "6-20 people",
      spotsRemaining: 2,
      isPopular: true,
      discount: null,
      itinerary: [
        { day: 1, activity: "Krabi arrival" },
        { day: 2, activity: "Phi Phi Islands snorkeling" },
        { day: 3, activity: "Railay Beach exploration" },
        { day: 4, activity: "Rock climbing adventure" },
        { day: 5, activity: "Departure" },
      ],
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
      image: "/images/package-singapore-marina.jpg",
      title: "Singapore City Explorer",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      price: 125000,
      season: "Jan-Dec",
      difficulty: "Easy",
      travelTypes: ["Leisure", "Luxury"],
      groupSize: "4-30 people",
      spotsRemaining: 12,
      isPopular: false,
      discount: null,
      itinerary: [
        { day: 1, activity: "Singapore arrival" },
        { day: 2, activity: "Marina Bay Sands tour" },
        { day: 3, activity: "Sentosa Island adventure" },
        { day: 4, activity: "Departure" },
      ],
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
      image: "/images/package-singapore-malaysia.jpg",
      title: "Singapore & Malaysia Combo",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      price: 165000,
      season: "Jan-Dec",
      difficulty: "Easy",
      travelTypes: ["Leisure"],
      groupSize: "6-20 people",
      spotsRemaining: 8,
      isPopular: false,
      discount: 12,
      itinerary: [
        { day: 1, activity: "Singapore arrival" },
        { day: 2, activity: "Singapore city exploration" },
        { day: 3, activity: "Travel to Kuala Lumpur" },
        { day: 4, activity: "Petronas Twin Towers & Batu Caves" },
        { day: 5, activity: "Night market & local experiences" },
        { day: 6, activity: "Departure" },
      ],
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
    },
  ]

  // Filter packages based on active filters
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Destination filter
      if (filters.destinations.length > 0 && !filters.destinations.includes(pkg.destination)) {
        return false
      }

      // Price filter
      if (pkg.price < filters.priceRange[0] || pkg.price > filters.priceRange[1]) {
        return false
      }

      // Duration filter
      if (filters.durations.length > 0) {
        const durationMatch = filters.durations.some((dur) => {
          if (dur === "5-6 Days" && pkg.durationDays >= 5 && pkg.durationDays <= 6) return true
          if (dur === "7 Nights" && pkg.durationDays === 7) return true
          if (dur === "8+ Days" && pkg.durationDays >= 8) return true
          return false
        })
        if (!durationMatch) return false
      }

      // Travel type filter
      if (filters.travelTypes.length > 0) {
        const typeMatch = filters.travelTypes.some((type) => pkg.travelTypes.includes(type))
        if (!typeMatch) return false
      }

      // Season filter
      if (filters.seasons.length > 0 && !filters.seasons.includes(pkg.season)) {
        return false
      }

      return true
    })
  }, [packages, filters])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "Leisure":
        return "🏖️"
      case "Adventure":
        return "🎒"
      case "Cultural":
        return "🏛️"
      case "Luxury":
        return "✨"
      case "Honeymoon":
        return "💕"
      default:
        return "🌍"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="gap-2"
            >
              {mobileFilterOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              {mobileFilterOpen ? "Hide" : "Show"} Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar - Desktop & Mobile */}
            <div className={`${mobileFilterOpen ? "block" : "hidden"} lg:block lg:flex-shrink-0 w-full lg:w-auto`}>
              <TourFilterSidebar filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Packages Grid */}
            <div className="flex-1 w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Available Packages ({filteredPackages.length})
                </h2>
                <p className="text-muted-foreground">
                  {filteredPackages.length === 0
                    ? "No packages match your filters. Try adjusting your search criteria."
                    : `Showing ${filteredPackages.length} package${filteredPackages.length !== 1 ? "s" : ""}`}
                </p>
              </div>

              {filteredPackages.length === 0 ? (
                <div className="text-center py-16">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No packages found matching your criteria</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredPackages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all hover:shadow-lg flex flex-col h-full relative"
                    >
                      {/* Badges */}
                      {(pkg.isPopular || pkg.discount) && (
                        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                          {pkg.isPopular && (
                            <Badge className="bg-amber-500 hover:bg-amber-600 gap-1">
                              <Trophy className="h-3 w-3" />
                              Most Popular
                            </Badge>
                          )}
                          {pkg.discount && (
                            <Badge className="bg-red-500 hover:bg-red-600 gap-1">
                              <Flame className="h-3 w-3" />
                              Save {pkg.discount}%
                            </Badge>
                          )}
                          {pkg.spotsRemaining <= 3 && (
                            <Badge className="bg-orange-500 hover:bg-orange-600 gap-1">
                              <AlertCircle className="h-3 w-3" />
                              Only {pkg.spotsRemaining} left
                            </Badge>
                          )}
                        </div>
                      )}

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
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.title}</h3>

                        {/* Quick Facts */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="text-xs text-muted-foreground">{pkg.season}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent" />
                            <span className="text-xs text-muted-foreground">{pkg.groupSize}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-accent" />
                            <span className="text-xs text-muted-foreground">{pkg.duration}</span>
                          </div>
                          <div>
                            <Badge variant="outline" className={`text-xs ${getDifficultyColor(pkg.difficulty)}`}>
                              {pkg.difficulty}
                            </Badge>
                          </div>
                        </div>

                        {/* Travel Types */}
                        <div className="flex gap-2 mb-4 flex-wrap">
                          {pkg.travelTypes.map((type) => (
                            <Badge key={type} variant="secondary" className="text-xs">
                              {getActivityIcon(type)} {type}
                            </Badge>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="mb-4 pb-4 border-b border-border">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-accent">₹{pkg.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground">per person</span>
                          </div>
                          {pkg.discount && (
                            <p className="text-xs text-green-600 mt-1">Early bird discount: Save ₹{Math.round((pkg.price * pkg.discount) / 100)}</p>
                          )}
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                          <ul className="space-y-1">
                            {pkg.highlights.slice(0, 3).map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Itinerary */}
                        <Collapsible className="mb-4">
                          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
                            <ChevronDown className="h-4 w-4" />
                            Day-by-Day Itinerary
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-3 space-y-2">
                            {pkg.itinerary.map((item) => (
                              <div key={item.day} className="text-xs text-muted-foreground bg-background/50 rounded p-2">
                                <span className="font-semibold text-foreground">Day {item.day}:</span> {item.activity}
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>

                        {/* CTA */}
                        <Button className="w-full" asChild>
                          <Link href="#contact" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                            Inquire Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
