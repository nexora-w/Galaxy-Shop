"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Galaxy Shop LLC offer?",
        answer:
          "We offer comprehensive software development services including Full Stack Development, AI & Blockchain Solutions, Mobile Development, Cloud Solutions, DevOps & CI/CD, and UI/UX Design. Our team specializes in creating custom solutions tailored to your specific business needs.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timeline estimates during the initial consultation and keep you updated throughout the development process.",
      },
      {
        question: "Do you work with startups and small businesses?",
        answer:
          "We work with businesses of all sizes, from startups to enterprise-level organizations. We understand the unique challenges faced by startups and offer flexible engagement models and pricing to accommodate different budgets and requirements.",
      },
    ],
  },
  {
    category: "Development Process",
    questions: [
      {
        question: "What is your development process?",
        answer:
          "We follow an agile development methodology that includes: Discovery & Planning, Design & Prototyping, Development & Testing, Deployment, and Ongoing Support. This iterative approach ensures transparency, flexibility, and high-quality results.",
      },
      {
        question: "Will I own the source code?",
        answer:
          "Yes, upon project completion and final payment, you will have full ownership of the source code and all intellectual property rights. We provide complete documentation and can assist with knowledge transfer to your internal team if needed.",
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly and stays up-to-date.",
      },
    ],
  },
  {
    category: "Technology & Integration",
    questions: [
      {
        question: "What technologies do you work with?",
        answer:
          "We work with a wide range of modern technologies including React, Next.js, Vue.js, Node.js, Python, Java, React Native, Flutter, blockchain platforms (Ethereum, Solana), AWS, Azure, and many more. We choose the best technology stack based on your specific requirements.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Yes, we specialize in system integration and can connect your new application with existing software, databases, APIs, and third-party services. We ensure seamless data flow and compatibility across all your systems.",
      },
      {
        question: "Do you offer blockchain and AI solutions?",
        answer:
          "Yes, we have extensive experience in blockchain development (smart contracts, DApps, DeFi) and AI integration (machine learning models, GPT-powered applications, natural language processing). We can help you leverage these cutting-edge technologies for your business.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How do you charge for projects?",
        answer:
          "We offer flexible pricing models including fixed-price projects, time & material, and retainer-based engagements. The pricing depends on project scope, complexity, and timeline. We provide detailed proposals with transparent pricing before starting any work.",
      },
      {
        question: "Do you require upfront payment?",
        answer:
          "Typically, we require a 30-50% deposit to begin work, with the remaining balance paid in milestones throughout the project or upon completion. For larger projects, we can structure a milestone-based payment plan that aligns with project deliverables.",
      },
      {
        question: "Can you work within our budget?",
        answer:
          "We're committed to working with your budget constraints. During the discovery phase, we'll help prioritize features and find creative solutions to deliver maximum value within your budget. We can also suggest a phased approach to spread costs over time.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Got <span className="text-primary">Questions?</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Find answers to common questions about our services, processes, and how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((item, itemIdx) => {
                    const key = `${sectionIdx}-${itemIdx}`
                    const isOpen = openItems[key]

                    return (
                      <Card key={key} className="bg-card border-border overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-semibold text-foreground text-lg">{item.question}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground shrink-0 transition-transform mt-1",
                              isOpen && "rotate-180",
                            )}
                          />
                        </button>
                        {isOpen && (
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Still Have Questions?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
                We're here to help! Contact our team and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
