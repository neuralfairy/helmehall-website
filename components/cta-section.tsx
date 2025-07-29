"use client"

import { useEffect } from "react"
import { ArrowRight, Calculator, Play } from "lucide-react"

export function CTASection() {
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
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Voice Operations?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of sales teams who trust Helmehall for their global communication needs. Start your free
            trial today and experience the difference.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://salescentri.com/get-started/free-trial"
            className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="https://salescentri.com/solutions/use-case-navigator/demo"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Interactive Demo</span>
          </a>

          <a
            href="https://salescentri.com/contact/sales-inquiry/request-quote"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Request Quote</span>
          </a>
        </div>

        <div className="scroll-reveal text-white/80 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </div>

        <div className="scroll-reveal flex flex-wrap justify-center gap-6 text-white/80 text-sm">
          <a href="https://salescentri.com/pricing/plans-overview" className="hover:text-white transition-colors">
            View All Plans →
          </a>
          <a href="https://salescentri.com/resources/case-studies" className="hover:text-white transition-colors">
            Success Stories →
          </a>
          <a href="https://salescentri.com/get-started/calendly" className="hover:text-white transition-colors">
            Schedule Meeting →
          </a>
        </div>
      </div>
    </section>
  )
}
