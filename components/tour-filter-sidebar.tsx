"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

export interface FilterState {
  destinations: string[]
  priceRange: [number, number]
  durations: string[]
  travelTypes: string[]
  seasons: string[]
}

interface TourFilterSidebarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function TourFilterSidebar({ filters, onFiltersChange }: TourFilterSidebarProps) {
  const destinations = ["Australia", "Bali", "Vietnam", "Thailand", "Singapore"]
  const durations = ["5-6 Days", "7 Nights", "8+ Days"]
  const travelTypes = ["Leisure", "Adventure", "Cultural", "Luxury", "Honeymoon"]
  const seasons = ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"]

  const handleDestinationChange = (destination: string, checked: boolean) => {
    const updated = checked
      ? [...filters.destinations, destination]
      : filters.destinations.filter((d) => d !== destination)
    onFiltersChange({ ...filters, destinations: updated })
  }

  const handleDurationChange = (duration: string, checked: boolean) => {
    const updated = checked
      ? [...filters.durations, duration]
      : filters.durations.filter((d) => d !== duration)
    onFiltersChange({ ...filters, durations: updated })
  }

  const handleTravelTypeChange = (type: string, checked: boolean) => {
    const updated = checked
      ? [...filters.travelTypes, type]
      : filters.travelTypes.filter((t) => t !== type)
    onFiltersChange({ ...filters, travelTypes: updated })
  }

  const handleSeasonChange = (season: string, checked: boolean) => {
    const updated = checked
      ? [...filters.seasons, season]
      : filters.seasons.filter((s) => s !== season)
    onFiltersChange({ ...filters, seasons: updated })
  }

  const handlePriceChange = (value: [number, number]) => {
    onFiltersChange({ ...filters, priceRange: value })
  }

  return (
    <div className="w-80 bg-card rounded-2xl border border-border p-6 h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-foreground mb-6">Filters</h3>

      {/* Destination */}
      <div className="mb-8">
        <h4 className="font-medium text-foreground mb-3 text-sm">Destination</h4>
        <div className="space-y-2">
          {destinations.map((dest) => (
            <div key={dest} className="flex items-center gap-2">
              <Checkbox
                id={`dest-${dest}`}
                checked={filters.destinations.includes(dest)}
                onCheckedChange={(checked) => handleDestinationChange(dest, checked as boolean)}
              />
              <Label htmlFor={`dest-${dest}`} className="text-sm font-normal cursor-pointer">
                {dest}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-medium text-foreground mb-4 text-sm">Price Range (per person)</h4>
        <Slider
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          min={100000}
          max={300000}
          step={10000}
          className="mb-3"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>₹{(filters.priceRange[0] / 100000).toFixed(1)}L</span>
          <span>₹{(filters.priceRange[1] / 100000).toFixed(1)}L</span>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Duration */}
      <div className="mb-8">
        <h4 className="font-medium text-foreground mb-3 text-sm">Duration</h4>
        <div className="space-y-2">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center gap-2">
              <Checkbox
                id={`dur-${duration}`}
                checked={filters.durations.includes(duration)}
                onCheckedChange={(checked) => handleDurationChange(duration, checked as boolean)}
              />
              <Label htmlFor={`dur-${duration}`} className="text-sm font-normal cursor-pointer">
                {duration}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Travel Type */}
      <div className="mb-8">
        <h4 className="font-medium text-foreground mb-3 text-sm">Travel Type</h4>
        <div className="space-y-2">
          {travelTypes.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                id={`type-${type}`}
                checked={filters.travelTypes.includes(type)}
                onCheckedChange={(checked) => handleTravelTypeChange(type, checked as boolean)}
              />
              <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Best Season */}
      <div>
        <h4 className="font-medium text-foreground mb-3 text-sm">Best Season</h4>
        <div className="space-y-2">
          {seasons.map((season) => (
            <div key={season} className="flex items-center gap-2">
              <Checkbox
                id={`season-${season}`}
                checked={filters.seasons.includes(season)}
                onCheckedChange={(checked) => handleSeasonChange(season, checked as boolean)}
              />
              <Label htmlFor={`season-${season}`} className="text-sm font-normal cursor-pointer">
                {season}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
