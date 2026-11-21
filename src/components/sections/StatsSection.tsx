import React from "react";
import { Layers, ShieldCheck, Zap, Headphones } from "lucide-react";

export function StatsSection() {
  const highlights = [
    {
      icon: Zap,
      value: "< 1.0s",
      label: "Sub-Second Page Speeds",
      description: "Optimized for Core Web Vitals and lightning-fast loading across mobile and desktop.",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Secure & Production-Ready",
      description: "Built with automated SSL, HTTPS compliance, and robust cloud infrastructure.",
    },
    {
      icon: Layers,
      value: "Modern",
      label: "Clean Code Architecture",
      description: "Crafted using modular frameworks: Next.js, TypeScript, React Native, and PostgreSQL.",
    },
    {
      icon: Headphones,
      value: "Direct",
      label: "Continuous Support",
      description: "Direct developer communication with ongoing maintenance and technical consulting.",
    },
  ];

  return (
    <section className="py-12 border-y border-[#E8DFD3] bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] transition-all duration-300 hover:shadow-md hover:border-amber-500/50 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black text-[#1A1612] mb-1 tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#3D3126] mb-1.5">
                  {item.label}
                </div>
                <p className="text-xs text-[#6B5E51] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
