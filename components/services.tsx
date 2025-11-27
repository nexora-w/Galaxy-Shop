import { Code2, Cpu, Smartphone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "We deliver end-to-end web solutions with modern frameworks, from responsive frontend interfaces to scalable backend architecture and RESTful APIs.",
  },
  {
    icon: Cpu,
    title: "AI & Blockchain Solutions",
    description:
      "Leverage cutting-edge AI and blockchain technologies for GPT-powered automation, smart contracts, and decentralized applications on major platforms.",
  },
  {
    icon: Smartphone,
    title: "3D & Mobile Development",
    description:
      "Create immersive 3D experiences and cross-platform mobile applications using React Native, Flutter, and Swift for iOS and Android platforms.",
  },
]

export function Services() {
  return (
    <section id="service" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
                    READ MORE
                    <Plus className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
