"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  FileCheck2,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Inquiry & Consultation",
      subtitle: "Quick discovery via WhatsApp, call, or Kathmandu meeting to understand your goals, target customers, and required features.",
      duration: "1 – 2 Days",
      deliverable: "Project Brief & Roadmap",
    },
    {
      step: "02",
      icon: FileCheck2,
      title: "Scope & Architecture",
      subtitle: "Clear proposal with itemized milestones, wireframes, and fixed timeline so you know exactly what is being built without surprises.",
      duration: "2 – 3 Days",
      deliverable: "Scope Agreement & Wireframes",
    },
    {
      step: "03",
      icon: Code2,
      title: "Design & Development",
      subtitle: "Writing clean, mobile-first code with modern frameworks. We share private staging preview links so you watch the build progress live.",
      duration: "Sprint Cycles",
      deliverable: "Live Staging Preview Link",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Review & Polish",
      subtitle: "Hands-on walkthrough with your team. We fine-tune design, verify responsive viewports, and audit loading speeds on all devices.",
      duration: "2 – 4 Days",
      deliverable: "Final Approval & Testing",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Live Launch & Support",
      subtitle: "Connecting your custom domain (.com.np / .com), SSL security, Google Maps profile, plus continuous maintenance and backups.",
      duration: "Live & Ongoing",
      deliverable: "Live Website & Maintenance",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Structured Client Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            How We Work With You: <br />
            <span className="text-[#C2671A]">From Inquiry to Live Launch</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            A simple, predictable 5-step journey designed to keep you informed at every milestone without confusion or delays.
          </p>
        </div>

        {/* Simplified 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl cursor-pointer transition-all flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white border-[#C2671A] shadow-lg ring-2 ring-[#C2671A]/20 scale-[1.02]"
                    : "bg-white/80 border-[#E8DFD3] hover:border-[#C2671A]/40 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-mono font-black ${
                        isSelected ? "text-[#C2671A]" : "text-[#9E8E7D]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#C2671A] text-white shadow-md shadow-amber-900/20"
                          : "bg-amber-500/15 text-[#C2671A]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1A1612] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5C4F42] leading-relaxed mb-4">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFD3]/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A6B5D]">
                    <Clock className="w-3 h-3 text-[#C2671A]" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="text-[10.5px] font-bold text-[#A35210] bg-amber-500/10 px-2 py-0.5 rounded-md inline-block">
                    ✓ {item.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Guarantee Badges */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8DFD3] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#1A1612] block">Clean & Modular Code</span>
            <span className="text-[11px] text-[#7A6B5D]">Zero Bloat · Mobile-First</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#1A1612] block">WhatsApp & Phone Updates</span>
            <span className="text-[11px] text-[#7A6B5D]">Direct Founder Contact</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-700 block">SSL & Daily Backups</span>
            <span className="text-[11px] text-[#7A6B5D]">Bank-Grade Security</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#C2671A] block">Always Open for Inquiry</span>
            <span className="text-[11px] text-[#7A6B5D]">Kathmandu Local Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
