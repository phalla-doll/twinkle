import React from 'react';
import { Sparkles, ArrowUpRight, Mic, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-lg tracking-tight">Twinkle.ai</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#" className="hover:text-neutral-900 transition-colors">Platform</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Customers</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hidden md:block hover:text-neutral-600 transition-colors">Sign in</a>
          <button className="bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
            Get a Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold mb-8">
          <span className="flex items-center justify-center w-4 h-4 bg-neutral-900 text-white rounded-full text-[10px]">G</span>
          4.9 Rating over 12,850 Reviews
        </div>
        
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 leading-[1.1]">
          Plan more with<br />Twinkle AI
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 mb-10 font-medium">
          Projects remember. Agents think. Automations execute.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors">
            Get started for free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium border border-neutral-200 hover:border-neutral-300 transition-colors">
            Download API
          </button>
        </div>
      </section>

      {/* Hero Image/Interactive Area */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gradient-to-br from-emerald-800 via-green-600 to-purple-500 flex items-center justify-center">
          {/* Abstract background simulation */}
          <div className="absolute inset-0 opacity-60 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)' }}></div>
          
          {/* AI Agents Badge */}
          <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-4 h-4 rounded-sm bg-white/40 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            AI Agents
          </div>

          {/* Floating Prompt UI */}
          <div className="relative z-10 w-full max-w-xl mx-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-neutral-800 font-medium">
                <Sparkles className="w-5 h-5 text-neutral-400" />
                Generate a workout planner for beginners...
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                <span className="text-sm text-neutral-400 flex-1">Add Attachments</span>
                <button className="text-neutral-400 hover:text-neutral-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-center text-white/80 text-sm mt-4 font-medium">
              Don&apos;t want to wait? Try the early <span className="text-white font-semibold underline decoration-white/50 underline-offset-4">AI Beta</span> today.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-1">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full"></div>)}
            </div>
            Fagron
          </div>
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-current flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            Spotify
          </div>
          <div className="text-xl font-bold flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-4">
              <div className="w-1.5 h-2 bg-current rounded-sm"></div>
              <div className="w-1.5 h-3 bg-current rounded-sm"></div>
              <div className="w-1.5 h-4 bg-current rounded-sm"></div>
            </div>
            ripple
          </div>
          <div className="text-lg font-serif tracking-widest uppercase">
            Yves Rocher
          </div>
          <div className="text-2xl font-black italic tracking-tighter">
            F1
          </div>
          <div className="text-lg font-black tracking-widest uppercase">
            Rocnation
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32">
        <div className="inline-block bg-neutral-100 text-neutral-500 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded mb-8">
          <span className="inline-block w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2 align-middle"></span>
          About Custom Kit
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight mb-16">
          Twinkle makes sure every call is acknowledged, <span className="text-neutral-400">even outside regular hours. By capturing customer details when no one</span> is available
        </h2>

        <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50 rounded-full p-2 pr-4">
          <div className="flex -space-x-3 pl-2">
            <Image src="https://picsum.photos/seed/user1/100/100" alt="User" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/user2/100/100" alt="User" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/user3/100/100" alt="User" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="text-sm font-medium text-left leading-tight">
            Get your AI Agent , Customise<br />
            <span className="text-neutral-500">in single click</span>
          </div>
          <button className="bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors ml-auto">
            Get Your Agent
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-gradient-to-br from-pink-300 via-purple-300 to-emerald-300 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.8) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-white text-6xl font-serif mb-6 opacity-80">&quot;</div>
          <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-16 max-w-4xl">
            Twinkle has made us more available to our customers. Now we have the scale to offer 24/7 support to customers across all of our markets.&quot;
          </h3>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Image src="https://picsum.photos/seed/wayne/120/120" alt="Wayne Grimshawe" width={64} height={64} className="w-16 h-16 rounded-xl object-cover" referrerPolicy="no-referrer" />
              <div className="text-white">
                <div className="font-semibold text-lg flex items-center gap-2">
                  Wayne Grimshawe
                  <Sparkles className="w-4 h-4 opacity-70" />
                </div>
                <div className="text-sm opacity-80 max-w-[200px] leading-tight mt-1">
                  Group Director of ecommerce @ Nietzsche
                </div>
              </div>
            </div>
            
            <button className="bg-white/90 backdrop-blur text-neutral-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors">
              View case study
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-40 grayscale mb-24 scale-75 origin-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-1">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-current rounded-full"></div>)}
            </div>
            Fagron
          </div>
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-current flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            Spotify
          </div>
          <div className="text-xl font-bold flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-4">
              <div className="w-1.5 h-2 bg-current rounded-sm"></div>
              <div className="w-1.5 h-3 bg-current rounded-sm"></div>
              <div className="w-1.5 h-4 bg-current rounded-sm"></div>
            </div>
            ripple
          </div>
          <div className="text-lg font-serif tracking-widest uppercase">
            Yves Rocher
          </div>
          <div className="text-2xl font-black italic tracking-tighter">
            F1
          </div>
          <div className="text-lg font-black tracking-widest uppercase">
            Rocnation
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Bring Existing Customers</h2>
          <p className="text-neutral-500 font-medium max-w-lg mx-auto">
            Designed to capture every customer moment—day or night—without needing someone constantly online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <div className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">Up-to</div>
            <div className="text-5xl font-medium tracking-tight mb-2">5x</div>
            <div className="text-sm text-neutral-500 font-medium">faster prompt creation</div>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <div className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">Up-to</div>
            <div className="text-5xl font-medium tracking-tight mb-2">96%</div>
            <div className="text-sm text-neutral-500 font-medium">reduction in wasting time on net</div>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <div className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">Up-to</div>
            <div className="text-5xl font-medium tracking-tight mb-2">2.5x</div>
            <div className="text-sm text-neutral-500 font-medium">higher campaign performance</div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-6">
              Business Reporting
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12 max-w-md">
              We help people create and build Using AI
            </h2>

            <div className="space-y-6">
              <div className="text-neutral-400 font-medium text-lg">Aim for excellence</div>
              
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <h4 className="font-semibold text-neutral-900 mb-2">Set Budget using AI</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Spending will be allocated for implementing and maintaining AI tools within the workflow.
                </p>
              </div>
              
              <div className="text-neutral-400 font-medium text-lg">Think outside the box</div>
            </div>

            <button className="mt-12 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
              Get Started — For Free!
            </button>
          </div>

          <div className="relative">
            {/* Abstract background behind phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-cyan-200 to-yellow-200 rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-80"></div>
            
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[2.5rem] border-[8px] border-neutral-100 shadow-2xl overflow-hidden flex flex-col">
              {/* Phone Header */}
              <div className="px-6 pt-12 pb-4 flex justify-between items-center">
                <div className="w-8 h-8 rounded-full bg-neutral-100"></div>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-neutral-100"></div>
                  <div className="w-4 h-4 rounded-full bg-neutral-100"></div>
                </div>
              </div>
              
              {/* Phone Content */}
              <div className="px-6 flex-1">
                <div className="text-xs text-neutral-400 font-medium mb-1">Insights</div>
                <div className="text-2xl font-semibold mb-6">Overview</div>
                
                <div className="bg-neutral-50 rounded-xl p-4 mb-4">
                  <div className="text-[10px] text-neutral-500 mb-1">90% Left Of $5.66B Target</div>
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="w-[10%] h-full bg-emerald-400"></div>
                  </div>
                </div>

                <div className="bg-white border border-neutral-100 shadow-sm rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="font-medium text-sm">Zia AI Agent</div>
                  </div>
                  <div className="text-3xl font-semibold mb-4">$20,300<span className="text-lg text-neutral-400">.00</span></div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-medium">Details</div>
                    <div className="px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-medium">Freeze</div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-semibold">Accounts</div>
                  <div className="text-[10px] text-neutral-400">See all</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-50 rounded-xl p-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 mb-2"></div>
                    <div className="text-xs font-medium">AD Spend</div>
                    <div className="text-[10px] text-neutral-400">$8,200.00</div>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 mb-2"></div>
                    <div className="text-xs font-medium">T&E</div>
                    <div className="text-[10px] text-neutral-400">$4,072.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Number Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Don&apos;t take our word for it.</h2>
        
        <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-4">
          9677 Visitors Engaged
        </div>
        
        <div className="border-t border-neutral-200 pt-8 pb-12">
          <div className="text-[12vw] leading-none font-medium tracking-tighter text-neutral-900">
            26,900,7891
          </div>
        </div>
      </section>

      {/* Footer (Minimal) */}
      <footer className="max-w-7xl mx-auto px-6 py-12 flex justify-between items-center text-sm text-neutral-500 font-medium">
        <div>© 2026 Twinkle.ai</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
