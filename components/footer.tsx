import Link from "next/link"
import { Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#b2d854] rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">Helmehall</span>
            </div>
            <p className="text-[#4a5568] mb-4">
              Global voice solutions that scale with your business. Reliable cloud telephony for enterprise sales teams.
            </p>
            <div className="flex items-center space-x-2 text-sm text-[#4a5568]">
              <MapPin className="w-4 h-4" />
              <span>Henderson, NV</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  PSA Suite <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/by-industry/it"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  IT Solutions <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/by-industry/healthcare"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Healthcare <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/by-use-case/sdr-teams"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  SDR Teams <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Whitepapers <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Case Studies <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/tutorials-webinars"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Tutorials <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/api-reference"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  API Docs <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Live Chat <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact/support-request/submit-ticket"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Submit Ticket <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/trust/compliance-certifications"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Certifications <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/careers"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Careers <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/company/about-us"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  About Us <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/about-us/leadership-team"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Leadership <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/partners-affiliates"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Partners <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact/partnerships/partner-inquiry"
                  className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
                >
                  Partner Inquiry <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d3748] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-[#4a5568] mb-4 md:mb-0">© 2024 Helmehall Solutions. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-[#4a5568] hover:text-[#b2d854] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#4a5568] hover:text-[#b2d854] transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://salescentri.com?utm_source=helmehall.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-[#4a5568] hover:text-[#b2d854] transition-colors flex items-center"
              >
                Powered by Sales Intelligence Platform <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
