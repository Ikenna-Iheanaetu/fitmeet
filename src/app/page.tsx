"use client"

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  const { user, profile } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navigation Header */}
      <div className="sticky top-0">
        <Navigation />
      </div>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Hero Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                {user ? (
                  <>
                    <span className="block">Welcome back,</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                      {profile?.first_name}!!
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-white">Transform Your</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                      Body & Mind
                    </span>
                    <span className="block text-white text-4xl sm:text-5xl lg:text-6xl mt-2">Elevate Your Life</span>
                  </>
                )}
              </h1>
              
              {/* Hero Subtext */}
              <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {user ? (
                  "Ready to continue your fitness journey? Discover new classes, connect with trainers, and achieve your goals."
                ) : (
                  <>
                    Achieve your fitness goals with <span className="text-emerald-400 font-semibold">personalized workouts</span>, 
                    expert trainers, and a <span className="text-blue-400 font-semibold">supportive community</span>. 
                    Join thousands transforming their lives.
                  </>
                )}
              </p>
              
              {/* Hero CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                {user ? (
                  <>
                    <Link href="/dashboard" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 inline-block text-center">
                      Go to Dashboard
                    </Link>
                    <button className="w-full sm:w-auto border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:bg-blue-500/10">
                      Browse Classes
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/register" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 inline-block text-center group">
                      <span className="flex items-center justify-center gap-2">
                        Get Started Free
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link href="/auth/login" className="w-full sm:w-auto border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:bg-blue-500/10 inline-block text-center">
                      Watch Demo
                    </Link>
                  </>
                )}
              </div>
              
              {/* Trust Indicators */}
              {!user && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Free to join</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">No equipment needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Cancel anytime</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Content - Statistics */}
            {!user && (
              <div className="relative">
                {/* Main Statistics Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Active Members */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2.4k+</div>
                      <div className="text-blue-300 font-semibold text-lg mb-2">Active Members</div>
                      <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <span>+23% this month</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Rate */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">95%</div>
                      <div className="text-purple-300 font-semibold text-lg mb-2">Success Rate</div>
                      <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Classes Available */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                      <div className="text-emerald-300 font-semibold text-lg mb-2">Class Types</div>
                      <div className="text-emerald-400 text-sm font-medium">Live & On-demand</div>
                    </div>
                  </div>
                  
                  {/* Expert Trainers */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">120+</div>
                      <div className="text-orange-300 font-semibold text-lg mb-2">Expert Trainers</div>
                      <div className="text-orange-400 text-sm font-medium">Certified Professionals</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">REAL RESULTS, REAL PEOPLE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Fitness Goals,
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Their Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Over 1000+ Certified Trainers Brought Outstanding Expertise To Help You Achieve Your Fitness Goals
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "Lost 25lbs in 3 months thanks to Fitto. Amazing coaches and great programs!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <div className="font-semibold text-white">Alex Thompson</div>
                  <div className="text-gray-400 text-sm">Lost 25lbs • 3 months</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 group">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "The virtual sessions are incredible! I can workout from anywhere with world-class trainers."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Mitchell</div>
                  <div className="text-gray-400 text-sm">Gained 15lbs muscle • 4 months</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gray-800/70 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "Best investment I've made! The community support and expert guidance is unmatched."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-white">Marcus Johnson</div>
                  <div className="text-gray-400 text-sm">Completed Marathon • 6 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Programs Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Train Smarter
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Unleash Your Potential
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Achieve Your Fitness Goals with AI-Powered Personalized Programs
            </p>
          </div>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strength Training */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group">
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-300">
                  Beginner Friendly
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">Strength Training</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Build muscle and increase strength with our progressive resistance training programs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="block">45-60 min</span>
                    <span className="block">3x per week</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105">
                    View Classes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Cardio & HIIT */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 group">
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-purple-300">
                  High Intensity
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">Cardio & HIIT</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Boost your cardiovascular health and burn calories with high-intensity interval training.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="block">30-45 min</span>
                    <span className="block">4x per week</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105">
                    View Classes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Flexibility & Yoga */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gray-800/70 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
              <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-emerald-300">
                  Mind & Body
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">Flexibility & Yoga</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Improve flexibility, balance, and mental well-being with our yoga and stretching programs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="block">60-90 min</span>
                    <span className="block">3x per week</span>
                  </div>
                  <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105">
                    View Classes
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Browse All Classes CTA */}
          <div className="text-center mt-16">
            <Link href="/classes" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
              <span>Browse All Classes</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section - Why Choose FitMeet? */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Discover What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to find and join the perfect fitness class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Find Local & Online Classes</h3>
                <p className="text-gray-400 leading-relaxed">
                  Discover fitness classes and trainers in your area or join virtual sessions from anywhere
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v1m8-3a2 2 0 012 2v1" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Easy Booking & Google Meet</h3>
                <p className="text-gray-400 leading-relaxed">
                  Book classes instantly and join seamlessly through Google Meet integration
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fitness Community</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connect with like-minded fitness enthusiasts and professional trainers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/20 to-black/40"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-white">ARE YOU READY TO TRANSFORM YOUR LIFE?</span>
            </div>
            
            {/* Main CTA Content */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
                <span className="block text-white">Connect</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                  Engage
                </span>
                <span className="block text-white">Transform</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Join thousands of fitness enthusiasts who've already transformed their lives with our 
                <span className="text-emerald-400 font-semibold">expert-led programs</span> and 
                <span className="text-blue-400 font-semibold">supportive community</span>. 
                Your journey to a healthier, stronger you starts now.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                {user ? (
                  <>
                    <Link href="/dashboard" className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 inline-block text-center">
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Go to Dashboard
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link href="/classes" className="group w-full sm:w-auto border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:bg-blue-500/10 inline-block text-center">
                      <span className="flex items-center justify-center gap-3">
                        Explore Classes
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/auth/register" className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 inline-block text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Start Your Fitness Journey
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link href="/auth/login" className="group w-full sm:w-auto border-2 border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:bg-emerald-500/10 inline-block text-center">
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a3 3 0 116 0v2M12 3a9 9 0 11-9 9 9 9 0 019-9z" />
                        </svg>
                        Watch Success Stories
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a3 3 0 116 0v2M12 3a9 9 0 11-9 9 9 9 0 019-9z" />
                        </svg>
                      </span>
                    </Link>
                  </>
                )}
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Free Forever</div>
                    <div className="text-sm text-gray-400">No hidden fees</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Community Support</div>
                    <div className="text-sm text-gray-400">24/7 guidance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Expert Trainers</div>
                    <div className="text-sm text-gray-400">Certified professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FitMeet
              </h1>
              <span className="text-gray-400">© { new Date().getFullYear() } FitMeet. All rights reserved.</span>
            </div>
            
            {/* Quick Links */}
            <div className="flex items-center space-x-8 mb-6 lg:mb-0">
              <a href="#classes" className="text-gray-400 hover:text-blue-400 transition-colors">
                Classes
              </a>
              <a href="#trainers" className="text-gray-400 hover:text-blue-400 transition-colors">
                Trainers
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#support" className="text-gray-400 hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}