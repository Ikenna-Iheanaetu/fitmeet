'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import Navigation from '@/components/Navigation'
import { registerSchema, type RegisterFormData } from '@/lib/validations/auth'
import { cn } from '@/lib/utils'

export default function RegisterPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [authError, setAuthError] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormData) => {
    setAuthError('')
    
    try {
      await signUp(data.email, data.password, data.firstName, data.lastName)
      router.push('/dashboard')
    } catch (error: any) {
      setAuthError(error.message || 'An error occurred during registration')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <Navigation />

      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12 w-full max-w-lg shadow-2xl shadow-black/25">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Create <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Account</span>
            </h1>
            <p className="text-gray-300 text-lg">Join FitMeet and find your workout buddy</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-3">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', {
                      onChange: () => {
                        if (authError) setAuthError('')
                      }
                    })}
                    className={cn(
                      "w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
                      errors.firstName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                        : "border-gray-600 hover:border-gray-500 focus:border-purple-500 focus:ring-purple-500/25"
                    )}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-400">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-3">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', {
                      onChange: () => {
                        if (authError) setAuthError('')
                      }
                    })}
                    className={cn(
                      "w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
                      errors.lastName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                        : "border-gray-600 hover:border-gray-500 focus:border-purple-500 focus:ring-purple-500/25"
                    )}
                    placeholder="Doe"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-400">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    onChange: () => {
                      if (authError) setAuthError('')
                    }
                  })}
                  className={cn(
                    "w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                      : "border-gray-600 hover:border-gray-500 focus:border-blue-500 focus:ring-blue-500/25"
                  )}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-3">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register('password', {
                    onChange: () => {
                      if (authError) setAuthError('')
                    }
                  })}
                  className={cn(
                    "w-full pl-12 pr-12 py-4 bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
                    errors.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                      : "border-gray-600 hover:border-gray-500 focus:border-blue-500 focus:ring-blue-500/25"
                  )}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    onChange: () => {
                      if (authError) setAuthError('')
                    }
                  })}
                  className={cn(
                    "w-full pl-12 pr-12 py-4 bg-gray-900/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200",
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                      : "border-gray-600 hover:border-gray-500 focus:border-blue-500 focus:ring-blue-500/25"
                  )}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>

            {authError && (
              <div className="bg-red-900/50 border-2 border-red-500/50 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-red-300">{authError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
