"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Code2,
  Laptop,
  Smartphone,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "system">("preview");
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  const [pingLatency, setPingLatency] = useState(18);

  const simulatePing = () => {
    setPingLatency(Math.floor(Math.random() * 8) + 14);
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-tech-dots">
      {/* Ambient warm glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C2671A] animate-pulse" />
              <span>MAURI TECHNOLOGIES · NEPAL</span>
            </div>

            {/* Clean, Non-AI, Impactful Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-black tracking-tight text-[#1A1612] leading-[1.08] mb-6">
              Your Vision, <br />
              <span className="text-[#C2671A]">Our Code,</span> <br />
              Real Results.
            </h1>

            {/* Grounded Agency Subtitle */}
            <p className="text-lg sm:text-xl text-[#5C4F42] max-w-2xl font-normal leading-relaxed mb-8">
              We help ambitious businesses in Nepal and worldwide establish a formidable digital presence through modern websites, custom software, and reliable IT consulting.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-base shadow-lg shadow-amber-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-[#D8CCBD] bg-white/80 hover:bg-white text-[#2A1E14] font-bold text-base transition-all hover:border-[#C2671A]"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E8DFD3] w-full text-xs sm:text-sm font-medium text-[#5C4F42]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Responsive & Mobile-First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast & Secure Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kathmandu Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technology & Live Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-6 sm:p-7 bg-[#F5EEE4] border border-[#E2D4C3] shadow-xl relative transition-all duration-300">
              
              {/* Showcase Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5D7C7] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-[#7A6B5D] font-semibold">
                    mauri-engine.ts
                  </span>
                </div>

                {/* Interactive Mode Pills */}
                <div className="flex items-center gap-1 bg-[#E8DDD0] p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      activeTab === "preview"
                        ? "bg-[#2A1E14] text-amber-400 shadow-sm"
                        : "text-[#6B5E51] hover:text-[#1A1612]"
                    }`}
                  >
                    Live Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      activeTab === "code"
                        ? "bg-[#2A1E14] text-amber-400 shadow-sm"
                        : "text-[#6B5E51] hover:text-[#1A1612]"
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab("system")}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      activeTab === "system"
                        ? "bg-[#2A1E14] text-amber-400 shadow-sm"
                        : "text-[#6B5E51] hover:text-[#1A1612]"
                    }`}
                  >
                    Health
                  </button>
                </div>
              </div>

              {/* Body: Tab Content */}
              {activeTab === "preview" && (
                <div className="space-y-3">
                  {/* Viewport switcher */}
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B5D]">
                      Interactive Viewport
                    </span>
                    <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-[#E2D4C3]">
                      <button
                        onClick={() => setViewportMode("desktop")}
                        className={`p-1 rounded ${
                          viewportMode === "desktop" ? "text-[#C2671A] bg-amber-50" : "text-stone-400"
                        }`}
                        title="Desktop View"
                      >
                        <Laptop className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setViewportMode("mobile")}
                        className={`p-1 rounded ${
                          viewportMode === "mobile" ? "text-[#C2671A] bg-amber-50" : "text-stone-400"
                        }`}
                        title="Mobile View"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Simulated App Container */}
                  <div
                    className={`mx-auto rounded-2xl bg-[#2A1E14] p-4 text-white shadow-inner transition-all duration-300 border border-stone-800 ${
                      viewportMode === "mobile" ? "max-w-[260px]" : "w-full"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="font-bold tracking-tight">Client Portal</span>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                        LIVE
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                        <div className="text-[10px] text-stone-400">Active System</div>
                        <div className="font-bold text-amber-300">Inventory & POS Suite</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                          <span className="text-stone-400 block">Performance</span>
                          <span className="font-mono text-emerald-400 font-bold">99.8%</span>
                        </div>
                        <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                          <span className="text-stone-400 block">Database Sync</span>
                          <span className="font-mono text-sky-400 font-bold">&lt; 20ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="rounded-2xl bg-[#2A1E14] p-5 font-mono text-xs text-[#F0E8DC] shadow-inner border border-amber-950/40 overflow-x-auto">
                  <pre className="leading-relaxed text-amber-100/90">
                    <code>
                      <span className="text-amber-400">export const</span>{" "}
                      <span className="text-sky-300">mauri</span> = {"{"}
                      <br />
                      {"  "}location: <span className="text-amber-300">"Kathmandu, Nepal"</span>,
                      <br />
                      {"  "}coreFocus: [<br />
                      {"    "}<span className="text-amber-200">"High-Speed Websites"</span>,<br />
                      {"    "}<span className="text-amber-200">"Business Management Systems"</span>,<br />
                      {"    "}<span className="text-amber-200">"Mobile Applications"</span>
                      <br />
                      {"  "}],
                      <br />
                      {"  "}standards: [<span className="text-emerald-300">"Fast Loading"</span>, <span className="text-emerald-300">"Secure SSL"</span>, <span className="text-emerald-300">"Mobile-First"</span>],
                      <br />
                      {"  "}support: <span className="text-sky-300">"Direct Local & Global"</span>
                      <br />
                      {"}"};
                    </code>
                  </pre>
                </div>
              )}

              {activeTab === "system" && (
                <div className="rounded-2xl bg-[#2A1E14] p-4 text-xs font-mono text-stone-300 shadow-inner border border-stone-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                    <span className="text-stone-400">Hosting Network:</span>
                    <span className="text-emerald-400 font-bold">Fast Cloud Edge (CDN)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                    <span className="text-stone-400">SSL Encryption:</span>
                    <span className="text-emerald-400 font-bold">TLS 1.3 Active</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                    <span className="text-stone-400">Kathmandu Edge Ping:</span>
                    <button
                      onClick={simulatePing}
                      className="text-amber-400 font-bold flex items-center gap-1.5 hover:underline"
                      title="Click to test ping"
                    >
                      <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      <span>{pingLatency}ms</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Uptime SLA:</span>
                    <span className="text-sky-400 font-bold">99.9% Monitored</span>
                  </div>
                </div>
              )}

              {/* Interactive Stack Pills */}
              <div className="mt-4 rounded-xl bg-white p-3.5 border border-[#E5D7C7] flex items-center justify-around text-center shadow-sm">
                <span className="text-xs font-bold text-[#3D3126]">Web Apps</span>
                <span className="text-amber-500 font-black">·</span>
                <span className="text-xs font-bold text-[#3D3126]">Mobile Apps</span>
                <span className="text-amber-500 font-black">·</span>
                <span className="text-xs font-bold text-[#3D3126]">POS & ERP</span>
                <span className="text-amber-500 font-black">·</span>
                <span className="text-xs font-bold text-[#3D3126]">Cloud & SEO</span>
              </div>

              {/* Consultation trigger inside showcase */}
              <button
                onClick={onOpenQuoteModal}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-sm shadow-md transition-all group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Live response footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A6B5D] px-1">
                <span className="flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#C2671A]" />
                  Kathmandu HQ · Global Delivery
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                  Fast Turnaround
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
