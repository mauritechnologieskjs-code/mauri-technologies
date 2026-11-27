import React from "react";
import { MauriLogo } from "../common/MauriLogo";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8DFD3] bg-[#F5EEE4] text-[#3D3126] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E2D4C3]">
          
          {/* Brand Col (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <MauriLogo size={46} />
            <p className="text-xs sm:text-sm text-[#5C4F42] max-w-sm leading-relaxed">
              Mauri Technologies is an IT company based in Kathmandu, Nepal. We help local businesses, ambitious startups, and established organizations build high-impact websites and custom software solutions.
            </p>
            
            {/* Crisp Inline SVG Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/people/Mauri-Technologies/61597096076232/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E8DFD3] text-[#4A3E31] hover:text-[#C2671A] hover:border-[#C2671A] transition-all text-xs font-semibold shadow-sm"
                aria-label="Mauri Facebook"
              >
                <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1612]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#C2671A] transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2671A] transition-colors">
                  POS & Inventory Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2671A] transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2671A] transition-colors">
                  UI/UX & Identity Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2671A] transition-colors">
                  Hosting & Domain Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1612]">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#C2671A] transition-colors">
                  About Mauri Technologies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C2671A] transition-colors">
                  Our Client Process
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-[#C2671A] transition-colors">
                  Technology Frameworks
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-[#C2671A] transition-colors">
                  Case Studies & Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C2671A] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Office Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1612]">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-[#5C4F42]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2671A] shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2671A] shrink-0" />
                <a href="mailto:mauritechnologies.kjs@gmail.com" className="hover:text-[#C2671A]">
                  mauritechnologies.kjs@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C2671A] shrink-0" />
                <span>
                  <a href="tel:9806362050" className="hover:text-[#C2671A]">9806362050</a> /{" "}
                  <a href="tel:9810096615" className="hover:text-[#C2671A]">9810096615</a>
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar without cheesy phrases */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B5D]">
          <div>
            <span>© 2026 Mauri Technologies Pvt. Ltd. All rights reserved. Registered in Nepal.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-[#C2671A] transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-[#C2671A] transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white border border-[#E8DFD3] hover:text-[#C2671A] transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
