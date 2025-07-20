"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/providers/auth-provider"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { signIn, signUp, user, loading: authLoading } = useAuth()
  const router = useRouter()

  // Add a state to track if we should redirect
  const [shouldRedirect, setShouldRedirect] = useState(false)

  // Watch for user state change and redirect when authenticated
  useEffect(() => {
    if (shouldRedirect && user && !authLoading) {
      console.log('User authenticated, redirecting...')
      setLoading(false) // Reset loading state
      router.push('/dashboard')
      setShouldRedirect(false)
    }
  }, [shouldRedirect, user, authLoading, router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setLoading(true)
  setError("")

  try {
    if (isLogin) {
      console.log('Starting sign in...')
      await signIn(email, password)
      console.log('Sign in successful, waiting for auth state update...')
      
      // Set flag to redirect when user state updates
      setShouldRedirect(true)
      
    } else {
      await signUp(email, password)
      setError("Check your email to confirm your account before logging in.")
      setLoading(false)
    }
  } catch (err: any) {
    console.error('Auth error:', err)
    setError(err.message)
    setLoading(false)
    setShouldRedirect(false)
  }
}

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {error && <div className="text-sm text-center text-red-600">{error}</div>}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {isLogin ? "Sign in" : "Sign up"}
        </button>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </form>
  )
}
