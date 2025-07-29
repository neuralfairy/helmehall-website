"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

interface DropdownProps {
  label: string
  children: React.ReactNode
}

function Dropdown({ label, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-[#32873f] transition-colors"
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownItem({ children }: { children: React.ReactNode }) {
  return <div className="px-4 py-2 hover:bg-gray-50">{children}</div>
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#32873f] rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#32873f]">Helmehall</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#32873f] transition-colors">
              Home
            </Link>

            <Dropdown label="Solutions">
              <DropdownItem>
                <a
                  href="https://salescentri.com/solutions/psa-suite"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  PSA Suite
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Use Case Navigator
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  AI Aggregator
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/platforms/lead-management/voice-ai-agent"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Voice AI Agent
                </a>
              </DropdownItem>
            </Dropdown>

            <Dropdown label="Get Started">
              <DropdownItem>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Book Demo
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Free Trial
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Interactive Demo
                </a>
              </DropdownItem>
              <DropdownItem>
                <a
                  href="https://salescentri.com/contact/sales-inquiry"
                  className="text-gray-700 hover:text-[#32873f] transition-colors block"
                >
                  Contact Sales
                </a>
              </DropdownItem>
            </Dropdown>

            <Link href="/features" className="text-gray-700 hover:text-[#32873f] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#32873f] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#32873f] transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#32873f] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#32873f] transition-colors">
              Contact
            </Link>
            <a href="https://salescentri.com/get-started/free-trial" className="btn-primary">
              Start Free Trial
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                Home
              </Link>

              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Solutions</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="https://salescentri.com/solutions/psa-suite"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    PSA Suite
                  </a>
                  <a
                    href="https://salescentri.com/solutions/use-case-navigator"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Use Case Navigator
                  </a>
                  <a
                    href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    AI Aggregator
                  </a>
                  <a
                    href="https://salescentri.com/platforms/lead-management/voice-ai-agent"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Voice AI Agent
                  </a>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Get Started</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="https://salescentri.com/get-started/book-demo"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Book Demo
                  </a>
                  <a
                    href="https://salescentri.com/get-started/free-trial"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Free Trial
                  </a>
                  <a
                    href="https://salescentri.com/solutions/use-case-navigator/demo"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Interactive Demo
                  </a>
                  <a
                    href="https://salescentri.com/contact/sales-inquiry"
                    className="block py-1 text-gray-700 hover:text-[#32873f]"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>

              <Link href="/features" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                Features
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                Pricing
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#32873f]">
                Contact
              </Link>
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="block mx-3 my-2 btn-primary text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
