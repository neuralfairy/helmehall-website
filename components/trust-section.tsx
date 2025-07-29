"use client"

import { useEffect } from "react"
import { Shield, Award, Lock, CheckCircle } from "lucide-react"

const certifications = [
  { name: "ISO 27001", icon: Shield },
  { name: "SOC 2 Type II", icon: Lock },
  { name: "GDPR Compliant", icon: CheckCircle },
  { name: "HIPAA Ready", icon: Award },
]

export function TrustSection() {
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
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security & Compliance</h2>
          <p className="text-gray-400">Trusted by Fortune 500 companies worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="scroll-reveal text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-[#b2d854]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#b2d854]/30 transition-colors">
                <cert.icon className="w-8 h-8 text-[#b2d854]" />
              </div>
              <div className="text-sm font-medium">{cert.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
