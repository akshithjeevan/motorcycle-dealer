'use client';

import React from 'react';
import Link from 'next/link';

const brands = [
  { name: 'Royal Enfield', logoText: 'ROYAL ENFIELD', bg: 'bg-amber-50 text-amber-900 border-amber-200' },
  { name: 'Yamaha', logoText: 'YAMAHA', bg: 'bg-blue-50 text-blue-900 border-blue-200' },
  { name: 'Honda', logoText: 'HONDA', bg: 'bg-red-50 text-red-900 border-red-200' },
  { name: 'KTM', logoText: 'KTM', bg: 'bg-orange-50 text-orange-900 border-orange-200' },
  { name: 'TVS', logoText: 'TVS', bg: 'bg-sky-50 text-sky-900 border-sky-200' },
  { name: 'Bajaj', logoText: 'BAJAJ', bg: 'bg-indigo-50 text-indigo-900 border-indigo-200' },
  { name: 'Hero', logoText: 'HERO', bg: 'bg-rose-50 text-rose-900 border-rose-200' },
  { name: 'Suzuki', logoText: 'SUZUKI', bg: 'bg-blue-50 text-blue-950 border-blue-200' },
];

export default function BrandFilter() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-6">
          Explore Motorcycles by Brand
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/used-bikes?brand=${encodeURIComponent(brand.name)}`}
              className={`p-4 rounded-2xl border font-heading font-black text-sm tracking-wider flex items-center justify-center transition-all hover:scale-105 hover:shadow-md ${brand.bg}`}
            >
              {brand.logoText}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
