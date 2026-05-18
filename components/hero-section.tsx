"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award } from "lucide-react"

export function HeroSection() {
  const images = [
    "/images/carousel-leisure.jpg",
    "/images/carousel-corporate.jpg",
    "/images/carousel-events.jpg",
    "/images/carousel-adventure.jpg",
    "/images/carousel-luxury.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setProgress(0)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + (100 / 50) // 50 updates over 5 seconds = smooth animation
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [currentIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Travel carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Progress Bars */}
      <div className="absolute top-24 left-0 right-0 z-20 flex gap-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {images.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{
                width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary-foreground mb-6 text-balance">
            Your Complete Travel
            <span className="block text-primary-foreground/80">Solutions Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-primary-foreground/70 mb-10 text-pretty">
            Three decades of excellence in corporate travel management, leisure vacations, and unforgettable journeys. Whether it's business or pleasure, let us handle the details while you focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 h-14 text-base" asChild>
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base" asChild>
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4">
              <Award className="h-8 w-8 text-primary-foreground/80" />
              <span className="text-2xl font-bold text-primary-foreground">30+</span>
              <span className="text-sm text-primary-foreground/60">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Shield className="h-8 w-8 text-primary-foreground/80" />
              <span className="text-2xl font-bold text-primary-foreground">IATA</span>
              <span className="text-sm text-primary-foreground/60">Certified Agency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/50 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
