export function StorageUsage() {
  const usageData = [
    { name: "Photos", value: 0, color: "bg-blue-500" },
    { name: "Videos", value: 0, color: "bg-green-500" },
    { name: "Documents", value: 0, color: "bg-yellow-500" },
    { name: "Other", value: 0, color: "bg-gray-500" },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Storage Usage</h3>
      <div className="space-y-4">
        {usageData.map((item) => (
          <div key={item.name} className="flex items-center">
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{item.name}</span>
                <span className="text-gray-900">{item.value}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4 text-center text-sm text-gray-500">
          No storage used yet
        </div>
      </div>
    </div>
  )
}
