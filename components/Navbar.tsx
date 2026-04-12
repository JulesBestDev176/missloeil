"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { whatsappNumber } from "@/app/data/products";
import Icon from "./Icon";

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
              <Image src="/image/logo.png" alt="Miss L'oeil Logo" fill className="object-contain" />
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
              <Icon icon="logos:whatsapp-icon" width="14" />
              {formattedWhatsapp}
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#1B4332] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon icon={isMenuOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} width="28" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#95D5B2]/20 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-8 flex flex-col gap-6">
          {["produits", "bienfaits", "temoignages", "contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className="text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-[#2D6A4F]"
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
            <Icon icon="logos:whatsapp-icon" width="18" />
            Contact WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
