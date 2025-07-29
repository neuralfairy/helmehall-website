"use client"

import { useEffect } from "react"
import { Globe, Bot, MessageSquare, Phone, BarChart3, Shield, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global SIP Trunking",
    description: "Connect to customers worldwide with our reliable SIP trunking infrastructure across 150+ countries.",
    link: "https://salescentri.com/solutions/by-industry/it",
  },
  {
    icon: Bot,
    title: "VoiceBot & AI",
    description: "Intelligent voice automation that handles customer interactions with natural conversation flow.",
    link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
  },
  {
    icon: MessageSquare,
    title: "SMS & WhatsApp Bot",
    description: "Secure messaging with number masking and WhatsApp automation for professional communication.",
    link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
  },
  {
    icon: Phone,
    title: "Smart Call Routing",
    description: "Advanced call routing algorithms ensure calls reach the right agent at the right time.",
    link: "https://salescentri.com/platforms/lead-management/lead-generation",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive analytics dashboard with real-time insights into call performance and metrics.",
    link: "https://salescentri.com/solutions/use-case-navigator/recommendations",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance with global standards.",
    link: "https://salescentri.com/trust/security-privacy",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with our intuitive setup process and comprehensive API documentation.",
    link: "https://salescentri.com/docs/user-guide",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools for sales teams with shared dashboards and performance tracking.",
    link: "https://salescentri.com/solutions/psa-suite/integrations",
  },
]

export function FeaturesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">iGCT Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud telephony features designed for modern sales teams. Scale your outreach with
            enterprise-grade voice solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="scroll-reveal bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[#32873f] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#b2d854] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-white group-hover:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="text-[#32873f] font-medium hover:text-[#b2d854] transition-colors inline-flex items-center"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a
            href="https://salescentri.com/solutions/use-case-navigator/demo"
            className="btn-primary bg-[#32873f] hover:bg-[#b2d854] text-white font-medium transition-colors"
          >
            Try Interactive Demo
          </a>
        </div>
      </div>
    </section>
  )
}
