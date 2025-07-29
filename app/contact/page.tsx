import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Ticket, Calendar, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Helmehall Solutions - Get Expert Cloud Telephony Support",
  description:
    "Contact Helmehall Solutions for cloud telephony support. Book meetings, live chat, submit tickets. Located in Henderson, NV with 24/7 global support.",
  keywords: "contact Helmehall, cloud telephony support, Henderson Nevada, live chat, technical support, sales contact",
}

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Meeting",
    description: "Schedule a personalized demo or consultation with our experts",
    action: "Schedule Now",
    link: "https://salescentri.com/get-started/calendly",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team via live chat",
    action: "Start Chat",
    link: "https://salescentri.com/contact/support-request/live-chat",
  },
  {
    icon: Ticket,
    title: "Submit Ticket",
    description: "Submit a detailed support request for technical assistance",
    action: "Create Ticket",
    link: "https://salescentri.com/contact/support-request/submit-ticket",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team of cloud telephony experts. We're here to help you find the perfect voice
            solution for your business needs.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[var(--forest-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <a href={method.link} className="btn-primary inline-flex items-center">
                {method.action}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form action="https://salescentri.com/contact/sales-inquiry" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Request Demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--forest-green)] focus:border-transparent"
                  placeholder="Tell us about your cloud telephony needs..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[var(--forest-green)] mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Office Location</div>
                    <div className="text-gray-600">Henderson, Nevada, USA</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[var(--forest-green)] mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Support Hours</div>
                    <div className="text-gray-600">24/7 Global Support</div>
                    <div className="text-sm text-gray-500">Business Hours: 8 AM - 6 PM PST</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[var(--forest-green)] mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Phone Support</div>
                    <div className="text-gray-600">Available 24/7 for Enterprise customers</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[var(--forest-green)] mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Email Support</div>
                    <div className="text-gray-600">Response within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="block w-full text-center py-3 px-4 bg-[#32873f] text-white rounded-lg hover:bg-[#32873f]/90 transition-colors font-medium"
                >
                  Start Free Trial
                </a>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  className="block w-full text-center py-3 px-4 bg-[#b2d854] text-black rounded-lg hover:bg-[#b2d854]/90 transition-colors font-medium"
                >
                  Interactive Demo
                </a>
                <a
                  href="https://salescentri.com/contact/sales-inquiry/request-quote"
                  className="block w-full text-center py-3 px-4 border-2 border-[#32873f] text-[#32873f] rounded-lg hover:bg-[#32873f] hover:text-white transition-colors font-medium"
                >
                  Request Quote
                </a>
                <a
                  href="https://salescentri.com/contact/partnerships/partner-inquiry"
                  className="block w-full text-center py-3 px-4 border-2 border-[#32873f] text-[#32873f] rounded-lg hover:bg-[#32873f] hover:text-white transition-colors font-medium"
                >
                  Partner Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
