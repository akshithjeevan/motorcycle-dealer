'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BikeCard from '../components/BikeCard';
import { useBikeContext } from '@/context/BikeContext';
import { mockBikes } from '@/data/bikes';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useBikeContext();
  const savedBikes = mockBikes.filter((b) => wishlist.includes(b.id));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 fill-current" /> Saved Motorcycles
            </div>
            <h1 className="text-3xl font-heading font-black text-gray-900 tracking-tight">
              Your Wishlist
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {savedBikes.length} bike(s) saved to your personal garage wishlist.
            </p>
          </div>

          <Link
            href="/used-bikes"
            className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition"
          >
            Browse All Bikes
          </Link>
        </div>

        {savedBikes.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {savedBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4 max-w-md mx-auto my-12 shadow-sm">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-heading font-black text-gray-900">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-gray-500">
              Tap the heart icon on any motorcycle to save it to your wishlist and monitor price drops.
            </p>
            <Link
              href="/used-bikes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-red-700 transition"
            >
              Explore Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
