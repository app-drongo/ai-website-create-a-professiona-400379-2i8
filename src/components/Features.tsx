// Features Component
// Generated: 2025-08-27T09:36:39.900Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Shield,
  Globe,
  Headphones,
  Award
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Strategic Growth Planning",
      description: "Data-driven strategies that accelerate business growth and maximize market opportunities.",
      badge: "Core Service"
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "Comprehensive market research and competitive analysis to position your business for success.",
      badge: "Research"
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Executive coaching and leadership programs to build high-performing management teams.",
      badge: "Leadership"
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Operational excellence initiatives that improve efficiency and reduce costs.",
      badge: "Operations"
    },
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description: "Transform your business with cutting-edge innovation frameworks and digital transformation.",
      badge: "Innovation"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business assets.",
      badge: "Risk"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "International market entry strategies and cross-border business development expertise.",
      badge: "Global"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Dedicated strategic advisors providing continuous guidance throughout your transformation.",
      badge: "Support"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of delivering measurable outcomes with industry-leading methodologies.",
      badge: "Results"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Strategic Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive strategic consulting services designed to drive sustainable growth 
            and competitive advantage for mid to large-sized enterprises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to unlock your business potential?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Strategic Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Capabilities Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}