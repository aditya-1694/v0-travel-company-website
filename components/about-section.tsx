import { Users, Heart, Globe, Award } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Family Values",
      description: "Built on trust and personal relationships that span generations",
      image: "/images/family-values.jpg"
    },
    {
      icon: Globe,
      title: "India Based",
      description: "Dedicated service excellence across India with local expertise",
      image: "/images/india-service.jpg"
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your business needs drive every decision we make",
      image: "/images/client-focus.jpg"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "IATA certified with three decades of industry expertise",
      image: "/images/excellence.jpg"
    }
  ]

  return (
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              A Legacy of Trusted Travel Management
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg">
                Founded in 1994, Insight Travels and Tours began with a simple vision: 
                to simplify the travel needs of businesses so they can focus on what matters most — growth.
              </p>
              <p>
                As a family-owned enterprise, we bring personal attention and care to every client relationship. 
                Our IATA certification reflects our commitment to maintaining the highest industry standards 
                and providing reliable, trustworthy service.
              </p>
              <p>
                Over three decades, we&apos;ve built lasting partnerships with corporations across industries, 
                becoming their go-to resource for all travel and event management needs.
              </p>
            </div>

            {/* IATA Badge */}
            <div className="mt-8 flex items-center gap-6">
              <Image 
                src="/images/iata-logo.png" 
                alt="IATA Accredited Agent" 
                width={120} 
                height={120}
                className="h-24 w-auto"
              />
              <div>
                <p className="font-semibold text-foreground text-lg">IATA Accredited</p>
                <p className="text-sm text-muted-foreground">Certified Travel Agent</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <Image 
                    src={value.image} 
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="p-6 bg-card">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
