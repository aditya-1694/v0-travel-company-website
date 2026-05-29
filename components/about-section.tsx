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
        {/* Text Content - Top on Mobile, Left on Desktop */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Your Travel Companion Since 1994
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe travel should be joyful, not stressful. For over 30 years, Insight Travels has been making that possible by handling the logistics while you embrace the adventure.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                What started as a family passion has grown into a trusted partner for thousands of travelers. Whether you're planning a dream vacation, organizing a corporate retreat, or managing complex multi-destination events, we've got you covered.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our IATA certification and decades of expertise mean you're in safe hands. But more importantly, our personal touch and genuine care ensure every trip becomes a cherished memory.
              </p>
            </div>

            {/* IATA Badge */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Industry Recognized</p>
              <Image 
                src="/images/iata-logo.png" 
                alt="IATA Accredited Agent" 
                width={160} 
                height={160}
                className="h-20 w-auto"
              />
            </div>
          </div>

          {/* Image Placeholder - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border/50">
              <Image 
                src="/images/carousel-corporate.jpg" 
                alt="About Insight Travels"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-12 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-lg bg-card"
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
                <div className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
