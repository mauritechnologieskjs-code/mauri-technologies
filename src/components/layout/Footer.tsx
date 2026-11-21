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
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD3] flex items-center justify-center text-[#4A3E31] hover:text-[#C2671A] hover:border-[#C2671A] transition-colors"
                aria-label="Mauri Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD3] flex items-center justify-center text-[#4A3E31] hover:text-[#C2671A] hover:border-[#C2671A] transition-colors"
                aria-label="Mauri LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD3] flex items-center justify-center text-[#4A3E31] hover:text-[#C2671A] hover:border-[#C2671A] transition-colors"
                aria-label="Mauri Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-[#E8DFD3] flex items-center justify-center text-[#4A3E31] hover:text-[#C2671A] hover:border-[#C2671A] transition-colors"
                aria-label="Mauri GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
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
                <span>New Baneshwor, Kathmandu, Nepal</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2671A] shrink-0" />
                <a href="mailto:hello@mauritech.com.np" className="hover:text-[#C2671A]">
                  hello@mauritech.com.np
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C2671A] shrink-0" />
                <span>+977 1 4782910</span>
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
