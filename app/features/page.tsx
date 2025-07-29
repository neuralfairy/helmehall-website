import type { Metadata } from "next"
import { Globe, Bot, MessageSquare, Phone, BarChart3, Shield, Zap, Users, Cloud, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "iGCT Features - Global Cloud Telephony Capabilities | Helmehall",
  description:
    "Explore iGCT's comprehensive cloud telephony features: Global SIP trunking, VoiceBot AI, SMS & number masking, smart call routing, and real-time analytics.",
  keywords:
    "iGCT features, global SIP trunking, VoiceBot, SMS masking, call routing, voice analytics, cloud telephony capabilities",
}

const features = [
  {
    icon: Globe,
    title: "Global SIP Trunking",
    description:
      "Connect to customers worldwide with our reliable SIP trunking infrastructure across 150+ countries. High-quality voice termination with competitive rates.",
    benefits: ["150+ country coverage", "99.9% uptime SLA", "Competitive international rates", "Real-time failover"],
    cta: "Learn More",
    link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
  },
  {
    icon: Bot,
    title: "VoiceBot & AI Agent",
    description:
      "Intelligent voice automation that handles customer interactions with natural conversation flow. Reduce costs while improving customer satisfaction.",
    benefits: ["Natural language processing", "24/7 availability", "Multi-language support", "CRM integration"],
    cta: "Try Voice AI",
    link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
  },
  {
    icon: MessageSquare,
    title: "SMS & Number Masking",
    description:
      "Secure messaging with number masking to protect privacy while maintaining professional communication. Support for global SMS delivery.",
    benefits: ["Privacy protection", "Global SMS delivery", "Two-way messaging", "Delivery tracking"],
    cta: "Explore WhatsApp Bot",
    link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
  },
  {
    icon: Phone,
    title: "Smart Call Routing",
    description:
      "Advanced call routing algorithms ensure calls reach the right agent at the right time. Optimize for skills, availability, and customer priority.",
    benefits: ["Skills-based routing", "Time-based rules", "Geographic routing", "Load balancing"],
    cta: "See Cloud Dialer",
    link: "https://salescentri.com/platforms/lead-management/automated-cloud-dialer",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Comprehensive analytics dashboard with real-time insights into call performance, agent productivity, and customer satisfaction metrics.",
    benefits: ["Real-time dashboards", "Custom reports", "Performance metrics", "Predictive analytics"],
    cta: "View Analytics",
    link: "https://salescentri.com/solutions/use-case-navigator/recommendations",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance with global standards including GDPR, HIPAA, and SOC 2.",
    benefits: ["End-to-end encryption", "GDPR compliant", "SOC 2 certified", "Regular security audits"],
    cta: "Security Details",
    link: "https://salescentri.com/docs/api-reference",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Get started in minutes with our intuitive setup process and comprehensive API documentation. No complex hardware required.",
    benefits: ["5-minute setup", "No hardware needed", "API documentation", "Developer support"],
    cta: "Quick Start Guide",
    link: "https://salescentri.com/docs/user-guide",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built-in collaboration tools for sales teams with shared dashboards, performance tracking, and team communication features.",
    benefits: ["Shared dashboards", "Team chat", "Performance tracking", "Role-based access"],
    cta: "See Integrations",
    link: "https://salescentri.com/solutions/psa-suite/integrations",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud infrastructure that grows with your business. Auto-scaling, redundancy, and global presence ensure reliability.",
    benefits: ["Auto-scaling", "Global redundancy", "99.9% uptime", "CDN optimization"],
    cta: "Infrastructure Details",
    link: "https://salescentri.com/docs/api-reference",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Round-the-clock expert support from our team of telephony specialists. Get help when you need it, wherever you are.",
    benefits: ["24/7 availability", "Expert technicians", "Multiple channels", "Proactive monitoring"],
    cta: "Contact Support",
    link: "https://salescentri.com/contact/support-request/live-chat",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">iGCT Capabilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud telephony features designed for modern sales teams. Scale your outreach with
            enterprise-grade voice solutions that deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--forest-green)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>

                  <p className="text-gray-600 mb-4">{feature.description}</p>

                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={feature.link}
                    className="inline-flex items-center text-[var(--forest-green)] font-semibold hover:text-[var(--citrus-lime)] transition-colors"
                  >
                    {feature.cta} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience iGCT?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how our comprehensive cloud telephony platform can transform your sales operations. Start your free
              trial today or book a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/free-trial" className="btn-primary">
                Start Free Trial
              </a>
              <a href="https://salescentri.com/get-started/book-demo" className="btn-secondary">
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
