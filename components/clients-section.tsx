"use client"

import Image from "next/image"

export function ClientsSection() {
  const clients = [
    { name: "IFCI Venture", src: "/images/client-ifci.png" },
    { name: "FHI India", src: "/images/client-fhiindia.png" },
    { name: "EM SOS", src: "/images/client-emsos.png" },
    { name: "Arohan", src: "/images/client-arohan.png" },
    { name: "Rapid Response EMS", src: "/images/client-rapidresponse.png" },
    { name: "FHI 360", src: "/images/client-fhi360.png" },
    { name: "IFMR", src: "/images/client-ifmr.png" },
    { name: "Johns Hopkins", src: "/images/client-johnshopkins.png" },
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
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden bg-background py-8">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-200px * 8));
              }
            }
            .marquee-container {
              overflow: hidden;
            }
            .marquee {
              display: flex;
              animation: marquee 15s linear infinite;
              will-change: transform;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
            .marquee-item {
              flex-shrink: 0;
              width: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 24px;
            }
          `}</style>
          
          <div className="marquee-container">
            <div className="marquee">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="marquee-item">
                  <div className="relative h-24 w-full">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
