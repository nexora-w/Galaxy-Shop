import { CheckCircle } from "lucide-react"

const features = ["Full Stack Development", "AI & Blockchain", "Mobile Development", "Cloud Solutions"]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border">
              <img
                src="/professional-software-development-team-collaborati.jpg"
                alt="Professional software development team"
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">WHO WE ARE</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Pioneering Digital Innovation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              We are a forward-thinking tech company at the forefront of digital transformation. Our expertise spans
              blockchain technology, artificial intelligence, full-stack development, and immersive 3D experiences. We
              combine cutting-edge technologies with creative solutions to help businesses thrive in the digital age.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              At Galaxy Shop LLC, we don't just build solutions — we create digital experiences that drive growth and
              innovation. Our team of expert developers and tech enthusiasts is dedicated to delivering cutting-edge
              solutions that help businesses navigate and excel in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
