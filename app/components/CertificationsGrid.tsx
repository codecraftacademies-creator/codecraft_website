import { certifications } from "@/app/data/site-config";

export default function CertificationsGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 text-charcoal font-serif">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Explore our range of certifications designed to recognize excellence across multiple disciplines
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer border border-gray-200 h-full"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition transform duration-300">
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-orange-700 mb-4">
                {cert.category}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-light">{cert.description}</p>

              {/* CTA */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition transform duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
