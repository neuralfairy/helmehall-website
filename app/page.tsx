import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { TrustSection } from "@/components/trust-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
