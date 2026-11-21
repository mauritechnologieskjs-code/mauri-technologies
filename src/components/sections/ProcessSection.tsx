"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  FileText,
  Code2,
  CheckCircle,
  Rocket,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Initial Consultation & Discovery",
      subtitle: "Understanding your exact business model, target clientele, and digital goals.",
      duration: "1 - 2 Days",
      checklist: [
        "In-depth discussion on business objectives & pain points",
        "Analysis of local & global competitor websites",
        "Feature prioritization (e.g. WhatsApp booking, POS sync, contact forms)",
        "Clear recommendation on optimal tech stack & hosting",
      ],
      output: "Discovery Brief & Feature Roadmap",
    },
    {
      step: "02",
      icon: FileText,
      title: "Architecture & Scope Agreement",
      subtitle: "Locking down transparent deliverables, timelines, and technical blueprints.",
      duration: "3 - 5 Days",
      checklist: [
        "Interactive wireframes and page structure diagrams",
        "Formal proposal with itemized milestones and timeline",
        "Clear project contract and mutual agreement",
        "Domain reservation and server infrastructure initialization",
      ],
      output: "Formal Proposal & Design Wireframe",
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development Sprints",
      subtitle: "Writing clean, mobile-first code with regular milestone updates.",
      duration: "Sprint Cycles",
      checklist: [
        "Mobile-first responsive frontend development (Next.js / Tailwind)",
        "Database schema modeling and custom backend API integration",
        "Integration of Google Maps, WhatsApp chat, and forms",
        "Weekly progress demos on private staging links",
      ],
      output: "Private Staging Deployment for Testing",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Client Review & Feedback Iteration",
      subtitle: "Refining every detail until the software meets your exacting standards.",
      duration: "3 - 7 Days",
      checklist: [
        "Comprehensive walkthrough with your internal team",
        "Feedback gathering and fine-tuning typography & layout",
        "Cross-browser and mobile device compatibility testing",
        "Speed optimization and Core Web Vitals audit",
      ],
      output: "Client Sign-Off & Production Approval",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Launch, Training & Continuous Support",
      subtitle: "Going live smoothly with continuous backups, security, and maintenance.",
      duration: "Ongoing Support",
      checklist: [
        "DNS migration, custom domain setup (.com.np / .com), and SSL activation",
        "Google Business Profile verification and Maps ranking optimization",
        "Staff training on managing the website or POS/inventory software",
        "Proactive monthly security patching, backups, and tech support",
      ],
      output: "Live Web Address & Active Maintenance SLA",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Structured Client Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            How We Work With You: <br />
            <span className="text-[#C2671A]">From Inquiry to Live Launch</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            A transparent, predictable 5-step delivery process designed to keep you informed at every milestone without surprises.
          </p>
        </div>

        {/* Interactive Progress Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-white border-[#C2671A] shadow-md ring-2 ring-[#C2671A]/20"
                    : "bg-white/70 border-[#E8DFD3] hover:border-[#C2671A]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-[#C2671A]" : "text-[#7A6B5D]"
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-[#C2671A] text-white" : "bg-[#F3ECE2] text-[#6B5E51]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-[#1A1612] line-clamp-1">
                  {item.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD3] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black text-[#C2671A] font-mono">
                  {steps[activeStep].step}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[#1A1612]">
                    {steps[activeStep].title}
                  </h3>
                  <span className="text-xs text-[#7A6B5D] font-medium">
                    Typical Duration: {steps[activeStep].duration}
                  </span>
                </div>
              </div>

              <p className="text-base text-[#5C4F42] mb-6 leading-relaxed">
                {steps[activeStep].subtitle}
              </p>

              {/* Checklist */}
              <div className="space-y-3 mb-6">
                {steps[activeStep].checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#2A1E14]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Output Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-900">
                <span>Phase Deliverable:</span>
                <span className="underline">{steps[activeStep].output}</span>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-3.5 text-xs">
              <h4 className="font-bold uppercase tracking-wider text-[#1A1612] text-xs pb-2 border-b border-[#E8DFD3]">
                Mauri Quality Standards
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-[#5C4F42]">Code Quality:</span>
                <span className="font-bold text-[#1A1612]">Modular & Clean Code</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5C4F42]">Client Communication:</span>
                <span className="font-bold text-[#1A1612]">WhatsApp & Phone Updates</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5C4F42]">Security:</span>
                <span className="font-bold text-emerald-700">SSL & Daily Backups</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5C4F42]">Post-Launch:</span>
                <span className="font-bold text-[#C2671A]">Ongoing Maintenance</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
