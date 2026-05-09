import { Ambulance, Plane, Users, MapPin } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Ambulance,
      number: "01",
      title: "Global Medical Evacuation & Repatriation",
      description: "Comprehensive medical evacuation services coordinated with healthcare professionals and insurance providers. We ensure safe, timely medical transport for employees anywhere in the world.",
      features: [
        "Rapid Emergency Response",
        "Coordination with Doctors",
        "Insurance Company Liaison",
        "Worldwide Coverage"
      ]
    },
    {
      icon: Plane,
      number: "02",
      title: "Corporate Travel Management",
      description: "End-to-end travel solutions for your business. From flights and hotels to ground transportation and logistics, we handle every detail so your team travels seamlessly.",
      features: [
        "Flight Bookings",
        "Hotel Reservations",
        "Taxi & Car Services",
        "Complete Logistics"
      ]
    },
    {
      icon: Users,
      number: "03",
      title: "MICE, Conferences & Corporate Events",
      description: "Full-service event management for meetings, incentives, conferences, and exhibitions. We create memorable corporate experiences that drive engagement and results.",
      features: [
        "Venue Selection",
        "Event Planning",
        "Group Travel Coordination",
        "On-site Management"
      ]
    },
    {
      icon: MapPin,
      number: "04",
      title: "Leisure Travel & Tourism",
      description: "Create unforgettable memories with our comprehensive leisure travel services. From customized family vacations to group tours and FIT (Free Independent Travel) packages, we design journeys tailored to your preferences.",
      features: [
        "Customized Holiday Packages",
        "Group Tours",
        "FIT Travel Planning",
        "Leisure Getaways"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Complete Travel Solutions for Every Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re traveling for business or pleasure, we provide expert services tailored to your needs. From corporate travel to leisure vacations, we&apos;re your all-in-one travel partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-lg"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-muted/30">
                {service.number}
              </span>

              {/* Icon */}
              <div className="relative h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
