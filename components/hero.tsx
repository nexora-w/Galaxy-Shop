import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-1/4 w-96 h-96 opacity-10" viewBox="0 0 400 400" fill="none">
          <path
            d="M0 200 Q 100 100, 200 200 T 400 200"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
        <svg className="absolute right-0 bottom-1/4 w-96 h-96 opacity-10" viewBox="0 0 400 400" fill="none">
          <path
            d="M0 200 Q 100 300, 200 200 T 400 200"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
        <div className="absolute top-20 right-20 w-20 h-20 rotate-45">
          <div className="w-full h-full border-2 border-primary/30 rounded-lg" />
        </div>
        <div className="absolute bottom-40 left-40 w-16 h-16">
          <svg viewBox="0 0 100 100" className="text-primary/30">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Innovative Software Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Transform Your Business With
            <br />
            <span className="text-primary">Cutting-Edge Technology</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Galaxy Shop LLC delivers end-to-end software solutions with modern frameworks. From responsive interfaces to
            scalable architectures, we build technology that drives your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
