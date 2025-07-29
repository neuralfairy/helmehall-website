import type { Metadata } from "next"
import { Check, X, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable Cloud Telephony | Helmehall Solutions",
  description:
    "Transparent pricing for iGCT cloud telephony solutions. Choose from Starter, Professional, or Enterprise plans. Get custom quotes for large organizations.",
  keywords: "cloud telephony pricing, iGCT plans, VoIP pricing, enterprise telephony costs, SIP trunking rates",
}

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per user/month",
    description: "Perfect for small teams getting started with cloud telephony",
    features: [
      "Up to 10 users",
      "Basic call routing",
      "Standard voice quality",
      "Email support",
      "Basic analytics",
      "Mobile app access",
      "1,000 minutes included",
      "Standard integrations",
    ],
    limitations: ["No advanced analytics", "No custom integrations", "No priority support"],
    cta: "Start Free Trial",
    link: "https://salescentri.com/pricing/free-trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "per user/month",
    description: "Advanced features for growing sales teams",
    features: [
      "Up to 100 users",
      "Advanced call routing",
      "HD voice quality",
      "Priority support",
      "Advanced analytics",
      "CRM integrations",
      "5,000 minutes included",
      "API access",
      "Call recording",
      "VoiceBot integration",
      "SMS capabilities",
      "Custom reporting",
    ],
    limitations: ["Limited customization", "Standard SLA"],
    cta: "Get Started",
    link: "https://salescentri.com/pricing/plans-overview",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact for pricing",
    description: "Full-featured solution for large organizations",
    features: [
      "Unlimited users",
      "Custom call routing",
      "Premium voice quality",
      "Dedicated support",
      "Custom analytics",
      "All integrations",
      "Unlimited minutes",
      "Full API access",
      "Advanced call recording",
      "AI-powered features",
      "Global SMS & WhatsApp",
      "Custom development",
      "SLA guarantees",
      "On-premise options",
      "Dedicated infrastructure",
    ],
    limitations: [],
    cta: "Contact Sales",
    link: "https://salescentri.com/pricing/enterprise-custom",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees or
            long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-[var(--citrus-lime)] scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-[var(--citrus-lime)] text-black text-center py-2 font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[var(--forest-green)]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-center">
                      <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[var(--forest-green)] text-black hover:bg-[var(--forest-green)]/90"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect plan for your specific needs. Get personalized recommendations and
            custom pricing for large deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/pricing/plans-overview" className="btn-primary">
              Compare All Plans
            </a>
            <a href="https://salescentri.com/contact/sales-inquiry/request-quote" className="btn-secondary">
              Request Custom Quote
            </a>
            <a
              href="https://salescentri.com/get-started/calendly"
              className="bg-gray-100 text-gray-900 hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">
                No setup fees for any plan. Get started immediately with our quick onboarding process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the free trial?</h4>
              <p className="text-gray-600">
                14-day free trial with full access to Professional plan features. No credit card required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer volume discounts?</h4>
              <p className="text-gray-600">
                Yes, we offer custom pricing for organizations with 500+ users. Contact our sales team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
