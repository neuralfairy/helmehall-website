import type { Metadata } from "next"
import { Calendar, ExternalLink } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog - Cloud Telephony Insights | Helmehall Solutions",
  description:
    "Expert insights on cloud telephony, VoIP solutions, call center automation, and B2B sales tools. Stay updated with the latest trends in voice technology.",
  keywords: "cloud telephony blog, VoIP insights, call center automation, B2B sales tools, voice technology trends",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Voice Technology Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on cloud telephony, VoIP solutions, and the future of business communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-[var(--forest-green)] to-[var(--citrus-lime)] flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">{index + 1}</div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--forest-green)] font-medium">{post.category}</span>

                  <div className="inline-flex items-center text-[var(--forest-green)] hover:text-[var(--citrus-lime)] transition-colors">
                    Read on SalesCentri
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading on SalesCentri</h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights on cloud telephony, VoIP solutions, and sales automation delivered directly from
              our main platform.
            </p>
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit SalesCentri Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
