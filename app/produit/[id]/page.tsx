"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products, routineRecommendation, whatsappNumber, callNumber } from "@/app/data/products";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === parseInt(params.id as string));
  const [lightbox, setLightbox] = useState(false);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FFF9] text-slate-800 font-inter">
      <Navbar />

      <main className="pt-24 pb-24 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400 mb-8 mt-6">
            <Link href="/" className="hover:text-[#2D6A4F] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/#produits" className="hover:text-[#2D6A4F] transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-[#2D6A4F] font-bold">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Image — sticky on desktop */}
            <div className="w-full lg:w-[42%] lg:sticky lg:top-28">
              <button
                onClick={() => setLightbox(true)}
                className="relative rounded-3xl overflow-hidden bg-white shadow-[0_8px_48px_rgba(27,67,50,0.1)] border border-[#95D5B2]/20 w-full group cursor-zoom-in"
                style={{ aspectRatio: "4/5" }}
                aria-label="Voir l'image en grand"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2318]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-[#1B4332] font-bold text-base shadow-xl">
                  {product.price}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Icon icon="solar:maximize-bold" width="16" className="text-[#2D6A4F]" />
                </div>
              </button>
            </div>

            {/* Lightbox */}
            {lightbox && (
              <div
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setLightbox(false)}
              >
                <button
                  onClick={() => setLightbox(false)}
                  className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Fermer"
                >
                  <Icon icon="solar:close-bold" width="20" className="text-white" />
                </button>
                <div
                  className="relative w-full max-w-lg max-h-[90vh]"
                  style={{ aspectRatio: "4/5" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="100vw"
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Info */}
            <div className="w-full lg:w-[58%]">
              <span className="inline-block px-3 py-1 bg-[#52B788]/15 text-[#2D6A4F] text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">
                {product.type}
              </span>
              <h1 className="font-playfair text-3xl md:text-4xl text-[#1B4332] mb-4 leading-tight">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" width="14" className="text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400">Soin artisanal 100% naturel</span>
              </div>

              <p className="text-slate-500 font-light leading-relaxed mb-8 text-[15px]">{product.detailDesc}</p>

              {/* CTAs — desktop */}
              <div className="hidden sm:grid grid-cols-2 gap-3 mb-8">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Miss L'oeil, je souhaite commander : ${product.name}`)}`}
                  target="_blank"
                  className="py-4 bg-[#25D366] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <Icon icon="logos:whatsapp-icon" width="18" />
                  Commander via WhatsApp
                </a>
                <a
                  href={`tel:${callNumber}`}
                  className="py-4 bg-white border border-[#95D5B2] text-[#2D6A4F] rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F0FAF5] transition-all"
                >
                  <Icon icon="solar:phone-bold" width="18" />
                  Appel Direct
                </a>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {/* Instructions */}
                <div className="bg-white rounded-2xl p-6 border border-[#95D5B2]/20 shadow-[0_2px_16px_rgba(27,67,50,0.04)]">
                  <h2 className="text-[10px] font-bold text-[#1B4332] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Icon icon="solar:leaf-bold" width="16" className="text-[#52B788]" />
                    Mode d&apos;utilisation
                  </h2>
                  <ul className="space-y-3">
                    {product.instructions.map((ins, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <Icon icon="solar:check-circle-bold" width="16" className="text-[#52B788] mt-0.5 shrink-0" />
                        {ins}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important */}
                {product.important && (
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/60">
                    <h2 className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <Icon icon="solar:danger-bold" width="16" className="text-amber-500" />
                      À savoir
                    </h2>
                    <ul className="space-y-2">
                      {product.important.map((item, i) => (
                        <li key={i} className="text-sm text-amber-700 leading-relaxed font-light">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Routine */}
                <div className="bg-[#1B4332] rounded-2xl p-6">
                  <p className="text-[9px] font-bold text-[#95D5B2] uppercase tracking-[0.25em] mb-5 text-center">La Routine Complète</p>
                  <div className="flex items-center justify-center gap-3">
                    {routineRecommendation.steps.map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="text-center">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2">
                            <Icon
                              icon={i === 0 ? "solar:drop-bold" : i === 1 ? "solar:jar-of-honey-bold" : "solar:leaf-bold"}
                              width="18"
                              className="text-[#95D5B2]"
                            />
                          </div>
                          <p className="text-xs text-white font-semibold">{step.product}</p>
                          <p className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">{step.part}</p>
                        </div>
                        {i < routineRecommendation.steps.length - 1 && (
                          <Icon icon="solar:arrow-right-bold" width="14" className="text-white/20 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#95D5B2]/70 text-center mt-5 font-light italic">{routineRecommendation.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky CTA — mobile only */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#95D5B2]/20 p-4 flex gap-3 shadow-[0_-8px_32px_rgba(27,67,50,0.08)]">
        <a
          href={`tel:${callNumber}`}
          className="w-12 h-12 shrink-0 border border-[#95D5B2] text-[#2D6A4F] rounded-xl flex items-center justify-center hover:bg-[#F0FAF5] transition-colors"
        >
          <Icon icon="solar:phone-bold" width="20" />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Miss L'oeil, je souhaite commander : ${product.name}`)}`}
          target="_blank"
          className="flex-1 py-3 bg-[#25D366] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25"
        >
          <Icon icon="logos:whatsapp-icon" width="18" />
          Commander
        </a>
      </div>

      <Footer />
    </div>
  );
}
