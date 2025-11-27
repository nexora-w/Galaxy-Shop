import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code2, Cpu, Smartphone, Cloud, Settings, Palette, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "We deliver end-to-end web solutions with modern frameworks, from responsive frontend interfaces to scalable backend architecture and RESTful APIs.",
    features: [
      "React, Next.js, Vue.js frontend development",
      "Node.js, Python, Java backend systems",
      "RESTful API and GraphQL integration",
      "Database design and optimization",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Blockchain Solutions",
    description:
      "Leverage cutting-edge AI and blockchain technologies for GPT-powered automation, smart contracts, and decentralized applications on major platforms.",
    features: [
      "Machine Learning & AI integration",
      "Smart contract development",
      "Decentralized application (DApp) creation",
      "Blockchain consulting and strategy",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Create immersive mobile applications using React Native, Flutter, and Swift for iOS and Android platforms with native performance.",
    features: [
      "iOS and Android native apps",
      "Cross-platform development",
      "Mobile UI/UX optimization",
      "App store deployment and maintenance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Build and deploy scalable cloud infrastructure using AWS, Azure, and Google Cloud with automated DevOps pipelines.",
    features: [
      "Cloud architecture design",
      "Serverless application development",
      "Container orchestration with Kubernetes",
      "Cloud migration services",
    ],
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description:
      "Streamline your development workflow with automated testing, continuous integration, and deployment pipelines.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing frameworks",
      "Performance monitoring and optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Craft beautiful, intuitive user interfaces with modern design principles and user-centered design methodologies.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">OUR SERVICES</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Comprehensive <span className="text-primary">Software Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              From concept to deployment, we provide end-to-end technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="bg-card py-6 border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
                Let's discuss how our services can help you achieve your business goals and drive digital
                transformation.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
