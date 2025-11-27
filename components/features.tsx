import { Code, Smartphone, Cloud, Lock, Zap, Palette } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end solutions from frontend to backend with modern frameworks like React, Next.js, and Node.js.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies using AWS, Azure, and Google Cloud Platform.",
    },
    {
      icon: Lock,
      title: "Blockchain & Security",
      description: "Secure decentralized applications and smart contract development with top-tier security protocols.",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Machine learning and AI-powered features to give your applications intelligent capabilities.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive software solutions tailored to your business needs with cutting-edge technologies and best
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
