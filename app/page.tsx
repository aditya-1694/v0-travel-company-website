import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ServicesSection } from "@/components/services-section"
import { TravelMomentsSection } from "@/components/travel-moments-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ExploreCTASection } from "@/components/explore-cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowWeWorkSection />
      <ServicesSection />
      <TravelMomentsSection />
      <StatsSection />
      <AboutSection />
      <ExploreCTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
