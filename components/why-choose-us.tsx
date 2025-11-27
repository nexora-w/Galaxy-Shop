import { Target, Rocket, Shield, HeartHandshake } from "lucide-react"
import Image from "next/image"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: "Precision & Quality",
      description: "We deliver pixel-perfect solutions with rigorous testing and quality assurance processes.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development methodology ensures rapid deployment without compromising on quality.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Industry-leading security practices to protect your data and ensure compliance.",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      description: "24/7 support team ready to assist you with ongoing maintenance and updates.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose <span className="text-primary">Galaxy Shop LLC</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in software development, we have successfully delivered 1000+ projects to
              clients worldwide. Our team of expert developers, designers, and strategists work together to bring your
              vision to life.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20">
              <Image
                src="/professional-software-development-team-collaborati.jpg"
                alt="Galaxy Shop LLC Team"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
