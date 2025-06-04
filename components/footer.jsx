import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-black px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Email */}
        <div className="flex-1">
          <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            contact@studio.com
          </div>
          <div className="text-sm text-gray-700 mt-2">
            Manhattan, New York<br />
            2023
          </div>
        </div>
        {/* Center: Office hours */}
        <div className="flex-1 flex flex-col items-start md:items-center">
          <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            (+48) 762 864 075
          </div>
          <div className="text-sm text-gray-700 mt-2">
            Office hours<br />
            Monday - Friday 11 AM - 2 PM
          </div>
        </div>
        {/* Right: Links & Social */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-2">
          <div className="mb-2">
            <span>Say hello </span>
            <a href="#" className="underline font-medium">Work with us</a>
          </div>
          <div className="flex gap-4 text-2xl mb-2">
            <a href="#" aria-label="Behance"><FaBehance /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
          <div className="text-sm text-gray-700">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
      {/* Bottom: Copyright */}
      <div className="max-w-6xl mx-auto mt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
        <span>
          © 2023 Template by <a href="#" className="underline">Produlis Studio</a> | Photos from pexels.com
        </span>
      </div>
    </footer>
  );
}