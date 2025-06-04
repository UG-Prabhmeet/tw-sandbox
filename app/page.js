import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight, Download, Github, Twitter, Youtube, Sun, Moon, CheckCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-start overflow-x-hidden">
      {/* Navbar */}
      {/* <nav className="w-full flex items-center justify-between px-8 py-6">
        <span className="font-bold text-2xl tracking-tight">check</span>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <span className="cursor-pointer">Partners</span>
          <span className="cursor-pointer">Platform <span className="align-super text-xs">▼</span></span>
          <span className="cursor-pointer">Resources <span className="align-super text-xs">▼</span></span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-black font-medium">Login</button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition">Get in touch</button>
        </div>
      </nav> */}
      <Header />
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-black mb-6 leading-tight">
          Elevate your platform<br className="hidden md:block" /> with payroll.
        </h1>
        <p className="text-lg text-gray-500 text-center mb-8 max-w-2xl">
          Effortless payroll for your customers. New revenue streams for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition text-lg">
            Discover Payroll <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition text-lg">
            Talk to our team <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Browser Mockup (icon-only, no images) */}
        <div className="w-full max-w-4xl rounded-2xl shadow-xl border border-gray-100 bg-gray-50 overflow-hidden">
          {/* Browser bar */}
          <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            </div>
            <span className="ml-4 text-gray-400 text-xs">fleet.hr</span>
          </div>
          {/* Mockup content */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-56 bg-white border-r border-gray-100 py-6 px-4 flex flex-col gap-6">
              <div className="flex items-center gap-2 font-bold text-lg mb-4">
                <Download className="w-5 h-5" />
                Smart Dashboard
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5" />
                All People
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5" />
                Notifications
              </div>
            </div>
            {/* Main content */}
            <div className="flex-1 bg-white py-8 px-6">
              <div className="flex items-center gap-2 mb-6">
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <input
                  className="w-full border-none outline-none bg-gray-100 rounded px-3 py-2 text-gray-700"
                  placeholder="Search Employees"
                  disabled
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-gray-500 text-center">
                {/* Placeholder for main dashboard content */}
                <span className="text-lg">Dashboard content preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center py-24 px-4 bg-white">
        {/* Left: Main Text */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            We handle the<br />
            complexity of payroll.<br />
            So you can focus on<br />
            your business.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Just embed Check into your platform, then leave the rest to us.
          </p>
          <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline text-lg w-fit">
            Discover Payroll <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Faded Features List */}
        <div className="flex-1 hidden md:flex flex-col justify-center pl-16">
          <ul className="space-y-2 text-2xl font-medium select-none">
            <li className="text-gray-200">Fraud protection</li>
            <li className="text-gray-200">Tax notices</li>
            <li className="text-gray-200">Voids</li>
            <li className="text-gray-200">Tax filing</li>
            <li className="text-gray-300">Deductions</li>
            <li className="text-gray-300">Garnishments</li>
            <li className="text-gray-400">Money movement</li>
            <li className="text-gray-400">Tax calculation</li>
            <li className="text-gray-400">Real-time payments</li>
            <li className="text-gray-400">Custom pay rates</li>
            <li className="text-gray-400">Workers comp</li>
            <li className="text-gray-400">401k</li>
            <li className="text-gray-200">Health benefits</li>
          </ul>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Clemta?</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl">
          We have helped <span className="font-semibold">+2,750 entrepreneurs</span> start and maintain their US businesses, no matter where they are.
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                {/* Headset icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#e6f0ff"/>
                  <path d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 7a5 5 0 0 0-5 5v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 7a5 5 0 0 1 5 5v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">24/7 Expert Support</div>
            <div className="text-gray-500 text-sm">
              Our professional team will always be one email away to provide best assistance, ensuring your long-term growth.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto">
                {/* Company icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#111"/>
                  <circle cx="12" cy="12" r="4" fill="#fff"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg shadow px-4 py-2 mt-4 flex flex-col items-center">
                <span className="font-semibold text-sm text-black">0129labs Inc.</span>
                <span className="text-xs text-gray-400">1234 State St, Los Angeles</span>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-green-50 text-green-600 text-xs font-medium rounded-full px-3 py-1 shadow">
                  &#9679; You company rise %65
                </span>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">Efficient</div>
            <div className="text-gray-500 text-sm">
              Focus on growing your business. We manage all complex paperwork accurately, promptly, and cost-effectively for you.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6 relative w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                {/* Lock icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="10" width="16" height="10" rx="3" fill="#e6f0ff"/>
                  <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="15" r="1.5" fill="#2563eb"/>
                </svg>
              </div>
              <button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-blue-200 text-blue-600 text-xs font-semibold rounded-full px-3 py-1 shadow hover:bg-blue-50 transition">
                Unlock your growth
              </button>
            </div>
            <div className="font-bold text-lg mb-2">Scalable</div>
            <div className="text-gray-500 text-sm">
              Unlock boundless growth for your business without high initial costs! Our solutions scale with your needs, adapting as you expand.
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
    </div>
  );
}