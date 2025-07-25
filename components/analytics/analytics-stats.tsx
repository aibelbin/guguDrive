import { TrendingUp, TrendingDown, Activity, Users } from "lucide-react"

export function AnalyticsStats() {
  const stats = [
    {
      name: "Storage Growth",
      value: "0%",
      change: "0%",
      changeType: "neutral",
      icon: TrendingUp,
    },
    {
      name: "Active Users",
      value: "0/0",
      change: "No activity",
      changeType: "neutral",
      icon: Users,
    },
    {
      name: "Upload Activity",
      value: "0 files",
      change: "0%",
      changeType: "neutral",
      icon: Activity,
    },
    {
      name: "Download Rate",
      value: "0%",
      change: "0%",
      changeType: "neutral",
      icon: TrendingDown,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        item.changeType === "positive"
                          ? "text-green-600"
                          : item.changeType === "negative"
                            ? "text-red-600"
                            : "text-gray-500"
                      }`}
                    >
                      {item.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
