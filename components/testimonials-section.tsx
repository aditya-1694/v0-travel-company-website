import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Insight Travels has been our trusted travel partner for over a decade. Their attention to detail and 24/7 support has made managing our corporate travel seamless.",
      author: "Rajesh Kumar",
      role: "CFO",
      company: "Tech Solutions Ltd."
    },
    {
      quote: "When we needed emergency medical evacuation for an employee abroad, Insight handled everything professionally. Their coordination with doctors and insurance was flawless.",
      author: "Priya Sharma",
      role: "HR Director",
      company: "Global Enterprises"
    },
    {
      quote: "Our annual conference for 500+ attendees was executed perfectly. From travel logistics to venue management, Insight delivered beyond expectations.",
      author: "Amit Patel",
      role: "Events Manager",
      company: "Corporate Events Inc."
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-card tracking-tight text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg text-card/70">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-8 hover:bg-card/10 transition-colors"
            >
              <Quote className="h-10 w-10 text-accent mb-6" />
              <blockquote className="text-card/90 mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-card/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-card">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card">{testimonial.author}</p>
                  <p className="text-sm text-card/60">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
