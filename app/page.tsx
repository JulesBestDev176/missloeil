"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products, whatsappNumber, callNumber } from "@/app/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Fatoumata Binta S.",
      role: "Dakar, Plateau",
      text: "L'huile de pousse est un miracle ! Mes tempes dégarnies ont commencé à repousser après seulement 3 semaines d'utilisation régulière.",
    },
    {
      id: 2,
      name: "Mame Diarra F.",
      role: "Saint-Louis",
      text: "La crème sur mes pointes a totalement changé la texture de mes cheveux. Ils sont plus doux et beaucoup moins cassants. Jërëjëf Miss L'oeil !",
    },
    {
      id: 3,
      name: "Ndèye Khady D.",
      role: "Thiès",
      text: "J'adore l'odeur naturelle et la légèreté des produits. On sent vraiment que c'est artisanal et sans produits chimiques. Ma routine préférée.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#F8FFF9] text-slate-800 selection:bg-[#95D5B2] selection:text-[#1B4332] font-inter">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#F0F7F1] to-[#F8FFF9]">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#95D5B2]/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 md:py-20 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative">
              {/* Text Content */}
              <div className="w-full lg:w-[50%] text-center lg:text-left reveal relative z-20">
                <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-[#1B4332] tracking-tighter leading-[1] mb-6 max-w-xl mx-auto lg:mx-0">
                  Sublimez votre <br /><span className="italic text-[#52B788]">Éclat</span> Naturel.
                </h1>
                <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  Des soins capillaires artisanaux 100% naturels pour des cheveux sains, forts et rayonnants.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a href="#produits" className="px-8 py-3.5 bg-[#2D6A4F] text-white rounded-full text-sm font-medium hover:bg-[#1B4332] transition-all shadow-xl shadow-[#2D6A4F]/20 flex items-center justify-center gap-2 group">
                    Découvrir nos soins
                    <Icon icon="solar:round-alt-arrow-right-bold" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Image Content - Slightly larger than previous state */}
              <div className="w-full lg:w-[50%] flex justify-center lg:justify-end reveal relative lg:mt-0 
                absolute lg:relative inset-0 lg:inset-auto z-10 lg:z-10 opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-1/2 w-[80%] h-[80%] bg-[#95D5B2]/20 animate-blob z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-1/2 w-[65%] h-[65%] bg-[#52B788]/10 animate-blob z-0" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 w-full max-w-sm lg:max-w-md aspect-square scale-[0.8] md:scale-100 lg:scale-110">
                  <Image src="/image/hero_final.png" alt="Produits Miss L'oeil" fill className="object-contain drop-shadow-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produits" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="text-[#52B788] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Collection Essentielle</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#1B4332] tracking-tight mb-6 italic">Nos Soins</h2>
              <div className="w-20 h-1 bg-[#52B788] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
              {[
                { id: "all", label: "Tous les produits" },
                { id: "spray", label: "Spray" },
                { id: "creme", label: "Crèmes" },
                { id: "huile", label: "Huiles" },
                { id: "duo", label: "Duos" },
                { id: "routine", label: "Routine Complète" }
              ].map((filter) => (
                <button
                  key={filter.id}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${activeFilter === filter.id ? "bg-[#2D6A4F] text-white shadow-md shadow-[#2D6A4F]/20" : "bg-[#F8FFF9] text-[#2D6A4F] border border-[#95D5B2] hover:bg-[#95D5B2]/20"}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
              {products
                .filter(p => activeFilter === "all" || p.category === activeFilter)
                .map((product, idx) => (
                <article key={product.id} className="reveal group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#95D5B2]/30 border border-[#95D5B2]/20" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <Link href={`/produit/${product.id}`} className="w-full h-64 mb-6 flex items-center justify-center relative overflow-hidden cursor-pointer">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/90 text-[#2D6A4F] text-[10px] font-medium px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">{product.type}</div>
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-playfair text-xl text-[#1B4332] mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">{product.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#95D5B2]/30 gap-4">
                      <span className="font-medium text-[#2D6A4F] text-xl tracking-tight">{product.price}</span>
                      <div className="flex gap-2">
                        <Link
                          href={`/produit/${product.id}`}
                          className="px-3.5 py-1.5 rounded-full text-[9px] font-medium border border-[#95D5B2] text-[#2D6A4F] hover:bg-[#95D5B2]/20 transition-colors uppercase tracking-wider"
                        >
                          Détails
                        </Link>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour Miss L'oeil, je souhaite commander : ${product.name}`)}`}
                          target="_blank"
                          className="px-3.5 py-1.5 rounded-full text-[9px] font-medium bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors uppercase tracking-wider flex items-center gap-1.5"
                        >
                          <Icon icon="logos:whatsapp-icon" width="12" />
                          Commander
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="bienfaits" className="py-24 bg-[#1B4332] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 reveal">
              <h2 className="font-playfair text-3xl md:text-4xl tracking-tight mb-4 text-white">Pourquoi choisir Miss L&apos;oeil ?</h2>
              <p className="text-[#95D5B2] font-light max-w-2xl mx-auto uppercase tracking-widest text-[10px]">L&apos;excellence de la nature Sénégalaise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center reveal">
              {[
                { icon: "solar:leaf-bold", title: "100% Naturel", desc: "Aucun produit chimique, parabène ou sulfate. La pureté absolue pour vos cheveux." },
                { icon: "solar:heart-bold", title: "Artisanal", desc: "Fabriqué avec passion et savoir-faire traditionnel au Sénégal." },
                { icon: "solar:star-bold", title: "Efficacité Réelle", desc: "Des résultats visibles dès les premières utilisations sur la pousse et l'éclat." }
              ].map((benefit, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5">
                  <Icon icon={benefit.icon} width="40" className="text-[#52B788] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-playfair text-xl mb-4 text-white">{benefit.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-12 pb-4 reveal" id="counter-section">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="py-4 sm:py-0">
                  <p className="text-4xl font-playfair text-[#52B788] mb-1">100%</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Organique</p>
                </div>
                <div className="py-4 sm:py-0">
                  <p className="text-4xl font-playfair text-[#52B788] mb-1">500+</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Clientes Heureuses</p>
                </div>
                <div className="py-4 sm:py-0">
                  <p className="text-4xl font-playfair text-[#52B788] mb-1">24h</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Livraison Dakar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="text-[#52B788] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Avis de nos clientes</span>
              <h2 className="font-playfair text-4xl text-[#1B4332]">Votre satisfaction, <span className="italic">notre fierté</span></h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((t) => (
                    <div key={t.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-[#F8FFF9] border border-[#95D5B2]/30 p-10 md:p-14 rounded-[32px] text-center relative">
                        <div className="flex justify-center gap-1 mb-6 text-[#52B788]">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} icon="solar:star-bold" width="16" />
                          ))}
                        </div>
                        <p className="text-lg md:text-2xl text-[#1B4332] font-light leading-relaxed mb-8 italic">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="flex flex-col items-center">
                          <p className="font-bold text-[#2D6A4F] uppercase tracking-widest text-sm">{t.name}</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{t.role}</p>
                        </div>
                        <Icon icon="solar:quote-left-bold" width="80" className="absolute top-6 left-8 text-[#52B788]/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-4 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "bg-[#2D6A4F] w-8" : "bg-[#95D5B2]/40 w-4"}`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guide Download Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F8FFF9] rounded-[40px] border border-[#95D5B2]/30 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 reveal text-center md:text-left">
              <div className="w-full md:w-1/2">
                <span className="text-[#52B788] text-xs font-semibold uppercase tracking-widest mb-4 block">Votre Routine Parfaite</span>
                <h2 className="font-playfair text-3xl md:text-5xl text-[#1B4332] mb-6 leading-tight">Téléchargez votre guide d&apos;utilisation complet</h2>
                <p className="text-slate-600 font-light mb-8 leading-relaxed">
                  Pour obtenir les meilleurs résultats avec vos soins Miss L&apos;oeil, nous avons conçu une notice détaillée. Apprenez les gestes essentiels pour une chevelure éclatante de santé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="/image/mode.jpeg" 
                    download="Guide_Utilisation_Miss_Loeil.jpeg"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#2D6A4F] text-white rounded-full text-sm font-medium hover:bg-[#1B4332] transition-all shadow-lg shadow-[#2D6A4F]/20 gap-3"
                  >
                    <Icon icon="solar:download-minimalistic-bold" width="18" />
                    Télécharger le guide
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/image/mode.jpeg" alt="Guide Miss L'oeil" width={500} height={700} className="w-full h-auto" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#52B788]/10 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2D6A4F]/10 rounded-full blur-3xl -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-[#F8FFF9] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] shadow-xl shadow-[#95D5B2]/10 border border-[#95D5B2]/20 p-8 md:p-16 reveal relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
                <Icon icon="solar:phone-calling-bold" width="200" />
              </div>

              <div className="flex flex-col lg:flex-row gap-12 md:gap-16 relative z-10">
                <div className="w-full lg:w-1/2">
                  <h2 className="font-playfair text-3xl md:text-4xl text-[#1B4332] mb-6">Parlons de <span className="italic text-[#52B788]">vos</span> cheveux</h2>
                  <p className="text-slate-600 font-light mb-10 leading-relaxed max-w-md mx-auto md:mx-0">Une question sur un produit ou sur votre routine ? Nous sommes là pour vous accompagner au quotidien.</p>
                  
                  <div className="space-y-8 flex flex-col items-center md:items-start">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group">
                      <div className="w-14 h-14 bg-[#52B788]/10 rounded-2xl flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F] group-hover:text-white transition-all">
                        <Icon icon="solar:phone-bold" width="24" />
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Téléphone & WhatsApp</p>
                        <a href={`tel:${callNumber}`} className="text-xl font-medium text-[#1B4332] hover:text-[#2D6A4F]">+221 76 626 45 93</a>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group">
                      <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                        <Icon icon="logos:whatsapp-icon" width="24" />
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">WhatsApp de commande</p>
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="text-xl font-medium text-[#1B4332] hover:text-[#2D6A4F]">+221 78 154 77 78</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="bg-[#F8FFF9] p-8 rounded-3xl border border-[#95D5B2]/30">
                    <h3 className="font-playfair text-2xl text-[#1B4332] mb-8">Horaires de réponse</h3>
                    <div className="space-y-4">
                      {["Lundi - Vendredi : 09h00 - 19h00", "Samedi : 10h00 - 18h00", "Dimanche : Livraison possible"].map((line, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-slate-600">{line.split(" : ")[0]}</span>
                          <span className="font-medium text-[#2D6A4F]">{line.split(" : ")[1]}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=Bonjour Miss L'oeil, j'aimerais avoir des informations sur vos produits.`}
                      target="_blank"
                      className="mt-8 w-full py-4 bg-[#25D366] text-white rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20"
                    >
                      <Icon icon="logos:whatsapp-icon" width="18" />
                      Message WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RevealHandler trigger={activeFilter} />
    </div>
  );
}

// Client side only component to handle revelations on scroll
function RevealHandler({ trigger }: { trigger?: any }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Use a small timeout to ensure DOM has updated after filter change
    const timeoutId = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [trigger]);

  return null;
}
