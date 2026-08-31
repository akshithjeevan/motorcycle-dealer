'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bike, Wrench, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Ready for the Road
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
            Your Next Ride Is Waiting.
          </h2>
          <p className="text-red-100 text-xs sm:text-sm">
            Browse 50+ quality checked Indian pre-owned motorcycles or book expert workshop care today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link
            href="/used-bikes"
            className="px-6 py-3.5 bg-white text-gray-900 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-100 transition shadow-lg text-center flex items-center justify-center gap-2"
          >
            <Bike className="w-4 h-4 text-red-600" />
            Explore Used Bikes
          </Link>
          <Link
            href="/book-service"
            className="px-6 py-3.5 bg-gray-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-black transition shadow-lg text-center flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4 text-red-500" />
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
}
