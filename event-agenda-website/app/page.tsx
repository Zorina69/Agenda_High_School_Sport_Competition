import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AgendaSection } from "@/components/agenda-section"
import { SportsSection } from "@/components/sports-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AgendaSection />
      <SportsSection />
      <Footer />
    </main>
  )
}
