import Link from "next/link";
import { siteConfig, navLinks } from "@/app/data/site-config";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-2xl font-bold font-serif">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Award-winning certifications for outstanding students worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-orange-500 transition font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-orange-500 transition font-semibold"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-orange-500 transition font-semibold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-orange-500 transition font-semibold"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <p className="text-white mb-3 hover:text-orange-500 transition cursor-pointer font-semibold">
              {siteConfig.email}
            </p>
            <p className="text-white mb-3 hover:text-orange-500 transition cursor-pointer font-semibold">
              {siteConfig.phone}
            </p>
            <p className="text-gray-200 text-sm leading-relaxed font-medium">{siteConfig.address}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white font-semibold">
              &copy; 2024 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a
                href={siteConfig.socialLinks.twitter}
                className="text-white hover:text-orange-500 transition font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                className="text-white hover:text-orange-500 transition font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                className="text-white hover:text-orange-500 transition font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
