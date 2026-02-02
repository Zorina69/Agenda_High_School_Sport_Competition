"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* About */}
          <div>
            <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'MiSansKhmer_Semibold'" }}>
              បញ្ជាក់៖ <br />
              - សូមចូលទៅកាន់តេលេក្រាមដើម្បីទទួលបានព័ត៌មានលម្អិតបន្ថែម<br />
              - គណៈកម្មការរៀបចំសូមរក្សាសិទ្ធក្នុងការកែប្រែ
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Kampong Chhnang Department of Education, Youth and Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
