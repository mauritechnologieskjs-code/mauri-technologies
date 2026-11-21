"use client";

import React, { useState } from "react";
import {
  Globe,
  Database,
  Smartphone,
  Palette,
  Server,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "software" | "infra">("all");

  const services = [
    {
      id: "business-websites",
      category: "web",
      icon: Globe,
      title: "Business Websites & Landing Pages",
      description:
        "High-performance, professional websites engineered for speed, clean aesthetics, and conversion. Ideal for clinics, restaurants, retail businesses, and corporate brands.",
      deliverables: [
        "100% mobile-responsive layout across all viewports",
        "Sub-second loading times & Core Web Vitals optimization",
        "Contact forms with direct WhatsApp & email alerts",
        "Interactive Google Maps and location embed",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      id: "management-systems",
      category: "software",
      icon: Database,
      title: "Business Management Systems (POS & Inventory)",
      description:
        "Custom web software tailored to your specific daily operations. Track real-time stock, process customer sales, manage bookings, and automate business reporting.",
      deliverables: [
        "Point of Sale (POS) and automated billing",
        "Real-time inventory & stock alert dashboards",
        "Customer management & appointment booking",
        "Multi-user permission levels and financial summaries",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    },
    {
      id: "mobile-apps",
      category: "software",
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      description:
        "High-quality iOS and Android mobile applications built from a unified codebase. Smooth 60fps animations, intuitive navigation, and reliable offline capabilities.",
      deliverables: [
        "Native-feeling iOS and Android builds",
        "Push notification workflows & user accounts",
        "Offline-first data caching and synchronization",
        "App Store & Google Play publishing assistance",
      ],
      techStack: ["Flutter", "React Native", "Firebase", "REST APIs"],
    },
    {
      id: "ui-ux-design",
      category: "web",
      icon: Palette,
      title: "UI/UX & Brand Identity Systems",
      description:
        "User-centered design that turns visitors into paying customers. We produce complete design token systems, wireframes, and clickable interactive Figma prototypes.",
      deliverables: [
        "High-fidelity clickable Figma prototypes",
        "Comprehensive design system & typography tokens",
        "User journey mapping & usability testing",
        "Logo refinement & brand asset packages",
      ],
      techStack: ["Figma", "Design Systems", "Wireframing", "UX Research"],
    },
    {
      id: "hosting-infrastructure",
      category: "infra",
      icon: Server,
      title: "Secure Hosting & Domain Management",
      description:
        "Stress-free infrastructure setup. We handle domain registration, cloud deployment, free SSL certificates, automated daily backups, and continuous monitoring.",
      deliverables: [
        "Domain registration (.com.np / .com) and DNS setup",
        "High-availability cloud hosting with 99.9% uptime",
        "Free automatic SSL certificates & HTTPS enforcement",
        "Daily automated backups & security patching",
      ],
      techStack: ["Cloudflare", "AWS", "Docker", "Linux Servers"],
    },
    {
      id: "seo-marketing",
      category: "infra",
      icon: Search,
      title: "Technical SEO & Google Business Profile",
      description:
        "Ensure customers find your business first on Google. We optimize your search engine rankings, configure structured schema markup, and setup Google Business Profiles.",
      deliverables: [
        "Google Business Profile & Google Maps verification",
        "Local search engine optimization for Kathmandu & Nepal",
        "Structured schema markup for rich search results",
        "Google Search Console & Analytics integration",
      ],
      techStack: ["Technical SEO", "Google Search Console", "GA4", "Schema.org"],
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core IT Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            Comprehensive Digital Services for <br />
            <span className="text-[#C2671A]">Growing Modern Businesses</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            From high-conversion websites to custom operational software, we engineer solutions designed to give your business an unfair advantage.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Offerings" },
            { id: "web", label: "Websites & UI/UX" },
            { id: "software", label: "Custom Software & Mobile" },
            { id: "infra", label: "Hosting, Cloud & SEO" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === tab.id
                  ? "bg-[#2A1E14] text-amber-400 shadow-sm"
                  : "bg-white text-[#5C4F42] border border-[#E8DFD3] hover:border-[#C2671A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="spotlight-card p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-black text-[#1A1612] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5C4F42] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#7A6B5D] block">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#3D3126] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F4EDE2] text-[#4A3E31]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E8DFD3]">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#C2671A] hover:text-[#A35210] py-1 transition-colors group"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner for Custom Scoping */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#2A1E14] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Custom Software Consulting
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-1 text-white tracking-tight">
              Have a specialized business workflow or requirement?
            </h3>
            <p className="text-sm text-stone-300 mt-2 leading-relaxed">
              We provide free 30-minute discovery consultations to understand your operational roadblocks and recommend the optimal technology stack.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal("Custom Software Consulting")}
            className="shrink-0 px-7 py-4 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Free Consultation →
          </button>
        </div>

      </div>
    </section>
  );
}
