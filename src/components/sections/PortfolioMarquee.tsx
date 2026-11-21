import React from "react";
import { Star, Building2, ExternalLink } from "lucide-react";

export function PortfolioMarquee() {
  const partnerSectors = [
    { name: "Kathmandu Health Clinic", sector: "Healthcare & Appointment Booking", city: "Kathmandu" },
    { name: "Himalayan Roast Cafe", sector: "Hospitality & Digital Menu", city: "Lalitpur" },
    { name: "Everest Trek & Tours", sector: "Tourism & Booking Engine", city: "Thamel" },
    { name: "Apex Retail Mart", sector: "Point of Sale & Inventory", city: "Pokhara" },
    { name: "Patan Heritage Hotel", sector: "Hotel Management & Reservation", city: "Patan" },
    { name: "Nepal Logistics Network", sector: "Commercial Fleet Dispatch", city: "Birgunj" },
    { name: "Shikshya Academy", sector: "Educational Institute Portal", city: "Kathmandu" },
    { name: "Chitwan Agro Hub", sector: "B2B Supply & Distribution", city: "Chitwan" },
  ];

  const featuredProjects = [
    {
      title: "Clinic Appointment & Patient Records System",
      category: "Healthcare Software",
      highlight: "Paperless Patient Queue & SMS Alerts",
      description:
        "Engineered an intuitive web-based patient management system for a busy Kathmandu clinic, featuring automated appointment reminders and doctor scheduling.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "SMS Gateway"],
    },
    {
      title: "Cafe & Restaurant QR Digital Menu & POS",
      category: "Hospitality & POS",
      highlight: "Sub-Second Menu Loading on Mobile",
      description:
        "Developed a mobile-optimized contactless QR menu and cloud kitchen order ticketing system that syncs directly with table orders in real time.",
      stack: ["React", "Node.js", "Tailwind CSS", "Prisma"],
    },
    {
      title: "Himalayan Travel & Tour Booking Platform",
      category: "eCommerce & Booking",
      highlight: "Global Payment & Inquiry Funnel",
      description:
        "Built an interactive travel website with itinerary builders, multi-currency inquiry routing, and technical SEO designed for international trek inquiries.",
      stack: ["Next.js", "Tailwind CSS", "SEO Schema", "Cloudflare"],
    },
  ];

  return (
    <section id="works" className="py-20 lg:py-24 bg-white border-y border-[#E8DFD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Demonstrated Capability</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            Tailored Digital Solutions for <br />
            <span className="text-[#C2671A]">Real Business Operations</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            Discover how our custom web development and software implementations help businesses streamline operations and engage more customers.
          </p>
        </div>

        {/* Animated Client Sector Marquee */}
        <div className="mb-14 relative overflow-hidden py-3">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee">
            {[...partnerSectors, ...partnerSectors].map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-[#C2671A] flex items-center justify-center font-bold text-xs">
                  {item.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1612]">
                    {item.name}
                  </h4>
                  <div className="text-[10px] text-[#7A6B5D] flex items-center gap-1.5">
                    <span>{item.sector}</span>
                    <span>•</span>
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Project Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {featuredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="spotlight-card p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-[#A35210]">
                    {proj.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">
                    {proj.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#1A1612] mb-2.5">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4F42] leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8DFD3]">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-[#4A3E31] border border-[#E8DFD3]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonial */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#E2D4C3]">
          <div className="flex items-center gap-1 text-amber-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <blockquote className="text-lg sm:text-xl font-medium text-[#1A1612] leading-relaxed mb-6">
            “Mauri Technologies delivered our clinic website and patient appointment portal right on schedule. It is clean, loads immediately on mobile phones, and our patients love booking online. Their team in Kathmandu is communicative and always available whenever we need adjustments.”
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#002266] text-white font-bold flex items-center justify-center text-sm">
              BS
            </div>
            <div>
              <div className="text-sm font-bold text-[#1A1612]">
                Dr. Bipin Sharma
              </div>
              <div className="text-xs text-[#7A6B5D]">
                Managing Director · Kathmandu Care Clinic
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
