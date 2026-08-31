'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, ShieldCheck, Tag, Calendar, Gauge, Bike } from 'lucide-react';

const brands = ['All Brands', 'Royal Enfield', 'Yamaha', 'Honda', 'KTM', 'TVS', 'Bajaj', 'Hero', 'Suzuki'];
const bikeTypes = [
  { name: 'Commuter', icon: '🛵' },
  { name: 'Cruiser', icon: '🏍️' },
  { name: 'Sport', icon: '🏎️' },
  { name: 'Naked', icon: '⚡' },
  { name: 'Adventure', icon: '🏔️' },
  { name: 'Scooter', icon: '🛵' },
];

export default function UsedBikeSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [budget, setBudget] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedBrand !== 'All Brands') params.set('brand', selectedBrand);
    if (budget !== 'All') params.set('budget', budget);
    if (selectedYear !== 'All') params.set('year', selectedYear);

    router.push(`/used-bikes?${params.toString()}`);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/used-bikes?type=${category}`);
  };

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Certified Inventory
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-gray-900 tracking-tight">
              Looking for a <span className="text-red-600">Used Motorcycle?</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Find quality-tested Indian pre-owned motorcycles with 150+ point inspection, verified RC, & easy EMI finance options.
          </p>
        </div>

        {/* Filter Bar */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
          {/* Search Input */}
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Brand / Model (e.g. Classic 350, R15)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Brand Dropdown */}
          <div>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3.5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 outline-none cursor-pointer"
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Dropdown */}
          <div>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3.5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-red-500 outline-none cursor-pointer"
            >
              <option value="All">Max Budget</option>
              <option value="100000">Under ₹1,00,000</option>
              <option value="150000">Under ₹1,50,000</option>
              <option value="200000">Under ₹2,00,000</option>
              <option value="250000">Under ₹2,50,000</option>
            </select>
          </div>

          {/* Search CTA */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition shadow-md shadow-red-600/20 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Find My Bike
            </button>
          </div>
        </form>

        {/* Bike Categories */}
        <div className="pt-4 border-t border-gray-100">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Popular Categories
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {bikeTypes.map((type) => (
              <button
                key={type.name}
                type="button"
                onClick={() => handleCategoryClick(type.name)}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 transition text-gray-800 font-semibold text-xs group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">{type.icon}</span>
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
