"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { whatsappNumber } from "@/app/data/products";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const formattedWhatsapp = "+221 78 154 77 78";

  useEffect(() => {
    const sections = ["accueil", "produits", "bienfaits", "temoignages", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-[#95D5B2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12">
              <Image src="/logo.png" alt="Miss L'oeil Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans tracking-widest text-[#1B4332] text-[10px] uppercase font-semibold leading-none">Healthy Hair</span>
              <span className="font-dancing text-[#2D6A4F] text-xl group-hover:text-[#52B788] transition-colors leading-tight">Miss L&apos;oeil</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "produits", label: "Produits" },
              { id: "bienfaits", label: "Bienfaits" },
              { id: "temoignages", label: "Avis" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <Link 
                key={item.id} 
                href={`/#${item.id}`} 
                className={`text-xs font-semibold uppercase tracking-widest transition-all relative group py-2
                  ${activeSection === item.id ? "text-[#2D6A4F]" : "text-slate-500 hover:text-[#2D6A4F]"}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#52B788] transition-all duration-300 
                  ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            ))}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="px-6 py-2.5 bg-[#25D366] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20 flex items-center gap-2"
            >
              <iconify-icon icon="logos:whatsapp-icon" width="14"></iconify-icon>
              {formattedWhatsapp}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#1B4332] hover:bg-[#95D5B2]/20 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <iconify-icon icon={isMenuOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} width="28"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#F8FFF9] border-b border-[#95D5B2]/20 shadow-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
          {["produits", "bienfaits", "temoignages", "apropos"].map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-[#2D6A4F] hover:bg-[#95D5B2]/10 rounded-md capitalize"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="mt-4 w-full py-4 bg-[#25D366] text-white text-center rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon>
            WhatsApp : {formattedWhatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
