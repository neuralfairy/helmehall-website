"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is cloud telephony and how does it work?",
        answer:
          "Cloud telephony is a communication technology that allows you to make and receive calls over the internet instead of traditional phone lines. It works by converting voice signals into digital data packets that are transmitted over IP networks, providing greater flexibility, scalability, and cost-effectiveness than traditional phone systems.",
      },
      {
        question: "How quickly can I get started with iGCT?",
        answer:
          "You can get started with iGCT in as little as 5 minutes. Our cloud-based platform requires no hardware installation - simply sign up, configure your settings through our intuitive dashboard, and start making calls immediately.",
      },
      {
        question: "What countries do you support?",
        answer:
          "We support voice communications in over 150 countries worldwide. Our global infrastructure ensures high-quality connections and competitive rates for international calling, with local presence in major markets across North America, Europe, Asia-Pacific, and Latin America.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        question: "What is VoiceBot and how does it help my business?",
        answer:
          "VoiceBot is our AI-powered voice assistant that can handle customer interactions automatically. It uses natural language processing to understand customer queries, provide information, route calls appropriately, and even complete simple transactions. This reduces wait times, improves customer satisfaction, and allows your human agents to focus on more complex issues.",
      },
      {
        question: "How does smart call routing work?",
        answer:
          "Our smart call routing system uses advanced algorithms to direct calls to the most appropriate agent based on factors like skills, availability, customer priority, geographic location, and historical performance. This ensures customers reach the right person quickly while optimizing agent productivity and customer satisfaction.",
      },
      {
        question: "Can I integrate iGCT with my existing CRM?",
        answer:
          "Yes, iGCT integrates with popular CRM systems including Salesforce, HubSpot, Microsoft Dynamics, and many others. Our API allows for custom integrations, enabling features like click-to-call, automatic call logging, contact synchronization, and real-time customer data display during calls.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "How secure is your platform?",
        answer:
          "Security is our top priority. We use end-to-end encryption for all voice communications, maintain SOC 2 Type II certification, and comply with GDPR, HIPAA, and other international standards. Our infrastructure includes regular security audits, intrusion detection systems, and 24/7 monitoring to protect your communications.",
      },
      {
        question: "Are you HIPAA compliant for healthcare communications?",
        answer:
          "Yes, we offer HIPAA-compliant solutions for healthcare organizations. This includes encrypted communications, audit trails, access controls, and business associate agreements (BAAs) to ensure your patient communications meet all regulatory requirements.",
      },
      {
        question: "How do you handle call recording and data retention?",
        answer:
          "Call recording is available with appropriate consent mechanisms and compliance controls. We provide flexible retention policies, secure storage with encryption at rest, and audit trails for compliance purposes. Data retention periods can be customized based on your industry requirements and local regulations.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "What's included in the free trial?",
        answer:
          "Our 14-day free trial includes full access to Professional plan features with no credit card required. You get up to 100 users, advanced call routing, HD voice quality, basic integrations, and 1,000 minutes of calling to test our platform thoroughly.",
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer:
          "No, there are no setup fees for any of our plans. Our pricing is transparent with no hidden costs. You only pay for your monthly subscription and any additional minutes beyond your plan's included allowance at our competitive per-minute rates.",
      },
      {
        question: "Can I change my plan at any time?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Plan changes take effect immediately, and billing is prorated accordingly. Our team can help you choose the right plan as your business needs evolve.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 support through multiple channels including live chat, email, and phone. Enterprise customers receive priority support with dedicated account managers. Our support team consists of telephony experts who can help with technical issues, configuration, and optimization.",
      },
      {
        question: "Do you provide API documentation?",
        answer:
          "Yes, we provide comprehensive API documentation with code examples, SDKs for popular programming languages, and developer resources. Our APIs allow you to integrate voice capabilities into your applications, automate workflows, and build custom solutions.",
      },
      {
        question: "What happens if there's a service outage?",
        answer:
          "We maintain a 99.9% uptime SLA with automatic failover systems and redundant infrastructure. In the rare event of an outage, our systems automatically route traffic to backup servers. We provide real-time status updates and post-incident reports for transparency.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[var(--forest-green)] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[var(--forest-green)] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about cloud telephony, our iGCT platform, and how we can help transform
            your business communications.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our expert team is here to help with any questions about cloud
              telephony or our iGCT platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/contact/support-request/live-chat" className="btn-primary">
                Live Chat Support
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />
    </div>
  )
}
