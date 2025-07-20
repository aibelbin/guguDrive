import { HardDrive, Users, Upload, Download } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      name: "Total Storage",
      value: "2.4 TB",
      icon: HardDrive,
      change: "+12%",
      changeType: "positive",
    },
    {
      name: "Family Members",
      value: "5",
      icon: Users,
      change: "+1",
      changeType: "positive",
    },
    {
      name: "Files Uploaded",
      value: "1,234",
      icon: Upload,
      change: "+23",
      changeType: "positive",
    },
    {
      name: "Downloads",
      value: "567",
      icon: Download,
      change: "+12",
      changeType: "positive",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.name} className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6">
          <dt>
            <div className="absolute rounded-md bg-blue-500 p-3">
              <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">{item.change}</p>
          </dd>
        </div>
      ))}
    </div>
  )
}
