import Link from "next/link"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Family's
            <span className="text-blue-600"> Private Cloud</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Secure, intelligent local storage solution. Upload, organize, and search your family's memories with
            AI-powered features.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/auth"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Secure</h3>
              <p className="text-gray-600">Your data stays on your device</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
              <p className="text-gray-600">Lightning-fast uploads and downloads</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Family-First</h3>
              <p className="text-gray-600">Built for families, by families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
