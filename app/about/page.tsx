import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, Award, Target, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AboutStats } from "@/components/about-stats"

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description:
      "We're committed to delivering innovative solutions that empower businesses to achieve their digital transformation goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve by embracing emerging technologies and pushing the boundaries of what's possible.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Your success is our priority. We build long-term partnerships based on trust, transparency, and exceptional results.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring robust, scalable, and maintainable solutions.",
  },
]

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
]

const features = [
  "Full Stack Development",
  "AI & Blockchain",
  "Mobile Development",
  "Cloud Solutions",
  "DevOps & CI/CD",
  "UI/UX Design",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">WHO WE ARE</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              About <span className="text-primary">Galaxy Shop LLC</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We are a forward-thinking technology company dedicated to pioneering digital innovation and transforming
              businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      <AboutStats stats={stats} />

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
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
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Pioneering Digital Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                At Galaxy Shop LLC, we specialize in delivering cutting-edge technology solutions that drive business
                growth and digital transformation. Our expertise spans blockchain technology, artificial intelligence,
                full-stack development, and immersive 3D experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Founded with a vision to bridge the gap between innovative technology and practical business solutions,
                we've grown into a trusted partner for businesses seeking to leverage the power of modern software
                development. Our team of expert developers, designers, and tech enthusiasts is passionate about creating
                solutions that not only meet but exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">OUR VALUES</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our core values guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="bg-card py-6 border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
