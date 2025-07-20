import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingCTA } from "@/components/landing/landing-cta"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
    </main>
  )
}
