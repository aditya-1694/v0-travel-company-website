'use client'

import { CheckCircle, MapPin, Zap, Plane } from 'lucide-react'

export function HowWeWorkSection() {
  const steps = [
    {
      icon: MapPin,
      number: '01',
      title: 'Tell Us Your Dreams',
      description: 'Share your travel vision—where you want to go, when, and what matters most to you.',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Zap,
      number: '02',
      title: 'We Craft It',
      description: 'Our travel experts design a personalized itinerary tailored to your preferences and budget.',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'We Handle Everything',
      description: 'From bookings to logistics, we manage all the details so you can focus on excitement.',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Plane,
      number: '04',
      title: 'You Explore',
      description: 'Experience unforgettable moments while we provide 24/7 support throughout your journey.',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Simple & Transparent</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground text-balance">
            How We Make Travel Happen
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From your first dream to the moment you step on that plane, we're with you at every stage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[60%] w-[calc(200%-40px)] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}

                {/* Card */}
                <div className={`h-full rounded-2xl border border-border/50 bg-gradient-to-br ${step.color} p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300`}>
                  {/* Number Badge */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <Icon className="h-8 w-8 text-accent mb-4" />

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
