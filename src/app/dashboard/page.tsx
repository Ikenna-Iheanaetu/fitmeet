"use client"

import React, { useState } from 'react';
import { 
  Menu,
  X,
  Home,
  BookOpen,
  TrendingUp,
  Users,
  Bell,
  User,
  ChevronRight,
  Clock,
  Calendar,
  Target,
  Award,
  Activity,
  BarChart3,
  Check,
  AlertCircle,
  UserPlus,
  Eye,
  Play,
  CheckCircle,
  Circle
} from 'lucide-react';

export default function TrainerTraineeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Mock data aligned with database schema
  const userData = {
    id: 1,
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex@example.com",
    role: "trainee", // or "trainer"
    profilePicture: null
  };

  const trainingsData = [
    {
      id: 1,
      title: "Advanced Strength Building",
      description: "12-week comprehensive strength training program focusing on compound movements",
      category: "strength",
      difficulty: "advanced",
      duration: 45,
      createdAt: "2024-01-15",
      sessions: [
        { id: 1, sessionDate: "2024-02-01", status: "completed" },
        { id: 2, sessionDate: "2024-02-03", status: "completed" },
        { id: 3, sessionDate: "2024-02-05", status: "completed" },
        { id: 4, sessionDate: "2024-02-08", status: "scheduled" },
        { id: 5, sessionDate: "2024-02-10", status: "scheduled" }
      ]
    },
    {
      id: 2,
      title: "Cardio Endurance Foundation",
      description: "8-week program to build cardiovascular endurance through varied training methods",
      category: "cardio",
      difficulty: "intermediate",
      duration: 30,
      createdAt: "2024-01-20",
      sessions: [
        { id: 6, sessionDate: "2024-02-02", status: "completed" },
        { id: 7, sessionDate: "2024-02-04", status: "completed" },
        { id: 8, sessionDate: "2024-02-06", status: "completed" },
        { id: 9, sessionDate: "2024-02-09", status: "completed" },
        { id: 10, sessionDate: "2024-02-11", status: "scheduled" }
      ]
    }
  ];

  const connectionsData = [
    {
      id: 1,
      userId: 2,
      connectedUserId: 3,
      status: "accepted",
      connectedUser: {
        firstName: "Sarah",
        lastName: "Mitchell",
        role: "trainer"
      },
      sharedTrainings: 2,
      lastActivity: "2024-02-05"
    },
    {
      id: 2,
      userId: 2,
      connectedUserId: 4,
      status: "accepted",
      connectedUser: {
        firstName: "Mike",
        lastName: "Johnson",
        role: "trainer"
      },
      sharedTrainings: 1,
      lastActivity: "2024-02-06"
    },
    {
      id: 3,
      userId: 2,
      connectedUserId: 5,
      status: "accepted",
      connectedUser: {
        firstName: "Emma",
        lastName: "Wilson",
        role: "trainee"
      },
      sharedTrainings: 0,
      lastActivity: "2024-02-04"
    }
  ];

  const notificationsData = [
    {
      id: 1,
      userId: 2,
      type: "connection_request",
      title: "New Connection Request",
      message: "Anna Martinez wants to connect with you",
      isRead: false,
      createdAt: "2024-02-06T10:30:00Z",
      actionData: { requesterId: 6, requesterName: "Anna Martinez" }
    },
    {
      id: 2,
      userId: 2,
      type: "session_reminder",
      title: "Training Session Tomorrow",
      message: "Advanced Strength Building session scheduled for tomorrow at 3:00 PM",
      isRead: false,
      createdAt: "2024-02-07T09:00:00Z",
      actionData: { trainingId: 1, sessionDate: "2024-02-08" }
    },
    {
      id: 3,
      userId: 2,
      type: "training_completion",
      title: "Training Milestone",
      message: "You've completed 75% of your Cardio Endurance Foundation program",
      isRead: true,
      createdAt: "2024-02-06T16:45:00Z",
      actionData: { trainingId: 2 }
    }
  ];

  // Calculate progress metrics
  const calculateTrainingProgress = (training) => {
    const completedSessions = training.sessions.filter(s => s.status === 'completed').length;
    return Math.round((completedSessions / training.sessions.length) * 100);
  };

  const getUpcomingSessions = () => {
    return trainingsData.flatMap(training =>
      training.sessions
        .filter(session => session.status === 'scheduled')
        .map(session => ({
          ...session,
          trainingTitle: training.title,
          trainingId: training.id
        }))
    ).sort((a, b) => new Date(a.sessionDate) - new Date(b.sessionDate)).slice(0, 3);
  };

  const getCategoryBreakdown = () => {
    const categories = {};
    trainingsData.forEach(training => {
      categories[training.category] = (categories[training.category] || 0) + 1;
    });
    return Object.entries(categories).map(([category, count]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      count,
      percentage: Math.round((count / trainingsData.length) * 100)
    }));
  };

  const unreadCount = notificationsData.filter(n => !n.isRead).length;

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'trainings', label: 'Trainings', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'connections', label: 'Connections', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: unreadCount },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, {userData.firstName}</h1>
          <p className="text-gray-400 mt-1">Here's your training overview for today</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{trainingsData.length}</div>
              <div className="text-sm text-gray-400">Active Trainings</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {trainingsData.reduce((acc, t) => acc + t.sessions.filter(s => s.status === 'completed').length, 0)}
              </div>
              <div className="text-sm text-gray-400">Completed Sessions</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{connectionsData.length}</div>
              <div className="text-sm text-gray-400">Connections</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{getUpcomingSessions().length}</div>
              <div className="text-sm text-gray-400">Upcoming Sessions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Trainings */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Active Trainings</h2>
        <div className="space-y-4">
          {trainingsData.map(training => {
            const progress = calculateTrainingProgress(training);
            return (
              <div key={training.id} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{training.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{training.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {training.category}
                      </span>
                      <span className="text-gray-400 text-xs">{training.duration} min</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-400">{progress}%</div>
                    <div className="text-xs text-gray-400">Complete</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Upcoming Sessions</h2>
        <div className="space-y-3">
          {getUpcomingSessions().map(session => (
            <div key={session.id} className="flex items-center justify-between bg-gray-700/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-white">{session.trainingTitle}</div>
                  <div className="text-sm text-gray-400">
                    {new Date(session.sessionDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrainings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Trainings</h1>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
          Create Training
        </button>
      </div>

      {/* Active Trainings */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Active Trainings</h2>
        <div className="grid gap-4">
          {trainingsData.map(training => {
            const progress = calculateTrainingProgress(training);
            const completedSessions = training.sessions.filter(s => s.status === 'completed').length;
            
            return (
              <div key={training.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{training.title}</h3>
                    <p className="text-gray-400 mb-3">{training.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium">
                        {training.category}
                      </span>
                      <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm font-medium">
                        {training.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {training.duration} min
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{progress}%</div>
                    <div className="text-sm text-gray-400">{completedSessions}/{training.sessions.length} sessions</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    Started {new Date(training.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                      View Details
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderConnections = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Connections</h1>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
          Find Trainers
        </button>
      </div>

      <div className="grid gap-4">
        {connectionsData.map(connection => (
          <div key={connection.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {connection.connectedUser.firstName.charAt(0)}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {connection.connectedUser.firstName} {connection.connectedUser.lastName}
                  </h3>
                  <p className="text-purple-300 text-sm capitalize mb-1">{connection.connectedUser.role}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{connection.sharedTrainings} shared trainings</span>
                    <span>•</span>
                    <span>Active {new Date(connection.lastActivity).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Progress
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Invite to Training
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Notifications</h1>

      <div className="space-y-4">
        {notificationsData.map(notification => (
          <div key={notification.id} className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-200 ${!notification.isRead ? 'border-blue-500/50' : 'border-gray-700/50'
            }`}>
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${notification.type === 'connection_request' ? 'bg-purple-500/20' :
                    notification.type === 'session_reminder' ? 'bg-blue-500/20' :
                      'bg-emerald-500/20'
                  }`}>
                  {notification.type === 'connection_request' ? <UserPlus className="w-6 h-6 text-purple-400" /> :
                    notification.type === 'session_reminder' ? <Calendar className="w-6 h-6 text-blue-400" /> :
                      <Award className="w-6 h-6 text-emerald-400" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{notification.title}</h3>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-gray-400 mb-2">{notification.message}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(notification.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {notification.type === 'connection_request' && (
                  <>
                    <button className="bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                      Decline
                    </button>
                    <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                      Accept
                    </button>
                  </>
                )}
                
                {notification.type === 'session_reminder' && (
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    View Training
                  </button>
                )}
                
                {notification.type === 'training_completion' && (
                  <button className="bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    View Progress
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProgress = () => {
    const categoryData = getCategoryBreakdown();
    const totalSessions = trainingsData.reduce((acc, t) => acc + t.sessions.length, 0);
    const completedSessions = trainingsData.reduce((acc, t) => acc + t.sessions.filter(s => s.status === 'completed').length, 0);
    const completionRate = Math.round((completedSessions / totalSessions) * 100);

    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Progress Analytics</h1>

        {/* Completion Rate */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Training Completion Rate</h2>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="3"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray={`${completionRate}, 100`}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{completionRate}%</span>
              </div>
            </div>
            
            <div>
              <div className="text-lg font-semibold text-white mb-2">
                {completedSessions} of {totalSessions} sessions completed
              </div>
              <div className="text-gray-400">
                Keep up the great work! You're making steady progress.
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Training Categories</h2>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={category.category} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-purple-500' :
                        'bg-emerald-500'
                    }`}></div>
                  <span className="text-white font-medium">{category.category}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-purple-500' :
                            'bg-emerald-500'
                        }`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-400 text-sm w-12 text-right">{category.count} trainings</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Activity Timeline</h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }, (_, i) => {
              const hasActivity = Math.random() > 0.6; // Simulate activity
              return (
                <div
                  key={i}
                  className={`w-8 h-8 rounded ${hasActivity ? 'bg-emerald-500' : 'bg-gray-700'
                    }`}
                  title={`Day ${i + 1}`}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <span>Last 4 weeks</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-700 rounded"></div>
                <span>No activity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'trainings': return renderTrainings();
      case 'connections': return renderConnections();
      case 'notifications': return renderNotifications();
      case 'progress': return renderProgress();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            FitMeet
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-2 ${activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800/50">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {userData.firstName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm truncate">
                {userData.firstName} {userData.lastName}
              </div>
              <div className="text-xs text-gray-400 capitalize">{userData.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-gray-900/90 backdrop-blur-sm border-b border-gray-800/50 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FitMeet
            </h1>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-400" />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}