'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Navigation() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  // Determine which buttons to show based on current route
  const getNavigationButtons = () => {
    // If user is authenticated, show logout button
    if (user) {
      return (
        <div className="flex items-center space-x-3">
          <button 
            onClick={async () => {
              try {
                await signOut()
                // Navigation will happen automatically via auth state change
              } catch (error) {
                console.error('Logout failed:', error)
              }
            }}
            className="flex items-center space-x-2 text-gray-300 hover:text-white border border-gray-600 hover:border-red-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )
    }

    // For different routes, show appropriate auth buttons
    switch (pathname) {
      case '/':
        // Landing page - show both Sign In and Sign Up
        return (
          <div className="flex items-center space-x-3">
            <Link href="/auth/login" className="text-gray-300 hover:text-white border border-gray-600 hover:border-blue-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
              Sign In
            </Link>
            <Link href="/auth/register" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40">
              Sign Up
            </Link>
          </div>
        )
      
      case '/auth/login':
        // Login page - show only Sign Up
        return (
          <div className="flex items-center space-x-3">
            <Link href="/auth/register" className="text-gray-300 hover:text-white border border-gray-600 hover:border-blue-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
              Sign Up
            </Link>
          </div>
        )
      
      case '/auth/register':
        // Register page - show only Sign In
        return (
          <div className="flex items-center space-x-3">
            <Link href="/auth/login" className="text-gray-300 hover:text-white border border-gray-600 hover:border-blue-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
              Sign In
            </Link>
          </div>
        )
      
      default:
        // Default fallback - show both options
        return (
          <div className="flex items-center space-x-3">
            <Link href="/auth/login" className="text-gray-300 hover:text-white border border-gray-600 hover:border-blue-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
              Sign In
            </Link>
            <Link href="/auth/register" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40">
              Sign Up
            </Link>
          </div>
        )
    }
  }

  return (
    <header className="relative z-50 backdrop-blur-xl bg-black/30 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FitMeet
              </h1>
            </Link>
          </div>
          
          {/* Dynamic Navigation Buttons */}
          {getNavigationButtons()}
        </div>
      </div>
    </header>
  )
}
