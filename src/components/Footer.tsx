// Footer Component
// Generated: 2025-08-27T09:36:39.900Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Award,
  Users,
  TrendingUp
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Strategic Planning", href: "/services#strategic-planning" },
        { name: "Business Transformation", href: "/services#transformation" },
        { name: "Operations Consulting", href: "/services#operations" },
        { name: "Digital Strategy", href: "/services#digital" },
        { name: "Change Management", href: "/services#change" },
        { name: "Performance Optimization", href: "/services#performance" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Financial Services", href: "/industries/financial" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Technology", href: "/industries/technology" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Retail & Consumer", href: "/industries/retail" },
        { name: "Energy & Utilities", href: "/industries/energy" }
      ]
    },
    {
      title: "Insights",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/insights/whitepapers" },
        { name: "Industry Reports", href: "/insights/reports" },
        { name: "Best Practices", href: "/insights/best-practices" },
        { name: "Thought Leadership", href: "/insights/thought-leadership" },
        { name: "Webinars", href: "/insights/webinars" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership Team", href: "/about/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News & Press", href: "/news" },
        { name: "Partner Network", href: "/partners" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/apex-strategic" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/apexstrategic" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/apexstrategic" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/apexstrategic" }
  ]

  const achievements = [
    { icon: Award, label: "Industry Awards", value: "25+" },
    { icon: Users, label: "Global Clients", value: "500+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Achievements Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="flex items-center justify-center gap-4">
                  <Icon className="size-8 text-accent" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-background">{achievement.value}</div>
                    <div className="text-sm text-background/80">{achievement.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-background font-bold text-lg">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">Apex Strategic</span>
                  <span className="text-sm text-accent font-medium">Solutions</span>
                </div>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Transforming businesses through strategic consulting excellence. We partner with 
                industry leaders to drive sustainable growth and operational excellence across 
                global markets.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-5 text-accent flex-shrink-0" />
                <span className="text-background/80">consulting@apexstrategic.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-5 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) 123-APEX</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-5 text-accent flex-shrink-0" />
                <span className="text-background/80">1250 Executive Plaza, New York, NY 10001</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Strategic Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 text-sm border border-primary/30 rounded-lg bg-background/10 backdrop-blur-sm text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-4 bg-accent hover:bg-accent/90 text-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Receive exclusive industry insights and strategic updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-background border-b border-accent/30 pb-2">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-accent transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 Apex Strategic Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                Trusted by Fortune 500 companies worldwide
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-10 rounded-lg bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-all duration-200 group hover:scale-110"
                  >
                    <Icon className="size-5 text-background/80 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link href="/privacy" className="text-xs text-background/70 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-background/70 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-xs text-background/70 hover:text-accent transition-colors">
              Compliance
            </Link>
            <Link href="/accessibility" className="text-xs text-background/70 hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}