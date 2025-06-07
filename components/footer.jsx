import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaBehance } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-black px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Email */}
        <div className="flex-1">
          <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            DashFlow
          </div>
          <div className="text-sm text-gray-700 mt-2">
            By Prabhmeet Singh<br />
            2025
          </div>
        </div>
        {/* Center: Office hours */}
        <div className="flex-1 flex flex-col items-start md:items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Go to Top
          </a>
          <div className="text-sm text-gray-700 mt-2">
            Office hours<br />
            Monday - Friday 11 AM - 2 PM
          </div>
        </div>
        {/* Right: Links & Social */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-2">
          <div className="mb-2">
            <a href="#" className="underline font-medium">Contact on : </a>
          </div>
          <div className="flex gap-4 text-2xl mb-2">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Gmail"><SiGmail /></a>
          </div>
        </div>
      </div>
      {/* Bottom: Copyright */}
      <div className="max-w-6xl mx-auto mt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
        <span>
          © 2025 <a href="#">DashFlow Inc. </a> | All rights reserved
        </span>
      </div>
    </footer>
  );
}