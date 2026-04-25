import { aboutSection, team } from "@/app/data/site-config";

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main About */}
        <div className="mb-20">
          <h2 className="text-6xl font-bold mb-8 text-charcoal font-serif">
            {aboutSection.title}
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl font-light">
            {aboutSection.description}
          </p>
          <div className="border-l-4 border-orange-700 bg-orange-50 rounded-r-lg p-10">
            <p className="text-2xl text-charcoal italic font-light leading-relaxed">
              &quot;{aboutSection.mission}&quot;
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-5xl font-bold mb-16 text-charcoal font-serif">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutSection.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition h-full"
              >
                <h4 className="text-xl font-bold text-orange-700 mb-4 font-serif">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-5xl font-bold mb-16 text-charcoal font-serif">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:border-gray-300 hover:shadow-lg transition"
              >
                <div className="text-8xl mb-6 flex justify-center group-hover:scale-110 transition transform">
                  {member.image}
                </div>
                <h4 className="text-2xl font-bold text-charcoal mb-2 font-serif">{member.name}</h4>
                <p className="text-orange-700 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-700 leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
