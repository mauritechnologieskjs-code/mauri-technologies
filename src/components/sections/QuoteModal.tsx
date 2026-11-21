"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import { MauriLogo } from "../common/MauriLogo";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function QuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: QuoteModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ["Business Websites & Landing Pages"]
  );
  const [timeline, setTimeline] = useState("Standard (2 - 4 Weeks)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    "Business Websites & Landing Pages",
    "Business Management Systems (POS / ERP)",
    "Cross-Platform Mobile Apps",
    "UI/UX & Brand Identity",
    "Secure Hosting & Domain Setup",
    "Technical SEO & Google Business",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] p-6 sm:p-8 shadow-2xl z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#6B5E51] hover:bg-amber-500/15 hover:text-[#1A1612] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header with Official Logo */}
            <div className="mb-6">
              <div className="mb-3">
                <MauriLogo size={36} />
              </div>
              <h3 className="text-2xl font-black text-[#1A1612] tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4F42] mt-1">
                Tell us about your requirements. We’ll schedule a call or meet in Kathmandu to discuss scope, timeline, and recommendations.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-2">
                  Select Services You Need:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((srv) => {
                    const active = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`text-left text-xs font-semibold p-2.5 rounded-xl border transition-all ${
                          active
                            ? "bg-[#2A1E14] text-amber-400 border-stone-800"
                            : "bg-white text-[#4A3E31] border-[#E8DFD3] hover:border-[#C2671A]"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5">
                  Target Delivery Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#E8DFD3] px-3 py-2 text-xs text-[#1A1612] font-medium focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                >
                  <option>Urgent Launch (&lt; 2 Weeks)</option>
                  <option>Standard (2 - 4 Weeks)</option>
                  <option>Comprehensive Build (1 - 2 Months)</option>
                  <option>Ongoing Monthly Retainer & Support</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3D3126] mb-1">
                    Your Name / Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Sharma or Acme Clinic"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-white border border-[#E8DFD3] px-3 py-2 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3D3126] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-white border border-[#E8DFD3] px-3 py-2 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D3126] mb-1">
                  Phone or WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+977 98XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#E8DFD3] px-3 py-2 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D3126] mb-1">
                  Brief Project Overview
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share a short summary of the website or software system you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#E8DFD3] p-3 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-sm shadow-md transition-transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Consultation Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-[#1A1612] mb-2">
              Request Received!
            </h3>
            <p className="text-xs text-[#5C4F42] max-w-sm mx-auto mb-6">
              Thank you, <strong>{name}</strong>. Our team in Kathmandu has received your consultation request. We will review your details and contact you within 2 to 4 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#2A1E14] text-amber-400 text-xs font-bold"
            >
              Back to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
