export function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "GraphQL", category: "API" },
    { name: "Solidity", category: "Blockchain" },
    { name: "TensorFlow", category: "AI/ML" },
  ]

  const categories = ["Frontend", "Backend", "Database", "Cloud", "Blockchain", "AI/ML", "DevOps"]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We work with the latest and most powerful technologies to build robust, scalable solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="px-6 py-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{category}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
            >
              <div className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
