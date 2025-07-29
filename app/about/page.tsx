import type { Metadata } from "next"
import { MapPin, Users, Globe, Award, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "About Helmehall Solutions - Global Cloud Telephony Leader",
  description:
    "Learn about Helmehall Solutions, Henderson-based global cloud telephony provider. Our mission is voice-first global outreach for enterprise sales teams.",
  keywords:
    "Helmehall Solutions, Henderson Nevada, cloud telephony company, global voice solutions, enterprise communications",
}

const teamStats = [
  { number: "50+", label: "Team Members" },
  { number: "150+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "24/7", label: "Support Coverage" },
]

const values = [
  {
    title: "Global Reach",
    description:
      "Connecting businesses worldwide with reliable voice solutions that transcend geographical boundaries.",
    icon: Globe,
  },
  {
    title: "Innovation First",
    description:
      "Continuously pushing the boundaries of voice technology with AI-powered solutions and cutting-edge infrastructure.",
    icon: Award,
  },
  {
    title: "Customer Success",
    description:
      "Your success is our success. We provide dedicated support and solutions tailored to your unique needs.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Helmehall Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a Henderson-based global cloud telephony provider dedicated to transforming how businesses connect
            with their customers worldwide through innovative voice solutions.
          </p>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Headquartered in Henderson, Nevada</span>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To enable voice-first global outreach for enterprise sales teams through reliable, scalable, and
              innovative cloud telephony solutions that drive business growth and enhance customer relationships.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[var(--forest-green)] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[var(--forest-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Our diverse team of telephony experts, engineers, and customer success specialists work together to
              deliver exceptional voice solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/company/about-us/leadership-team"
                className="inline-flex items-center text-[#32873f] font-semibold hover:text-[#b2d854] transition-colors"
              >
                Meet Our Leadership Team <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a
                href="https://salescentri.com/company/team-advisors/career-openings"
                className="inline-flex items-center text-[#32873f] font-semibold hover:text-[#b2d854] transition-colors"
              >
                Join Our Team <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a
                href="https://salescentri.com/company/partners-affiliates"
                className="inline-flex items-center text-[#32873f] font-semibold hover:text-[#b2d854] transition-colors"
              >
                Partner Program <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Technology</h3>
            <p className="text-gray-600 mb-6">
              Built on cutting-edge cloud infrastructure with global redundancy, our iGCT platform delivers
              enterprise-grade reliability and performance. We leverage AI and machine learning to continuously improve
              call quality and routing efficiency.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                Cloud-native architecture
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                AI-powered call routing
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                Global redundancy
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                Real-time analytics
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Presence</h3>
            <p className="text-gray-600 mb-6">
              While headquartered in Henderson, Nevada, our infrastructure spans the globe with data centers and points
              of presence in major markets worldwide. This ensures low latency and high-quality voice connections
              regardless of location.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                North America coverage
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                European infrastructure
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                Asia-Pacific presence
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-[var(--citrus-lime)] rounded-full mr-3"></div>
                Latin America support
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Communications?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who trust Helmehall for their global communication needs. Let's discuss how
              we can help scale your voice operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" className="btn-primary">
                Schedule a Demo
              </a>
              <a href="https://salescentri.com/contact/sales-inquiry" className="btn-secondary">
                Contact Sales
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="bg-gray-100 text-gray-900 hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Try Interactive Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
