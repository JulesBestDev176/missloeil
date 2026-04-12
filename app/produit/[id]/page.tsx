"use client";

import Image from "next/image";
import Link from "next/link";
import { products, routineRecommendation, whatsappNumber, callNumber } from "@/app/data/products";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FFF9] text-slate-800 font-inter">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-8">
            
            {/* Image (Encore plus diminuée) */}
            <div className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-md">
                <Image src={product.image} alt={product.name} fill className="object-cover" priority />
              </div>
            </div>

            {/* Info & CTA (Compact) */}
            <div className="w-full lg:w-2/3">
              <span className="text-[#52B788] text-[10px] font-bold uppercase tracking-widest mb-2 block">{product.type}</span>
              <h1 className="font-playfair text-3xl md:text-5xl text-[#1B4332] mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[#2D6A4F]">{product.price}</span>
                <span className="text-xs text-slate-400 font-light italic">En stock</span>
              </div>

              <p className="text-slate-600 font-light leading-relaxed mb-8 max-w-xl">
                {product.detailDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Miss L'oeil, je souhaite commander : ${product.name}`)}`}
                  target="_blank"
                  className="py-4 bg-[#25D366] text-white text-center rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#128C7E] flex items-center justify-center gap-2"
                >
                  <iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon>
                  Commander via WhatsApp
                </a>
                <a
                  href={`tel:${callNumber}`}
                  className="py-4 bg-white border border-[#95D5B2] text-[#2D6A4F] text-center rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <iconify-icon icon="solar:phone-bold" width="18"></iconify-icon>
                  Appel Direct
                </a>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-[#95D5B2]/20">
                <div>
                  <h2 className="text-xs font-bold text-[#1B4332] uppercase tracking-widest mb-4">Utilisation</h2>
                  <ul className="space-y-3">
                    {product.instructions.map((ins, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <iconify-icon icon="solar:check-circle-bold" width="18" className="text-[#52B788] mt-0.5 shrink-0"></iconify-icon>
                        {ins}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  {product.important && (
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                      <p className="text-xs font-bold text-amber-800 uppercase mb-3 px-1">Important</p>
                      <ul className="space-y-2">
                        {product.important.map((item, i) => (
                          <li key={i} className="text-sm text-amber-700 leading-relaxed italic">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-[#1B4332] p-6 rounded-lg">
                    <p className="text-[10px] font-bold text-[#95D5B2] uppercase tracking-[0.2em] mb-4 text-center">Routine Recommandée</p>
                    <div className="flex justify-around items-center px-4">
                      {routineRecommendation.steps.map((step, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-sm text-white font-medium">{step.product}</p>
                          <p className="text-[10px] text-white/50 uppercase tracking-wider">{step.part}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
