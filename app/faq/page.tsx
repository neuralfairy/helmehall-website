import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "FAQ - Cloud Telephony Questions Answered | Helmehall Solutions",
  description:
    "Get answers to frequently asked questions about cloud telephony, VoIP, call routing, compliance, and iGCT platform features.",
  keywords: "cloud telephony FAQ, VoIP questions, call routing help, compliance questions, iGCT support",
}

export default function FAQPage() {
  return <FAQClientPage />
}
