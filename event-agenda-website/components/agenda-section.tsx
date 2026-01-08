"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, MapPin } from "lucide-react"

const agendaData = [
  {
    time: "08:00 AM",
    activity: "Registration & Check-in",
    description: "Athletes and coaches check-in at the main entrance",
    location: "Main Hall",
  },
  {
    time: "08:45 AM",
    activity: "Opening Ceremony",
    description: "Welcome address and national anthem",
    location: "Central Stadium",
  },
  {
    time: "09:30 AM",
    activity: "Football - Boys Preliminary",
    description: "Group stage matches begin",
    location: "Field A",
  },
  {
    time: "09:30 AM",
    activity: "Volleyball - Girls Preliminary",
    description: "Pool play rounds start",
    location: "Court 1 & 2",
  },
  {
    time: "11:00 AM",
    activity: "Football - Girls Preliminary",
    description: "Group stage matches begin",
    location: "Field B",
  },
  {
    time: "12:30 PM",
    activity: "Lunch Break",
    description: "Refreshments available at the cafeteria",
    location: "Cafeteria",
  },
  {
    time: "01:30 PM",
    activity: "Volleyball - Boys Semifinals",
    description: "Top teams compete for finals spot",
    location: "Court 1",
  },
  {
    time: "02:00 PM",
    activity: "Football - Semifinals",
    description: "Boys and girls semifinals",
    location: "Field A & B",
  },
  {
    time: "03:30 PM",
    activity: "Track & Field Events",
    description: "100m, 200m, relay races",
    location: "Athletics Track",
  },
  {
    time: "05:00 PM",
    activity: "Championship Finals",
    description: "Football and volleyball finals",
    location: "Central Stadium",
  },
  {
    time: "06:30 PM",
    activity: "Award Ceremony",
    description: "Medals and trophies presentation",
    location: "Central Stadium",
  },
  {
    time: "07:00 PM",
    activity: "Closing Remarks",
    description: "Thank you message and see you next year!",
    location: "Central Stadium",
  },
]

export function AgendaSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="agenda" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-primary">Agenda</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your complete guide to the day's activities and competitions
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="bg-primary/10 border-b border-border">
              <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-2 font-bold text-sm uppercase tracking-wider">Time</div>
                <div className="col-span-3 font-bold text-sm uppercase tracking-wider">Activity</div>
                <div className="col-span-5 font-bold text-sm uppercase tracking-wider">Description</div>
                <div className="col-span-2 font-bold text-sm uppercase tracking-wider">Location</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {agendaData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  className={`grid grid-cols-12 gap-4 p-4 hover:bg-muted/50 transition-all duration-300 ${
                    visibleItems.has(index) ? "animate-slide-in-left" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index % 3) * 100}ms` }}
                >
                  <div className="col-span-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item.time}</span>
                  </div>
                  <div className="col-span-3 font-medium text-foreground">{item.activity}</div>
                  <div className="col-span-5 text-muted-foreground leading-relaxed">{item.description}</div>
                  <div className="col-span-2 flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {agendaData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`bg-card rounded-lg shadow-md border border-border p-4 sm:p-6 hover:shadow-lg transition-all duration-300 ${
                visibleItems.has(index) ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                  <span className="font-bold text-lg text-foreground">{item.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1 text-accent flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{item.activity}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
