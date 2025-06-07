"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="DashFlow Logo"
            width={64}
            height={64}
            className="rounded-md"
            priority
          />
        </div>
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <span className="cursor-pointer hover:text-green-400 transition">
            Features
          </span>
          <span className="cursor-pointer hover:text-green-400 transition">
            Solutions
          </span>
          <span className="cursor-pointer hover:text-green-400 transition">
            Resources
          </span>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <button className="bg-black/70 border border-white/10 text-white px-5 py-2 rounded-lg font-medium hover:bg-black/90 transition">
            Log In
          </button>
          <button className="bg-black/70 border border-white/10 text-white px-5 py-2 rounded-lg font-medium hover:bg-black/90 transition">
            Contact
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold transition hover:bg-gray-100">
            Sign Up
          </button>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="32" height="32" fill="none">
            <rect width="32" height="32" rx="8" fill="#222" />
            <path
              d="M10 16h12M10 12h12M10 20h12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-8 text-white text-xl">
          <button
            className="absolute top-6 right-8 text-white text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/logo2.png"
              alt="DashFlow Logo"
              width={48}
              height={48}
              className="rounded-md mb-2"
              priority
            />
            <span className="font-bold text-3xl text-white">DashFlow</span>
          </div>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            Features
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            Pricing
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            Solutions
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            Resources
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            Blog
          </span>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold transition hover:bg-gray-100 mt-4">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
