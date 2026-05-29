'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function ExploreCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent via-accent/90 to-accent/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">Ready to Explore?</span>
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance mb-6">
            Your Next Adventure Awaits
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Whether it's a leisurely escape, a thrilling expedition, or seamless business travel—we're here to turn your travel dreams into reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-background text-accent hover:bg-background/90 gap-2 h-14 px-8">
              <Link href="/tour-packages">
                Explore Tour Packages
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
