"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Business Website & Landing Page",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1A1612] tracking-tight leading-tight mb-4">
            Let’s Discuss Your Next <br />
            <span className="text-[#C2671A]">Digital Project</span>.
          </h2>
          <p className="text-base text-[#5C4F42]">
            Ready to build a modern website, develop custom management software, or upgrade your current systems? Our Kathmandu team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office & Contact Cues */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Office Location Card */}
            <div className="spotlight-card p-7 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A1612] mb-1">
                    Kathmandu Office
                  </h4>
                  <p className="text-xs text-[#5C4F42] leading-relaxed mb-3">
                    Mauri Technologies Pvt. Ltd. <br />
                    New Baneshwor, Kathmandu 44600 <br />
                    Bagmati Province, Nepal
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 text-[10.5px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Available for in-person meetings
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="spotlight-card p-7 rounded-3xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A6B5D] block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hello@mauritech.com.np"
                    className="text-sm font-bold text-[#1A1612] hover:text-[#C2671A] transition-colors"
                  >
                    hello@mauritech.com.np
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-[#E8DFD3]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A6B5D] block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href="tel:+97714782910"
                    className="text-sm font-bold text-[#1A1612] hover:text-[#C2671A] transition-colors"
                  >
                    +977 1 4782910 / +977 980-1234567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-[#E8DFD3]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-[#C2671A] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A6B5D] block">
                    Operating Hours
                  </span>
                  <span className="text-xs font-semibold text-[#1A1612]">
                    Sunday – Friday: 9:00 AM – 6:00 PM NPT
                  </span>
                </div>
              </div>
            </div>

            {/* Response Commitment */}
            <div className="p-5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-950 text-xs leading-relaxed">
              <strong className="font-bold">Prompt Response:</strong> All inquiries sent via this form are reviewed directly by our founders and answered within 2 to 4 business hours.
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="spotlight-card p-8 sm:p-10 rounded-3xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1A1612] mb-1">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#5C4F42] mb-5">
                    Tell us briefly about what you're looking to build. We'll follow up with practical guidance and next steps.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3126] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] px-3.5 py-2.5 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D3126] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] px-3.5 py-2.5 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3126] mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+977 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] px-3.5 py-2.5 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D3126] mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] px-3.5 py-2.5 text-xs text-[#1A1612] font-medium focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                      >
                        <option>Business Website & Landing Page</option>
                        <option>Business Management System (POS / Inventory)</option>
                        <option>Cross-Platform Mobile App</option>
                        <option>UI/UX & Brand Identity</option>
                        <option>Hosting, Domain & Ongoing Maintenance</option>
                        <option>Technical SEO & Google Business Profile</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D3126] mb-1">
                      Project Details or Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share a few details about your business, the features you need, or any deadline you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] p-3 text-xs text-[#1A1612] focus:outline-none focus:ring-2 focus:ring-[#C2671A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1612] mb-2">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-xs text-[#5C4F42] max-w-sm mx-auto mb-5">
                    Thank you, {formData.name}. Your message has been received by our Kathmandu office. We will reach out to you within 2 to 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Business Website & Landing Page",
                        message: "",
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-[#2A1E14] text-amber-400 text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
