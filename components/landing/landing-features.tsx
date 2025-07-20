import { Search, Upload, Download, Lock, Smartphone, Globe } from "lucide-react"

export function LandingFeatures() {
  const features = [
    {
      name: "AI-Powered Search",
      description: "Find your photos and documents instantly with intelligent search capabilities.",
      icon: Search,
    },
    {
      name: "Easy Upload",
      description: "Drag and drop files or use our simple upload interface.",
      icon: Upload,
    },
    {
      name: "Quick Download",
      description: "Download your files anytime, anywhere with one click.",
      icon: Download,
    },
    {
      name: "Secure Storage",
      description: "Your data is encrypted and stored safely on your local device.",
      icon: Lock,
    },
    {
      name: "Mobile Friendly",
      description: "Access your files from any device with our responsive design.",
      icon: Smartphone,
    },
    {
      name: "Remote Access",
      description: "Port forwarding enables access from anywhere in the world.",
      icon: Globe,
    },
  ]

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for family storage
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Powerful features designed to keep your family's digital life organized and accessible.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
