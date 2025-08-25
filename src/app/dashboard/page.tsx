'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardPage() {
  const router = useRouter()
  const { user, profile, loading } = useAuth()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect if not authenticated
  if (!user) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome, {profile?.first_name || 'User'}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to start your fitness journey?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <div className="space-y-1">
              <p><span className="opacity-80">Name:</span> {profile?.first_name} {profile?.last_name}</p>
              <p><span className="opacity-80">Email:</span> {profile?.email}</p>
              <p><span className="opacity-80">Member since:</span> {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Quick Stats</h2>
            <div className="space-y-1">
              <p><span className="opacity-80">Workouts:</span> Coming soon</p>
              <p><span className="opacity-80">Friends:</span> Coming soon</p>
              <p><span className="opacity-80">Challenges:</span> Coming soon</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-3xl mb-2">🏃‍♂️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Find Workout Buddies</h3>
                <p className="text-sm text-gray-600">Connect with like-minded fitness enthusiasts</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900 mb-1">Track Workouts</h3>
                <p className="text-sm text-gray-600">Log and monitor your fitness progress</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-1">Set Goals</h3>
                <p className="text-sm text-gray-600">Define and achieve your fitness objectives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
