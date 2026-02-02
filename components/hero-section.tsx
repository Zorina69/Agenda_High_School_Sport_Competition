"use client"
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          
          {/* Logos */}
          <div className="flex flex-row justify-center items-center gap-4">
            <Image
              src="/IMG_2395.PNG"
              alt="Logo"
              width={130}
              height={200}
              className="object-contain"
            />
            <Image
              src="/Banner KPCH GAME 2026.png"
              alt="KPCH Logo"
              width={130}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="font-KhmerOSMoulLight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance leading-tight">
            មន្ទីរអប់រំ យុវជន និងកីឡាខេត្តកំពង់ឆ្នាំង
            <span className="font-KhmerOSMoulLight block text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-8 leading-relaxed">
              ការប្រកួតកីឡាសិស្សបឋមសិក្សា និងមធ្យមសិក្សា
              ជ្រើសរើសជើងឯកថ្នាក់ខេត្ត ឆ្នាំសិក្សា ២០២៥-២០២៦
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
            <button
              onClick={() =>
                document
                  .getElementById("agenda")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              ប្រភេទកីឡា
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("sports")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              ការប្រកួត
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("sports")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 sm:py-4 bg-chart-3 text-accent-foreground rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              ចូលទៅក្នុងតេលេក្រាមសម្រាប់ព័ត៌មាន
            </button>
          </div>
        </div>
      </div>


      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
