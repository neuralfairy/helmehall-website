"use client"

import { useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales, TechCorp",
    content:
      "Helmehall's iGCT platform transformed our global outreach. We saw a 40% increase in connection rates within the first month.",
    rating: 5,
    company: "TechCorp",
  },
  {
    name: "Michael Chen",
    title: "Sales Director, GlobalReach",
    content:
      "The voice quality and reliability are exceptional. Our team can now focus on selling instead of worrying about call connectivity.",
    rating: 5,
    company: "GlobalReach",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Operations, ScaleUp Inc",
    content:
      "Implementation was seamless and the ROI was immediate. The analytics dashboard gives us insights we never had before.",
    rating: 5,
    company: "ScaleUp Inc",
  },
]

export function TestimonialsSection() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by Sales Teams Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are scaling their outreach with Helmehall's iGCT platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-reveal bg-gray-50 rounded-xl p-8 relative group hover:bg-[#b2d854]/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-[#32873f] mb-4 opacity-50" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#32873f] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  <div className="text-[#32873f] text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a href="https://salescentri.com/resources/case-studies" className="btn-secondary">
            Read More Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}
