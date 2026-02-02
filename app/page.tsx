import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AgendaSection } from "@/components/agenda-section"
import { SportsSection } from "@/components/sports-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    // <main>
    //   <Navbar />
    //   <HeroSection />
    //   <div className="text-4xl text-center">
    //     <h1>On Processing...</h1>
    //   </div>
      
    // </main>
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SportsSection />
      <AgendaSection />
      <Footer />
    </main>
  )
}
