'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SellBikeForm from '../components/SellBikeForm';
import WhyChooseUs from '../components/WhyChooseUs';
import { Tag } from 'lucide-react';

export default function SellBikePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" /> Instant Valuation Guarantee
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
              Sell Your Motorcycle for Top Value
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Skip middleman commissions. Get an instant online offer, doorstep inspection, and instant bank payout.
            </p>
          </div>

          <SellBikeForm />
        </div>

        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
