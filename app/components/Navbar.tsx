"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/app/data/site-config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-2xl font-bold text-charcoal font-serif">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-orange-700 transition font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-orange-700 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg hover:shadow-lg transition">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
