// Services1 Component
// Generated: 2025-08-27T09:36:39.900Z
// Template: services-c001
// Context: Services
// Position: pages.1.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Shield,
  Rocket,
  Building2,
  ArrowRight
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "strategic-planning",
      title: "Strategic Planning",
      description: "Comprehensive strategic roadmaps that align your organization's vision with actionable business objectives and measurable outcomes.",
      icon: Target,
      badge: "Core Service",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Roadmaps"],
      link: "/services/strategic-planning"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Streamline processes, eliminate inefficiencies, and optimize performance to drive sustainable competitive advantage.",
      icon: TrendingUp,
      features: ["Process Optimization", "Performance Metrics", "Cost Reduction"],
      link: "/services/operational-excellence"
    },
    {
      id: "organizational-transformation",
      title: "Organizational Transformation",
      description: "Navigate complex change initiatives and cultural transformations to position your organization for future success.",
      icon: Building2,
      badge: "Popular",
      features: ["Change Management", "Cultural Assessment", "Leadership Development"],
      link: "/services/transformation"
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Cultivate high-performing leaders and build organizational capabilities that drive innovation and sustainable growth.",
      icon: Users,
      features: ["Executive Coaching", "Team Building", "Succession Planning"],
      link: "/services/leadership"
    },
    {
      id: "business-analytics",
      title: "Business Analytics",
      description: "Transform data into strategic insights with advanced analytics solutions that inform critical business decisions.",
      icon: BarChart3,
      features: ["Data Strategy", "Predictive Analytics", "Performance Dashboards"],
      link: "/services/analytics"
    },
    {
      id: "innovation-consulting",
      title: "Innovation Consulting",
      description: "Foster innovation culture and develop breakthrough solutions that create new revenue streams and market opportunities.",
      icon: Lightbulb,
      badge: "Emerging",
      features: ["Innovation Strategy", "Digital Transformation", "Product Development"],
      link: "/services/innovation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Strategic Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Consulting Solutions That
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Apex Strategic Solutions delivers comprehensive consulting services designed to accelerate growth, optimize performance, and drive sustainable competitive advantage for mid to large-sized enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
                      <Icon className="size-7 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-5">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Consultation CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                    asChild
                  >
                    <a href={service.link}>
                      <span className="font-medium">Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Our strategic consultants are ready to help you identify opportunities and develop solutions tailored to your unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Strategic Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Download Service Portfolio
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}