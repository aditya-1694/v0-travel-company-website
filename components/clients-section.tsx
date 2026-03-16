export function ClientsSection() {
  // Placeholder for client logos - replace with actual client logos
  const clients = [
    { name: "Client 1" },
    { name: "Client 2" },
    { name: "Client 3" },
    { name: "Client 4" },
    { name: "Client 5" },
    { name: "Client 6" },
    { name: "Client 7" },
    { name: "Client 8" },
  ]

  return (
    <section id="clients" className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Trusted By</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Companies That Trust Us
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We&apos;re proud to serve leading organizations across various industries, 
            helping them manage their corporate travel needs efficiently.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="h-24 sm:h-28 bg-card rounded-xl border border-border border-dashed flex items-center justify-center hover:border-accent/30 transition-colors group"
            >
              <div className="text-center">
                <div className="h-10 w-24 bg-muted rounded flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs text-muted-foreground font-medium">LOGO</span>
                </div>
                <span className="text-xs text-muted-foreground">{client.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicator */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">100+</span> businesses trust Insight Travels for their corporate travel needs
          </p>
        </div>
      </div>
    </section>
  )
}
