"use client";

import React, { useState } from "react";
import {
  Code,
  Layers,
  Cpu,
  Smartphone,
  Cloud,
  Terminal,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "mobile" | "devops">("all");

  const technologies = [
    {
      name: "Next.js",
      category: "frontend",
      description: "React framework for production grade SSR, SSG & Edge rendering.",
      badge: "Frontend",
    },
    {
      name: "TypeScript",
      category: "frontend",
      description: "Strict compile-time type safety preventing runtime crashes.",
      badge: "Core Language",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      description: "Utility-first CSS for responsive, pixel-perfect modern styling.",
      badge: "Styling",
    },
    {
      name: "React Native",
      category: "mobile",
      description: "Cross-platform mobile development for iOS & Android.",
      badge: "Mobile",
    },
    {
      name: "Flutter",
      category: "mobile",
      description: "High-performance compiled UI toolkit for native mobile apps.",
      badge: "Mobile",
    },
    {
      name: "Node.js",
      category: "backend",
      description: "Event-driven, asynchronous JavaScript runtime for high-throughput APIs.",
      badge: "Backend",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      description: "Robust, ACID-compliant relational database for mission-critical data.",
      badge: "Database",
    },
    {
      name: "Prisma ORM",
      category: "backend",
      description: "Next-generation type-safe ORM for clean database queries.",
      badge: "Database",
    },
    {
      name: "Docker",
      category: "devops",
      description: "Containerization guaranteeing consistent execution across environments.",
      badge: "DevOps",
    },
    {
      name: "Cloudflare",
      category: "devops",
      description: "Global CDN, DDoS mitigation, and edge security caching.",
      badge: "Cloud Edge",
    },
    {
      name: "AWS & GCP",
      category: "devops",
      description: "Scalable cloud infrastructure hosting databases and containerized services.",
      badge: "Cloud Infra",
    },
    {
      name: "GitHub Actions",
      category: "devops",
      description: "Automated continuous integration and zero-downtime deployment pipelines.",
      badge: "CI/CD",
    },
  ];

  const filteredTech = technologies.filter((t) => {
    if (activeTab === "all") return true;
    return t.category === activeTab;
  });

  return (
    <section id="tech-stack" className="py-20 lg:py-24 bg-white border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technology Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            Built with Industry-Leading <br />
            <span className="text-[#C2671A]">Modern Frameworks</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            We build with battle-tested open-source frameworks and enterprise cloud platforms designed for longevity, security, and effortless scaling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Technologies" },
            { id: "frontend", label: "Frontend & UI" },
            { id: "backend", label: "Backend & Databases" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "devops", label: "Cloud & CI/CD" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#2A1E14] text-amber-400 shadow-sm"
                  : "bg-[#FAF7F2] text-[#5C4F42] border border-[#E8DFD3] hover:border-[#C2671A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((tech, idx) => (
            <div
              key={tech.name}
              className="spotlight-card p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-[#1A1612] group-hover:text-[#C2671A] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#C2671A] border border-[#E8DFD3]">
                    {tech.badge}
                  </span>
                </div>
                <p className="text-xs text-[#5C4F42] leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DFD3] flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
