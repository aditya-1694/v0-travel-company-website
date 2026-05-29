'use client'

import Image from 'next/image'
import { Star, MapPin } from 'lucide-react'

export function TravelMomentsSection() {
  const moments = [
    {
      image: '/images/carousel-leisure.jpg',
      title: 'Beach Bliss in Paradise',
      location: 'Bali, Indonesia',
      quote: '"Insight made our family vacation effortless. We just relaxed while they handled everything!"',
      author: 'The Sharma Family'
    },
    {
      image: '/images/carousel-corporate.jpg',
      title: 'Seamless Business Travel',
      location: 'Singapore',
      quote: '"Our corporate retreats are now stress-free thanks to Insight\'s expert planning."',
      author: 'Tech startup CEO'
    },
    {
      image: '/images/carousel-adventure.jpg',
      title: 'Adventure Unleashed',
      location: 'Vietnam & Thailand',
      quote: '"Best adventure trip ever! Insight found hidden gems we would never have discovered."',
      author: 'Adventure Seekers Club'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Real Stories</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Travel Moments That Matter
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Hear from travelers who've experienced unforgettable journeys with us.
          </p>
        </div>

        {/* Moments Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-foreground">{moment.title}</h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {moment.location}
                </div>

                <p className="text-muted-foreground italic">
                  {moment.quote}
                </p>

                <p className="text-sm font-semibold text-foreground">
                  — {moment.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
