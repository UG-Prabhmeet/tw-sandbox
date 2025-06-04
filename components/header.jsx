"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-black/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        <div className="flex items-center gap-2">
          <span className="bg-green-500 rounded-md w-8 h-8 flex items-center justify-center font-bold text-black text-xl shadow-green-400/30 shadow">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="5" fill="#22d47b"/><path d="M6 11.5L10 15.5L16 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="font-bold text-2xl tracking-tight text-green-900 dark:text-green-200">DashFlow</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-800 dark:text-green-100 font-medium">
          <span className="cursor-pointer hover:text-green-500 transition">Features</span>
          <span className="cursor-pointer hover:text-green-500 transition">Pricing</span>
          <span className="cursor-pointer hover:text-green-500 transition">Solutions</span>
          <span className="cursor-pointer hover:text-green-500 transition">Resources</span>
          <span className="cursor-pointer hover:text-green-500 transition">Blog</span>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <button className="text-green-900 dark:text-green-100 font-medium hover:text-green-500 transition">Log In</button>
          <button className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-full font-semibold transition shadow-green-500/30 shadow">
            Start Free Trial
          </button>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-green-900 dark:text-green-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="32" height="32" fill="none"><rect width="32" height="32" rx="8" fill="#1a2d1a"/><path d="M10 16h12M10 12h12M10 20h12" stroke="#22d47b" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center gap-8 text-green-100 text-xl">
          <button
            className="absolute top-6 right-8 text-green-400 text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <span className="font-bold text-3xl text-green-400 mb-4">DashFlow</span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>Features</span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>Pricing</span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>Solutions</span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>Resources</span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>Blog</span>
          <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-semibold transition shadow-green-500/30 shadow mt-4">
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
}