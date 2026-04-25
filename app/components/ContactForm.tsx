"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/app/data/site-config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-6xl font-bold mb-8 text-white leading-tight font-serif">Get In Touch</h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed font-medium">
              Have questions about our certifications? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-lg bg-white/10 border border-gray-700 hover:bg-white/15 hover:border-gray-600 transition">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Email</h4>
                  <p className="text-gray-200 font-medium">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-lg bg-white/10 border border-gray-700 hover:bg-white/15 hover:border-gray-600 transition">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Phone</h4>
                  <p className="text-white font-semibold">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-lg bg-white/10 border border-gray-700 hover:bg-white/15 hover:border-gray-600 transition">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Address</h4>
                  <p className="text-white font-semibold">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 bg-green-600/30 rounded-lg text-white font-semibold border border-green-500/50">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg hover:shadow-lg transition font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
