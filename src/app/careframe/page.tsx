import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimations from '../../components/ScrollAnimations'

export const metadata = {
  title: 'CareFrame | Systems Behind Better Patient Experiences',
  description: 'CareFrame installs your entire growth engine: patient-facing tools, short-form content, and conversion-optimized funnels. Built for telehealth and modern healthcare practices.',
  robots: 'noindex, nofollow', // Keep this page hidden from search engines
}

export default function CareFrame() {
  return (
    <div className="bg-white">
      <ScrollAnimations />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            <div>
              <Link href="/careframe">
                <div className="font-display text-2xl font-bold text-black">
                  CareFrame
                  <span className="text-sm font-normal ml-2 text-gray-500">™</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#process" className="text-gray-700 hover:text-black transition-colors font-medium">
                Process
              </a>
              <a href="#results" className="text-gray-700 hover:text-black transition-colors font-medium">
                Results
              </a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-green-700 transition-colors duration-300 rounded-sm whitespace-nowrap">
                Apply for Access
              </a>
            </nav>
            
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <a href="#contact" className="bg-green-600 text-white px-4 py-2 text-sm font-semibold tracking-wide hover:bg-green-700 transition-colors duration-300 rounded-sm">
                Apply
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-green-200 rotate-12 opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-200 rotate-45 opacity-20"></div>
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-green-500/30 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-500/40 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center pt-20 pb-16">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 letter-tighter leading-tight text-gray-900">
              We Build the Systems Behind 
              <br />
              <span className="text-green-600 italic">Better Patient Experiences</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              CareFrame installs your entire growth engine:
              <br />
              → Patient-facing tools
              <br />
              → Short-form content  
              <br />
              → Conversion-optimized funnels
              <br />
              <span className="font-semibold">All built to attract, educate, and convert patients — at scale.</span>
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm font-medium mb-8 opacity-80 text-gray-600">
              Founding clients only — limited availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-semibold tracking-wide hover:bg-green-700 transition-all duration-300 hover-rise janus-shadow-xl rounded-sm"
              >
                Book a Discovery Call
              </a>
              <a
                href="#process"
                className="inline-block border-2 border-green-600 text-green-700 px-8 py-4 text-lg font-semibold hover:bg-green-50 transition-all duration-300 rounded-sm"
              >
                Get the CareFrame Launch Stack →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-8 bg-gray-400 mb-2 mx-auto"></div>
          <p className="text-xs uppercase tracking-widest text-gray-500">Scroll</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 border-2 border-green-300 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-lg rotate-45"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate fade-up mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Most telehealth and specialty practices don't need more ads.
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              They need a <span className="text-green-600 font-semibold">marketing and patient experience system</span> that helps patients say yes — with clarity, trust, and simplicity.
            </p>
          </div>
          
          <div className="scroll-animate fade-up delay-300 grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full -mr-10 -mt-10"></div>
              <h3 className="font-display text-2xl font-bold text-red-800 mb-6 relative z-10">Healthcare Marketing Problems:</h3>
              <ul className="space-y-4 text-lg text-red-700 relative z-10">
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  Generic healthcare messaging that doesn't convert
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  Low patient engagement and booking rates
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  Traffic that doesn't convert to patients
                </li>
                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  Patient-facing tools that feel disconnected from your brand
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-200 rounded-full -ml-8 -mb-8"></div>
              <h3 className="font-display text-2xl font-bold text-green-800 mb-6 relative z-10">What You Deserve:</h3>
              <p className="text-lg text-green-700 leading-relaxed mb-6 relative z-10">
                A complete marketing and patient experience system that works together.
              </p>
              <p className="text-xl font-semibold text-green-800 leading-relaxed relative z-10">
                Patients who already trust your expertise and are ready to book before they even call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="scroll-animate fade-up text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              See Our Healthcare Marketing System in Action
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Watch how we transform a telehealth practice into a patient-acquisition system using clarity-first messaging, patient-facing tools, and conversion-optimized funnels.
            </p>
          </div>
          
          <div className="scroll-animate scale-in delay-300">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                {/* Decorative elements in video placeholder */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-green-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-400 rounded-full opacity-40"></div>
                
                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                    <div className="w-0 h-0 border-l-[16px] lg:border-l-[20px] border-l-green-600 border-t-[10px] lg:border-t-[12px] border-t-transparent border-b-[10px] lg:border-b-[12px] border-b-transparent ml-1 group-hover:border-l-green-700 transition-colors"></div>
                  </div>
                  <p className="mt-4 text-gray-600 font-medium">Click to play demo</p>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                  3:42
                </div>
              </div>
              
              {/* Video info bar */}
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete Healthcare Marketing System Demo</h3>
                    <p className="text-sm text-gray-600">Patient acquisition + engagement tools for telehealth practices</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      2.4k views
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                      98% liked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-animate fade-up delay-500 text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to see your practice transformed?
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 font-semibold hover:bg-green-700 transition-colors rounded-sm"
            >
              Get Your Custom Demo
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section - The CareFrame Launch Stack */}
      <section id="process" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-80 h-80 border-2 border-green-300 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-green-200 to-blue-200 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="scroll-animate fade-up text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🔧 The CareFrame Launch Stack™
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We install your full growth engine — custom-tailored to your practice.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {[
              {
                number: "1",
                title: "Lead Magnet Tool",
                description: "A white-labeled symptom tracker or health risk calculator that builds trust and captures emails",
                color: "green",
                icon: "🎯"
              },
              {
                number: "2", 
                title: "Landing Page",
                description: "A conversion-optimized homepage that tells your story and gets bookings",
                color: "blue",
                icon: "🏥"
              },
              {
                number: "3",
                title: "UGC + AI Content", 
                description: "10–15 short-form videos that build credibility and spread your story",
                color: "purple",
                icon: "📱"
              },
              {
                number: "4",
                title: "Booking Funnel",
                description: "Integrated with your calendar or EMR for seamless onboarding", 
                color: "orange",
                icon: "📅"
              },
              {
                number: "5",
                title: "Performance Dashboard",
                description: "Simple reporting that shows exactly what's working and why",
                color: "teal",
                icon: "📊"
              }
            ].map((component, index) => (
              <div key={index} className={`scroll-animate fade-up delay-${(index + 1) * 100} bg-white rounded-xl p-6 janus-shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group`}>
                {/* Decorative background element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${component.color}-50 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-${component.color}-100 text-${component.color}-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 relative`}>
                    {component.number}
                  </div>
                  <div className="text-2xl mb-3">{component.icon}</div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {component.description}
                  </p>
                </div>
                
                {/* Connection line for flow */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="scroll-animate fade-up delay-600 text-center mt-16">
            <div className="bg-white rounded-xl p-8 lg:p-12 janus-shadow max-w-3xl mx-auto relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-green-100 rounded-full -ml-8 -mt-8"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-100 rounded-full -mr-6 -mb-6"></div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Everything works together.
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Everything is built for real patients, not vanity metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section id="results" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-1/4 w-72 h-72 border-2 border-green-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-36 h-36 bg-gradient-to-br from-green-200 to-blue-200 rounded-full"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-green-100 rounded-lg rotate-12"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="scroll-animate fade-up text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              📈 What You Can Expect
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "More inbound patient inquiries",
              "Higher booking rates", 
              "Better-quality patients",
              "A stronger brand in your specialty",
              "Insights from real-world usage data",
              "Optional long-term growth partnership"
            ].map((outcome, index) => (
              <div key={index} className={`scroll-animate fade-up delay-${(index + 1) * 100} bg-green-50 border border-green-200 rounded-xl p-6 text-center relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-100 rounded-full -ml-6 -mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                    ✓
                  </div>
                  <p className="text-lg font-semibold text-green-800">
                    {outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="scroll-animate fade-up delay-600 text-center mt-16">
            <div className="bg-gray-900 text-white rounded-xl p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative elements for the quote box */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-green-600 bg-opacity-20 rounded-full -ml-10 -mt-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full -mr-8 -mb-8"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
              
              <div className="relative z-10">
                <p className="text-2xl lg:text-3xl font-display font-bold leading-relaxed">
                  We don't just generate leads — we build systems that make you the <span className="text-green-400 italic">obvious choice</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-green-600 to-blue-600 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-80 h-80 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 border-2 border-green-200 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-green-200 rounded-lg rotate-45"></div>
          <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-200 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate fade-up">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We're currently onboarding our <span className="text-green-200 italic">founding clinics</span>.
            </h2>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              If you're a forward-thinking telehealth or specialty practice and you want to install the CareFrame system, we'd love to talk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:team@withcareframe.com?subject=Apply for Founding Client Access"
                className="bg-white text-green-600 px-10 py-5 text-xl font-bold hover:bg-gray-100 transition-all duration-300 rounded-sm hover-rise janus-shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Apply for Founding Client Access →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a
                href="#process"
                className="border-2 border-white text-white px-10 py-5 text-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300 rounded-sm relative overflow-hidden group"
              >
                <span className="relative z-10">See the Full Process →</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            
            <p className="text-sm opacity-75">
              Limited spots available for founding clients
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="font-display text-3xl font-bold mb-2">
                CareFrame™
              </div>
              <p className="text-gray-400 text-lg">
                Built for modern care.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8 mb-8 text-sm">
              <a href="https://twitter.com/RunTheStory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Twitter: @RunTheStory
              </a>
              <a href="mailto:team@withcareframe.com" className="text-gray-400 hover:text-white transition-colors">
                team@withcareframe.com
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2025 CareFrame. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}