'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { mockBikes, Bike } from '@/data/bikes';
import BikeCard from './BikeCard';
import TestRideModal from './TestRideModal';

export default function FeaturedBikes() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'cruiser' | 'sport' | 'naked'>('all');
  const [activeTestRideBike, setActiveTestRideBike] = useState<Bike | null>(null);

  const filteredBikes = mockBikes.filter((bike) => {
    if (selectedTab === 'all') return true;
    return bike.bikeType.toLowerCase() === selectedTab;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Handpicked Inventory
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 tracking-tight">
            Find Your <span className="text-red-600">Next Ride</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Quality-checked pre-owned motorcycles, ready for the road with verified papers.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {(['all', 'cruiser', 'sport', 'naked'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                selectedTab === tab
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab === 'all' ? 'All Bikes' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Bike Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {filteredBikes.slice(0, 8).map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            onBookTestRide={(bikeToBook) => setActiveTestRideBike(bikeToBook)}
          />
        ))}
      </div>

      {/* View All Inventory CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/used-bikes"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl transition shadow-lg hover:shadow-xl"
        >
          Explore All Pre-Owned Inventory
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Test Ride Modal */}
      {activeTestRideBike && (
        <TestRideModal
          bike={activeTestRideBike}
          onClose={() => setActiveTestRideBike(null)}
        />
      )}
    </section>
  );
}
