import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Stats } from "@/components/stats"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
