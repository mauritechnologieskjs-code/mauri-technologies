"use client";

import React, { useState, useEffect } from "react";
import { MauriLogo } from "../common/MauriLogo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "glass-panel shadow-lg shadow-amber-950/5 py-2.5 px-4 sm:px-6"
            : "bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DFD3] py-3 px-4 sm:px-6 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Emblem */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mauri Technologies Home"
          >
            <MauriLogo size={42} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-[#3D332A] hover:text-[#C2671A] hover:bg-amber-500/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white text-sm font-bold shadow-md shadow-amber-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#E8DFD3] text-[#2A1E14] hover:bg-amber-500/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel p-5 border border-[#E8DFD3] shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#2A1E14] hover:bg-amber-500/15 hover:text-[#C2671A] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-[#E8DFD3] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C2671A] hover:bg-[#A35210] text-white font-bold text-sm shadow-md"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-[#7A6B5D] pt-1 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Kathmandu Office · Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
