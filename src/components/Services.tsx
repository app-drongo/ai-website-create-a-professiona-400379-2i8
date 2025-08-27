// Services Component
// Generated: 2025-08-27T09:36:39.900Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Target,
  BarChart3,
  Lightbulb,
  Building2
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "strategic-planning",
      title: "Strategic Planning & Execution",
      description: "Transform your vision into actionable strategic roadmaps",
      longDescription: "Our strategic planning service helps organizations define clear objectives, identify market opportunities, and create comprehensive execution plans. We work with leadership teams to align resources and drive sustainable growth through data-driven strategic initiatives.",
      icon: Target,
      benefits: [
        "Comprehensive market analysis and competitive intelligence",
        "Strategic roadmap development and milestone planning",
        "Resource allocation optimization and budget planning",
        "Performance metrics and KPI framework design"
      ],
      pricing: "Starting at $15,000/engagement",
      timeline: "6-12 weeks typical engagement",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence & Process Optimization",
      description: "Streamline operations and maximize efficiency across your organization",
      longDescription: "We analyze your current operations to identify bottlenecks, eliminate waste, and implement best practices. Our operational excellence methodology delivers measurable improvements in productivity, quality, and cost management.",
      icon: BarChart3,
      benefits: [
        "Process mapping and workflow optimization",
        "Lean methodology implementation",
        "Quality management system design",
        "Cost reduction and efficiency improvement"
      ],
      pricing: "Starting at $12,000/project",
      timeline: "8-16 weeks per initiative"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Strategy",
      description: "Navigate digital disruption with comprehensive transformation strategies",
      longDescription: "Our digital transformation consulting helps organizations leverage technology to reimagine business models, enhance customer experiences, and drive innovation. We provide end-to-end guidance from strategy to implementation.",
      icon: Globe,
      benefits: [
        "Digital maturity assessment and gap analysis",
        "Technology roadmap and architecture planning",
        "Change management and employee training",
        "Digital culture transformation initiatives"
      ],
      pricing: "Starting at $20,000/engagement",
      timeline: "3-6 months"
    },
    {
      id: "organizational-development",
      title: "Organizational Development & Leadership",
      description: "Build high-performing teams and develop leadership capabilities",
      longDescription: "We help organizations develop their most valuable asset - their people. Our organizational development services focus on leadership development, team effectiveness, and creating cultures that drive performance and engagement.",
      icon: Users,
      benefits: [
        "Leadership assessment and development programs",
        "Team dynamics and collaboration improvement",
        "Organizational culture transformation",
        "Succession planning and talent management"
      ],
      pricing: "Custom engagement pricing",
      timeline: "4-8 weeks per program",
      badge: "Executive Favorite"
    },
    {
      id: "risk-management",
      title: "Risk Management & Compliance",
      description: "Identify, assess, and mitigate business risks effectively",
      longDescription: "Our risk management consulting helps organizations build resilient operations through comprehensive risk assessment, mitigation strategies, and compliance frameworks. We ensure your business is prepared for uncertainties while maintaining regulatory compliance.",
      icon: Shield,
      benefits: [
        "Enterprise risk assessment and mapping",
        "Compliance framework development",
        "Business continuity planning",
        "Crisis management and response protocols"
      ],
      pricing: "Starting at $10,000/assessment",
      timeline: "4-6 weeks per assessment"
    },
    {
      id: "innovation-consulting",
      title: "Innovation & Growth Strategy",
      description: "Drive innovation and identify new growth opportunities",
      longDescription: "We help organizations foster innovation cultures and identify breakthrough growth opportunities. Our innovation consulting combines market research, trend analysis, and creative problem-solving to unlock new revenue streams and competitive advantages.",
      icon: Lightbulb,
      benefits: [
        "Innovation framework and process design",
        "Market opportunity identification",
        "Product and service development strategy",
        "Innovation culture and mindset development"
      ],
      pricing: "Starting at $18,000/initiative",
      timeline: "6-10 weeks typical engagement"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Strategic Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Strategic Business Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partner with Apex Strategic Solutions to transform challenges into opportunities and drive sustainable business success through proven methodologies and expert guidance.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"} className={service.featured ? "bg-accent text-accent-foreground" : ""}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold text-primary">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Discovery Call
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center border border-primary/10">
          <Building2 className="size-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business faces unique challenges. Let's discuss how our strategic consulting expertise can be tailored to your specific needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Strategic Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Download Service Overview
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}