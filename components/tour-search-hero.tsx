"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TourSearchHeroProps {
  onSearch: (filters: { destination?: string; travelType?: string; minPrice?: number; maxPrice?: number; duration?: string }) => void
}

export function TourSearchHero({ onSearch }: TourSearchHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-accent/10 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Explore the World with Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Curated tour packages from India to your dream destinations. Experience culture, adventure, and beauty with carefully planned itineraries.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Destination</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="bali">Bali</SelectItem>
                  <SelectItem value="vietnam">Vietnam</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Travel Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leisure">Leisure</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Duration</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-6">5-6 Days</SelectItem>
                  <SelectItem value="7">7 Nights</SelectItem>
                  <SelectItem value="8">8+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Max Budget (per person)</label>
              <Input type="text" placeholder="₹2,50,000" className="w-full" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Search Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
