import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">Galaxy Shop</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering digital innovation through cutting-edge software solutions and technology expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Full Stack Development</li>
              <li className="text-sm text-muted-foreground">AI & Blockchain</li>
              <li className="text-sm text-muted-foreground">Mobile Development</li>
              <li className="text-sm text-muted-foreground">Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>St 17 Near Baba Rd</li>
              <li>Delta, WY 72600</li>
              <li>United States</li>
              <li>
                <a href="tel:+13162403351" className="hover:text-primary transition-colors">
                  +1 316 240 3351
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Galaxy Shop LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
