"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const sportsData = [
  {
    name: "បាល់ទាត់",
    // description: "Competitive 11v11 matches featuring both boys and girls teams from across the region",
    image: "/football.png",
    participants: "កុមារ និងយុវជន",
    teams: "៨​ ក្រុង/ស្រុក",
  },
  {
    name: "បាល់ទះ",
    // description: "Indoor volleyball competitions showcasing teamwork and athletic skills for all genders",
    image: "/volleyball.png",
    participants: "កុមារ និងយុវជន",
    teams: "៨​ ក្រុង/ស្រុក",
  },
  {
    name: "បាល់បោះ",
    // description: "Sprint races, relay events, and field competitions for athletes of all levels",
    image: "/baseketball.png",
    participants: "កុមារ និងយុវជន",
    teams: "៨​ ក្រុង/ស្រុក",
  },
  {
    name: "អត្តពលកម្ម",
    // description: "Fast-paced 5v5 basketball games with exciting matchups throughout the day",
    image: "/acting.png",
    participants: "កុមារ និងយុវជន",
    teams: "៨​ ក្រុង/ស្រុក",
  },
  {
    name: "ប៉េតង់",
    // description: "Fast-paced 5v5 basketball games with exciting matchups throughout the day",
    image: "/bolling.png",
    participants: "កុមារ និងយុវជន",
    teams: "៨​ ក្រុង/ស្រុក",
  },
]

export function SportsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sports" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            ប្រភេទកីឡា<span className="text-accent">ប្រកួត</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty" style={{ fontFamily: "'MiSansKhmer_Semibold'" }}>
            ប្រភេទកីឡាគោលទាំង៥ ប្រភេទ និងចំនួនក្រុង/ស្រុកចូលរួម
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {sportsData.map((sport, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                data-index={index}
                className={`group bg-card rounded-xl shadow-lg border border-border p-6 sm:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                  visibleCards.has(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4" 
                style={{ fontFamily: "'MiSansKhmer_Semibold'" }}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Image 
                        src={sport.image} 
                        alt={sport.name}
                        width={35}
                        height={35}
                        className="sm:w-8 sm:h-8"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {sport.name}
                    </h3>
                    {/* <p className="text-muted-foreground mb-4 leading-relaxed">{sport.description}</p> */}
                    <div className="flex flex-wrap gap-3">
                      <p>ប្រភេទអត្តពលិក៖​ </p>
                      <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {sport.participants}
                      </span>
                    </div>
                    <div className="h-3"></div>
                    <div className="flex flex-wrap gap-3">
                      <p>ចំនួនក្រុង/ស្រុកចូលរួម៖ </p>
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {sport.teams}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
