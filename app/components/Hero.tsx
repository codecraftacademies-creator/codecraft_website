import Link from "next/link";
import { heroSection } from "@/app/data/site-config";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          {/* Elegant Badge */}
          <div className="inline-block mb-8 px-6 py-3 bg-orange-100/60 border border-orange-200 text-orange-800 rounded-full text-sm font-semibold hover:bg-orange-100/80 transition">
            ✨ Excellence Recognized
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-charcoal leading-tight font-serif">
            {heroSection.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {heroSection.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              href={heroSection.ctaLink}
              className="px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105 font-semibold text-lg"
            >
              {heroSection.ctaText}
            </Link>
            <button className="px-10 py-4 border-2 border-gray-400 text-charcoal rounded-lg hover:border-gray-600 hover:bg-gray-100/50 transition font-semibold">
              Learn More
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10K+", label: "Certified Students", icon: "👥" },
              { value: "50+", label: "Certifications", icon: "🏆" },
              { value: "100+", label: "Partner Companies", icon: "🤝" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition"
              >
                <p className="text-5xl mb-3">{stat.icon}</p>
                <p className="text-4xl font-bold text-terracotta mb-2 font-serif">
                  {stat.value}
                </p>
                <p className="text-gray-700 font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
