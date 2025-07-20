import { HardDrive, Users, Upload, Download } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      name: "Total Storage",
      value: "0 GB",
      icon: HardDrive,
      change: "0",
      changeType: "neutral",
    },
    {
      name: "Family Members",
      value: "0",
      icon: Users,
      change: "0",
      changeType: "neutral",
    },
    {
      name: "Files Uploaded",
      value: "0",
      icon: Upload,
      change: "0",
      changeType: "neutral",
    },
    {
      name: "Downloads",
      value: "0",
      icon: Download,
      change: "0",
      changeType: "neutral",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.name} className="relative px-4 py-5 overflow-hidden bg-white rounded-lg shadow sm:px-6 sm:py-6">
          <dt>
            <div className="absolute p-3 bg-blue-500 rounded-md">
              <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
          </dt>
          <dd className="flex items-baseline ml-16">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p className="flex items-baseline ml-2 text-sm font-semibold text-gray-500">{item.change}</p>
          </dd>
        </div>
      ))}
    </div>
  )
}
