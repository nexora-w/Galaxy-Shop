import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Work Together</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Transform Your
            <br />
            <span className="text-primary">Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get in touch with us today to discuss your project. Our team is ready to help you build something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+13162403351">Call Us: +1 316 240 3351</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Fast Response</div>
              <p className="text-muted-foreground">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Free Consultation</div>
              <p className="text-muted-foreground">Get expert advice at no cost</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Flexible Plans</div>
              <p className="text-muted-foreground">Custom solutions that fit your budget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
