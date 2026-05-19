import { Award, Plane, MapPin, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Award,
      number: "32",
      label: "Years of Excellence",
      description: "Serving clients since 1994"
    },
    {
      icon: Plane,
      number: "10,000+",
      label: "Happy Travelers",
      description: "Trusted by businesses & individuals"
    },
    {
      icon: MapPin,
      number: "30+",
      label: "Destinations Worldwide",
      description: "Global coverage & expertise"
    },
    {
      icon: TrendingUp,
      number: "Best Price",
      label: "Guarantee",
      description: "Competitive rates on all packages"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
