'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ScrollHero() {
  return (
    <section className="relative w-full h-screen min-h-[650px] bg-black overflow-hidden flex items-center justify-center select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/Video%20Project%2016.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-16 flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight max-w-5xl leading-[1.1] drop-shadow-2xl"
        >
          Precision Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-red-600">
            For High Performance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mt-6 leading-relaxed font-light drop-shadow"
        >
          Master craftsmanship, dealer-grade diagnostics, and expert performance tuning to keep every motorcycle riding at its absolute peak.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        >
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95"
          >
            Book Service Now
          </Link>
          <Link
            href="/workshop"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Highlights Bar at Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-14 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="flex items-center justify-center gap-3 text-left">
            <Wrench className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Certified</div>
              <div className="text-xs text-gray-400">Master Technicians</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-left">
            <Cpu className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Diagnostics</div>
              <div className="text-xs text-gray-400">Dealer-Grade Tools</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Warranty</div>
              <div className="text-xs text-gray-400">100% Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-left">
            <Sparkles className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Detailing</div>
              <div className="text-xs text-gray-400">Showroom Finish</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

