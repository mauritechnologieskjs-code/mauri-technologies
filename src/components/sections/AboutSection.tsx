import React from "react";
import { CheckCircle, Target, Users, Shield, ArrowRight } from "lucide-react";

export function AboutSection() {
  const targetSectors = [
    "Restaurants & Cafes",
    "Pharmacies & Healthcare",
    "Hotels & Hospitality",
    "Retail & eCommerce",
    "Fitness & Wellness",
    "Education & Tuition Hubs",
    "Corporate & Logistics",
    "B2B Service Providers",
  ];

  return (
    <section id="about" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>About Mauri Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-5">
            Empowering Modern Businesses with{" "}
            <span className="text-[#C2671A]">Reliable Digital Solutions</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F42] leading-relaxed">
            Headquartered in Kathmandu, <strong>Mauri Technologies</strong> is an IT engineering and digital consulting company dedicated to helping small, medium, and growing enterprises establish a commanding digital presence. We take inspiration from <em>“Mauri”</em> (the honeybee)—symbolizing precision, tireless teamwork, and structured architecture.
          </p>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="spotlight-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center mb-6 font-black text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-[#1A1612] mb-3">
              Tailored Engineering
            </h3>
            <p className="text-sm text-[#5C4F42] leading-relaxed mb-4">
              We reject clunky, generic templates. Every website and software system is engineered with clean code, responsive layouts, and modern typography tailored to your business identity.
            </p>
            <ul className="text-xs space-y-2 text-[#3D3126] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mobile-first responsive architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero template bloat, high performance</span>
              </li>
            </ul>
          </div>

          <div className="spotlight-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center mb-6 font-black text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-[#1A1612] mb-3">
              Turn-Key Execution
            </h3>
            <p className="text-sm text-[#5C4F42] leading-relaxed mb-4">
              From securing your custom `.com.np` or `.com` domain to configuring high-speed cloud hosting, SSL certificates, and Google Maps integration, we manage the entire lifecycle.
            </p>
            <ul className="text-xs space-y-2 text-[#3D3126] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hosting, domain & email setup included</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Google Business & Maps integration</span>
              </li>
            </ul>
          </div>

          <div className="spotlight-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center mb-6 font-black text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-[#1A1612] mb-3">
              Long-Term Partnership
            </h3>
            <p className="text-sm text-[#5C4F42] leading-relaxed mb-4">
              Technology requires ongoing care. Our Kathmandu engineering team provides proactive maintenance, regular software updates, and rapid technical support whenever you need it.
            </p>
            <ul className="text-xs space-y-2 text-[#3D3126] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Continuous security patches & backups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct phone & WhatsApp support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sectors We Serve Matrix */}
        <div className="p-8 rounded-3xl bg-white border border-[#E8DFD3] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E8DFD3]">
            <div>
              <h4 className="text-lg font-bold text-[#1A1612]">
                Industries & Businesses We Serve
              </h4>
              <p className="text-xs text-[#6B5E51]">
                Customized digital solutions built for local Nepalese enterprises and growing digital businesses.
              </p>
            </div>
            <span className="text-xs font-bold text-[#C2671A] shrink-0">
              Customized Solutions for Every Sector →
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {targetSectors.map((sector, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] text-xs font-semibold text-[#2A1E14] text-center transition-colors hover:border-[#C2671A]"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
