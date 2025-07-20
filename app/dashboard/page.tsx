import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentFiles } from "@/components/dashboard/recent-files"
import { StorageUsage } from "@/components/dashboard/storage-usage"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back to your family cloud storage</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StorageUsage />
        <RecentFiles />
      </div>
    </div>
  )
}
