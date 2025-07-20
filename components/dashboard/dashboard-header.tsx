"use client"

import { useAuth } from "@/components/providers/auth-provider"
import { LogOut, User } from "lucide-react"

export function DashboardHeader() {
  const { user, signOut } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">LokalStowage</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-700">{user?.email}</span>
            </div>
            <button onClick={signOut} className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Sign out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
