import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQList from "@/components/Faqlist";
import React from "react";
import {
  ArrowRight,
  Download,
  Github,
  Twitter,
  Youtube,
  Sun,
  Moon,
  CheckCircle,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="w-full min-h-screen custom-gradient flex flex-col justify-between px-12 md:px-32 pt-32 pb-12">
        {/* Text Content */}
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl font-bold leading-tight text-white mb-6">
            Organize. Track. Deliver.
            <br />
            With <span className="text-orange-400">DashFlow</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Your all-in-one platform to manage tasks, teams, and timelines with
            ease and efficiency.
          </p>
          <button className="bg-[#ff6b4a] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#e85d3d] transition">
            Get Started
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="w-full mt-16 flex justify-center">
          <img
            src="/dash.png"
            alt="DashFlow Dashboard"
            className="max-w-5xl w-full rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* Next Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center py-24 px-4 bg-white">
        {/* Left: Main Text */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            We handle the
            <br />
            complexity of payroll.
            <br />
            So you can focus on
            <br />
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Clemta?
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl">
          We have helped{" "}
          <span className="font-semibold">+2,750 entrepreneurs</span> start and
          maintain their US businesses, no matter where they are.
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                {/* Headset icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#e6f0ff" />
                  <path
                    d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 7a5 5 0 0 0-5 5v2"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 7a5 5 0 0 1 5 5v2"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">24/7 Expert Support</div>
            <div className="text-gray-500 text-sm">
              Our professional team will always be one email away to provide
              best assistance, ensuring your long-term growth.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto">
                {/* Company icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#111" />
                  <circle cx="12" cy="12" r="4" fill="#fff" />
                </svg>
              </div>
              <div className="bg-white rounded-lg shadow px-4 py-2 mt-4 flex flex-col items-center">
                <span className="font-semibold text-sm text-black">
                  0129labs Inc.
                </span>
                <span className="text-xs text-gray-400">
                  1234 State St, Los Angeles
                </span>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-green-50 text-green-600 text-xs font-medium rounded-full px-3 py-1 shadow">
                  &#9679; You company rise %65
                </span>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">Efficient</div>
            <div className="text-gray-500 text-sm">
              Focus on growing your business. We manage all complex paperwork
              accurately, promptly, and cost-effectively for you.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col items-center p-8 text-center">
            <div className="mb-6 relative w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                {/* Lock icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="10"
                    rx="3"
                    fill="#e6f0ff"
                  />
                  <path
                    d="M8 10V8a4 4 0 1 1 8 0v2"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="15" r="1.5" fill="#2563eb" />
                </svg>
              </div>
              <button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-blue-200 text-blue-600 text-xs font-semibold rounded-full px-3 py-1 shadow hover:bg-blue-50 transition">
                Unlock your growth
              </button>
            </div>
            <div className="font-bold text-lg mb-2">Scalable</div>
            <div className="text-gray-500 text-sm">
              Unlock boundless growth for your business without high initial
              costs! Our solutions scale with your needs, adapting as you
              expand.
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl text-black font-bold">
              Frequently asked
              <br />
              questions
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
              To help you make informed decisions, we’ve compiled answers to
              some of the most commonly asked questions.
            </p>
          </div>
          {/* Right: FAQ List */}
          <FAQList />
        </div>
      </section>

      <section className="w-full bg-white py-16 flex flex-col items-center relative overflow-x-hidden">
        {/* Floating avatars */}
        <span className="absolute left-6 top-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
          <span className="bg-black text-white border border-gray-200 rounded px-2 py-0.5 text-xs font-medium shadow">
            Kira
          </span>
        </span>
        <span className="absolute left-6 bottom-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
          <span className="bg-black text-white border border-gray-200 rounded px-2 py-0.5 text-xs font-medium shadow">
            Ali
          </span>
        </span>
        <span className="absolute right-6 top-6 flex items-center gap-2">
          <span className="bg-black text-white border border-gray-200 rounded px-2 py-0.5 text-xs font-medium shadow">
            Mira
          </span>
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
        </span>
        <span className="absolute right-6 bottom-6 flex items-center gap-2">
          <span className="bg-black text-white border border-gray-200 rounded px-2 py-0.5 text-xs font-medium shadow">
            Dev Team
          </span>
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
        </span>

        {/* Headline & Subtext */}
        <h2 className="text-xl md:text-3xl font-bold text-center mb-2 mt-8 text-black">
          Manage Projects. Empower Teams.
        </h2>
        <p className="text-gray-500 text-center mb-6 max-w-xl text-base">
          DashFlow helps you ship faster, stay organized, and collaborate
          smarter — from startups to scale-ups.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/onboarding">
            <button className="bg-black text-white px-6 py-2.5 rounded-lg font-medium text-base shadow hover:bg-gray-900 transition">
              Get Started Free
            </button>
          </a>
          <a href="mailto:contact@dashflow.dev">
            <button className="bg-white border border-gray-200 text-black px-6 py-2.5 rounded-lg font-medium text-base shadow hover:bg-gray-100 transition">
              Book a Demo
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
