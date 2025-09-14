import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  Shield, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X,
  Sparkles,
  Zap,
  Award,
  Globe,
  Lock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Simulate live market data with more realistic updates
  const [marketData, setMarketData] = useState([
    { symbol: 'S&P 500', price: 4285.32, change: 24.18, changePercent: 0.57, trending: 'up' },
    { symbol: 'NASDAQ', price: 13234.52, change: -18.45, changePercent: -0.14, trending: 'down' },
    { symbol: 'DOW', price: 33875.23, change: 156.78, changePercent: 0.47, trending: 'up' },
    { symbol: 'BITCOIN', price: 43250.18, change: 1205.43, changePercent: 2.87, trending: 'up' },
  ]);

  const portfolioData = [
    { name: 'Growth Portfolio', value: '$124,580', change: '+12.4%', color: 'bg-gradient-to-r from-blue-500 to-blue-600', percentage: 35 },
    { name: 'Dividend Focus', value: '$89,240', change: '+8.7%', color: 'bg-gradient-to-r from-emerald-500 to-emerald-600', percentage: 25 },
    { name: 'Tech Stocks', value: '$156,790', change: '+15.2%', color: 'bg-gradient-to-r from-purple-500 to-purple-600', percentage: 30 },
    { name: 'Bonds & Fixed', value: '$67,430', change: '+4.1%', color: 'bg-gradient-to-r from-amber-500 to-amber-600', percentage: 10 },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Portfolio Manager',
      content: 'The platform has transformed how we manage our clients\' investments. The insights are invaluable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Torres',
      role: 'Financial Advisor',
      content: 'Outstanding analytics and user experience. Our clients love the transparency and real-time updates.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Investment Analyst',
      content: 'Comprehensive tools that help us make better investment decisions. Highly recommended.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Simulate market data updates with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => ({
        ...item,
        price: Math.max(0, item.price + (Math.random() - 0.5) * 5),
        change: (Math.random() - 0.5) * 30,
        changePercent: (Math.random() - 0.5) * 1.5,
        trending: Math.random() > 0.5 ? 'up' : 'down'
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation with glassmorphism effect */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FinanceFlow
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Portfolio', 'Markets', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
          <div className="px-4 py-6 space-y-4">
            {['Services', 'Portfolio', 'Markets', 'About'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with parallax */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        </div>

        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center space-x-2 text-amber-400 mb-4">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">Trusted by 50,000+ Investors</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart Investing for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 animate-gradient-x"> Your Future</span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Professional investment management with cutting-edge AI technology. 
                Grow your wealth with personalized strategies and real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105">
                  Start Investing 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 font-semibold text-lg backdrop-blur-sm">
                  <span className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 group-hover:text-amber-500 transition-colors duration-300" />
                    View Demo
                  </span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm text-blue-100">SEC Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-400" />
                  <span className="text-sm text-blue-100">Award Winning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-blue-300" />
                  <span className="text-sm text-blue-100">Bank-Level Security</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced market overview card */}
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Live Markets</h3>
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {marketData.slice(0, 3).map((item, index) => (
                    <div 
                      key={index} 
                      className="group flex justify-between items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div>
                        <p className="font-semibold group-hover:text-amber-300 transition-colors duration-300">{item.symbol}</p>
                        <p className="text-blue-100 text-lg font-mono">${item.price.toFixed(2)}</p>
                      </div>
                      <div className={`flex items-center space-x-2 ${
                        item.trending === 'up' ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {item.trending === 'up' ? 
                          <TrendingUp className="h-4 w-4 animate-bounce" /> : 
                          <TrendingDown className="h-4 w-4 animate-bounce" />
                        }
                        <span className="font-semibold">
                          {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg border border-emerald-400/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-300">Global Portfolio Performance</span>
                  </div>
                  <p className="text-2xl font-bold text-white">+14.7%</p>
                  <p className="text-emerald-300 text-sm">Average annual return</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            className="text-center mb-16"
            data-animate
            id="services-header"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored investment strategies powered by advanced analytics and decades of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PieChart className="h-8 w-8" />,
                title: 'Portfolio Management',
                description: 'AI-powered portfolio optimization with diversified investment strategies.',
                features: ['Risk Assessment', 'Asset Allocation', 'Auto-Rebalancing'],
                color: 'from-blue-500 to-blue-600',
                delay: '0ms'
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: 'Market Analysis',
                description: 'Advanced analytics and real-time insights to inform your decisions.',
                features: ['Real-time Data', 'Technical Analysis', 'Market Reports'],
                color: 'from-emerald-500 to-emerald-600',
                delay: '200ms'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Risk Management',
                description: 'Sophisticated risk management tools to protect your investments.',
                features: ['Hedging Strategies', 'Stop-loss Orders', 'Insurance Products'],
                color: 'from-purple-500 to-purple-600',
                delay: '400ms'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Financial Planning',
                description: 'Comprehensive planning for retirement and major life goals.',
                features: ['Retirement Planning', 'Tax Optimization', 'Estate Planning'],
                color: 'from-amber-500 to-amber-600',
                delay: '600ms'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Goal-Based Investing',
                description: 'Customized strategies aligned with your specific objectives.',
                features: ['Goal Tracking', 'Timeline Planning', 'Progress Monitoring'],
                color: 'from-red-500 to-red-600',
                delay: '800ms'
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: 'Wealth Management',
                description: 'Holistic wealth management for high-net-worth individuals.',
                features: ['Private Banking', 'Investment Advisory', 'Concierge Services'],
                color: 'from-indigo-500 to-indigo-600',
                delay: '1000ms'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2 ${
                  isVisible['services-header'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: service.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl bg-gradient-to-r ${service.color}"></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center group-hover:translate-x-1 transform transition-transform">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Dashboard */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-animate
            id="portfolio-header"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BarChart3 className="h-4 w-4" />
              <span>Interactive Dashboard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Portfolio Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              Track your investments with our intuitive and comprehensive dashboard.
            </p>
          </div>

          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 ${
            isVisible['portfolio-header'] ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            {/* Enhanced tab navigation */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex space-x-8 px-6 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: <PieChart className="h-4 w-4" /> },
                  { id: 'holdings', label: 'Holdings', icon: <BarChart3 className="h-4 w-4" /> },
                  { id: 'performance', label: 'Performance', icon: <TrendingUp className="h-4 w-4" /> },
                  { id: 'transactions', label: 'Transactions', icon: <DollarSign className="h-4 w-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm capitalize transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id 
                        ? 'border-blue-500 text-blue-600 bg-blue-50 rounded-t-lg' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  {/* Enhanced stats cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: 'Total Portfolio Value',
                        value: '$437,040',
                        change: '+$12,340 (2.9%)',
                        color: 'from-blue-500 to-blue-600',
                        icon: <DollarSign className="h-6 w-6" />
                      },
                      {
                        title: 'Today\'s Gain/Loss',
                        value: '+$1,205',
                        change: '+0.28%',
                        color: 'from-emerald-500 to-emerald-600',
                        icon: <TrendingUp className="h-6 w-6" />
                      },
                      {
                        title: 'Total Return',
                        value: '+14.7%',
                        change: 'Since inception',
                        color: 'from-purple-500 to-purple-600',
                        icon: <BarChart3 className="h-6 w-6" />
                      },
                      {
                        title: 'Dividends (YTD)',
                        value: '$8,420',
                        change: '+15.2% vs last year',
                        color: 'from-amber-500 to-amber-600',
                        icon: <Award className="h-6 w-6" />
                      }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className={`relative overflow-hidden bg-gradient-to-r ${stat.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                      >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                            {stat.icon}
                          </div>
                          <p className="text-3xl font-bold mb-1">{stat.value}</p>
                          <p className="text-white/90 text-sm">{stat.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Enhanced portfolio allocation */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                        Portfolio Allocation
                      </h3>
                      <div className="space-y-4">
                        {portfolioData.map((item, index) => (
                          <div key={index} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                                <span className="font-medium text-gray-900">{item.name}</span>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-gray-900">{item.value}</p>
                                <p className="text-sm text-emerald-600 font-medium">{item.change}</p>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-2 ${item.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ 
                                  width: isVisible['portfolio-header'] ? `${item.percentage}%` : '0%',
                                  transitionDelay: `${index * 200}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced recent activity */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-purple-600" />
                        Recent Activity
                      </h3>
                      <div className="space-y-4">
                        {[
                          { action: 'Buy', symbol: 'AAPL', shares: '50', price: '$175.23', time: '2 hours ago', type: 'buy' },
                          { action: 'Sell', symbol: 'GOOGL', shares: '25', price: '$2,845.67', time: '1 day ago', type: 'sell' },
                          { action: 'Dividend', symbol: 'MSFT', amount: '$127.50', time: '2 days ago', type: 'dividend' },
                          { action: 'Buy', symbol: 'TSLA', shares: '10', price: '$238.45', time: '3 days ago', type: 'buy' },
                        ].map((activity, index) => (
                          <div 
                            key={index} 
                            className="flex justify-between items-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-gray-100 group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                activity.type === 'buy' ? 'bg-emerald-500' :
                                activity.type === 'sell' ? 'bg-red-500' : 'bg-blue-500'
                              }`}>
                                {activity.action[0]}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                  {activity.action} {activity.symbol}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {activity.shares ? `${activity.shares} shares at ${activity.price}` : activity.amount}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-400 font-medium">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Market Data Section */}
      <section id="markets" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            className="text-center mb-16"
            data-animate
            id="markets-header"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Globe className="h-4 w-4" />
              <span>Live Market Data</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-Time Market Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay ahead with live market data and advanced analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((item, index) => (
              <div 
                key={index} 
                className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible['markets-header'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.symbol}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 font-medium">LIVE</span>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 p-2 rounded-lg ${
                    item.trending === 'up' 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-red-600 bg-red-50'
                  }`}>
                    {item.trending === 'up' ? 
                      <TrendingUp className="h-4 w-4 animate-bounce" /> : 
                      <TrendingDown className="h-4 w-4 animate-bounce" />
                    }
                  </div>
                </div>
                
                <p className="text-3xl font-bold text-gray-900 mb-3 font-mono">
                  ${item.price.toFixed(2)}
                </p>
                
                <div className={`flex items-center space-x-2 ${
                  item.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  <span className="font-semibold">
                    {item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}
                  </span>
                  <span className="font-medium">
                    ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 flex items-center group-hover:translate-x-1 transform transition-transform">
                    View Details 
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            className="text-center mb-16"
            data-animate
            id="testimonials-header"
          >
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="h-4 w-4" />
              <span>Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied clients who've achieved their financial goals with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                  isVisible['testimonials-header'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-amber-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic group-hover:text-gray-700 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div 
            className="animate-fade-in-up"
            data-animate
            id="cta-section"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Start Your Journey Today</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> Financial Future?</span>
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 satisfied investors who trust us with their financial future. 
              Get started today with a personalized consultation and see the difference professional management makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  Open Free Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-semibold text-lg backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors duration-300" />
                  Schedule Consultation
                </span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: <Shield className="h-8 w-8" />, title: 'SEC Registered', desc: 'Fully regulated and compliant' },
                { icon: <Award className="h-8 w-8" />, title: '50,000+ Clients', desc: 'Trusted by investors worldwide' },
                { icon: <Lock className="h-8 w-8" />, title: 'Bank-Level Security', desc: '256-bit encryption protection' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <div className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FinanceFlow
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional investment management with cutting-edge technology for your financial success.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: 'Services',
                links: ['Portfolio Management', 'Financial Planning', 'Wealth Management', 'Risk Assessment']
              },
              {
                title: 'Company',
                links: ['About Us', 'Our Team', 'Careers', 'News']
              },
              {
                title: 'Contact',
                links: [
                  { icon: <Phone className="h-4 w-4" />, text: '1-800-FINANCE' },
                  { icon: <Mail className="h-4 w-4" />, text: 'contact@financeflow.com' },
                  { icon: <MapPin className="h-4 w-4" />, text: '123 Financial District' },
                  { icon: <MapPin className="h-4 w-4" />, text: 'New York, NY 10004' }
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {typeof link === 'string' ? (
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                          {link}
                        </a>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-400">
                          {link.icon}
                          <span>{link.text}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 FinanceFlow. All rights reserved. Securities offered through registered representatives.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;