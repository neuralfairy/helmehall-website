"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play, Calculator } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#b2d854] rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#7fd131] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-[#4fde08] rounded-full opacity-25 animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="scroll-reveal">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Global Voice Solutions
            <span className="block text-[#32873f] mt-2">That Scale With You</span>
          </h1>
        </div>

        <div className="scroll-reveal">
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            iGCT by Helmehall helps you connect with customers worldwide through reliable, cloud-powered telephony.
            Transform your sales outreach with enterprise-grade voice solutions.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://salescentri.com/get-started/free-trial"
            className="btn-primary flex items-center space-x-2 animate-pulse-glow"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a href="https://salescentri.com/get-started/book-demo" className="btn-secondary flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Book Demo</span>
          </a>
        </div>

        <div className="scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#b2d854]/30">
            <Calculator className="w-5 h-5 text-[#32873f]" />
            <span className="text-gray-700">Featured Tool:</span>
            <a
              href="https://salescentri.com/solutions/use-case-navigator/recommendations"
              className="text-[#32873f] font-semibold hover:underline"
            >
              ROI Calculator →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="scroll-reveal mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#32873f] mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#32873f] mb-2">150+</div>
            <div className="text-gray-600">Countries Supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#32873f] mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>

        {/* Additional CTAs */}
        <div className="scroll-reveal mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://salescentri.com/solutions/use-case-navigator/demo"
            className="text-[#32873f] hover:text-[#b2d854] font-medium"
          >
            Interactive Demo →
          </a>
          <a
            href="https://salescentri.com/contact/sales-inquiry/request-quote"
            className="text-[#32873f] hover:text-[#b2d854] font-medium"
          >
            Request Quote →
          </a>
          <a
            href="https://salescentri.com/resources/case-studies"
            className="text-[#32873f] hover:text-[#b2d854] font-medium"
          >
            Case Studies →
          </a>
        </div>
      </div>
    </section>
  )
}
