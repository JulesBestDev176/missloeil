"use client";

import Image from "next/image";
import Link from "next/link";
import { callNumber } from "@/app/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6 pointer-events-none">
              <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center p-2 shadow-sm text-[#1B4332]">
                <Image src="/logo.png" alt="Miss L'oeil Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans tracking-widest text-[#95D5B2] text-[10px] uppercase font-semibold leading-none">Healthy Hair</span>
                <span className="font-dancing text-white text-2xl leading-tight">Miss L&apos;oeil</span>
              </div>
            </div>
            <p className="text-xs text-[#95D5B2] font-light leading-relaxed mb-6">Simplifiez votre routine capillaire avec nos soins essentiels.</p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#52B788]">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/#accueil" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/#produits" className="hover:text-white transition-colors">Nos Soins</Link></li>
              <li><Link href="/#bienfaits" className="hover:text-white transition-colors">Bienfaits</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#52B788]">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li className="flex items-center gap-2">
                <iconify-icon icon="solar:phone-bold" className="text-[#52B788]"></iconify-icon>
                +221 76 626 45 93
              </li>
              <li className="flex items-center gap-2">
                <iconify-icon icon="logos:whatsapp-icon" className="text-[#52B788]"></iconify-icon>
                +221 78 154 77 78
              </li>
              <li className="flex items-center gap-2">
                <iconify-icon icon="solar:map-point-bold" className="text-[#52B788]"></iconify-icon>
                Dakar, Sénégal
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#52B788]">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#52B788] hover:border-[#52B788] transition-all">
                <iconify-icon icon="ri:instagram-line" width="20"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#52B788] hover:border-[#52B788] transition-all">
                <iconify-icon icon="ri:facebook-fill" width="20"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#52B788] hover:border-[#52B788] transition-all">
                <iconify-icon icon="ri:tiktok-fill" width="20"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">© 2024 Miss L&apos;oeil. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
