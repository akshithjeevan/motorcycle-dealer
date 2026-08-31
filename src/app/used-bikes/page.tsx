'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BikeCard from '../components/BikeCard';
import TestRideModal from '../components/TestRideModal';
import { mockBikes, Bike } from '@/data/bikes';
import { useBikeContext } from '@/context/BikeContext';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, Bike as BikeIcon } from 'lucide-react';
import Link from 'next/link';

function InventoryContent() {
  const searchParams = useSearchParams();

  // Initial Filters from URL
  const initialBrand = searchParams.get('brand') || 'All';
  const initialType = searchParams.get('type') || 'All';
  const initialQuery = searchParams.get('q') || '';
  const initialBudget = searchParams.get('budget') || 'All';

  // Filter States
  const [query, setQuery] = useState(initialQuery);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedBudget, setSelectedBudget] = useState(initialBudget);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Sorting State
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'km-low' | 'year-new'>('newest');

  // Mobile Filter Drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Active Test Ride Modal Bike
  const [activeTestRideBike, setActiveTestRideBike] = useState<Bike | null>(null);

  // Context for compare count
  const { compareList, clearCompare } = useBikeContext();

  // Unique Filter Options
  const brands = ['All', 'Royal Enfield', 'Yamaha', 'Honda', 'KTM', 'TVS', 'Bajaj', 'Hero', 'Suzuki'];
  const bikeTypes = ['All', 'Commuter', 'Cruiser', 'Sport', 'Naked', 'Adventure', 'Scooter'];
  const locations = ['All', 'Bangalore, KA', 'Kochi, KL', 'Chennai, TN', 'Hyderabad, TS', 'Pune, MH'];

  // Filter & Sort Logic
  const filteredBikes = useMemo(() => {
    let result = [...mockBikes];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (b) =>
          b.brand.toLowerCase().includes(q) ||
          b.model.toLowerCase().includes(q) ||
          b.variant.toLowerCase().includes(q)
      );
    }

    if (selectedBrand !== 'All') {
      result = result.filter((b) => b.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    if (selectedType !== 'All') {
      result = result.filter((b) => b.bikeType.toLowerCase() === selectedType.toLowerCase());
    }

    if (selectedBudget !== 'All') {
      const maxB = Number(selectedBudget);
      result = result.filter((b) => b.price <= maxB);
    }

    if (selectedYear !== 'All') {
      result = result.filter((b) => b.year >= Number(selectedYear));
    }

    if (selectedFuel !== 'All') {
      result = result.filter((b) => b.fuelType === selectedFuel);
    }

    if (selectedOwnership !== 'All') {
      result = result.filter((b) => b.ownership === selectedOwnership);
    }

    if (selectedLocation !== 'All') {
      result = result.filter((b) => b.location === selectedLocation);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'km-low') {
      result.sort((a, b) => a.kilometers - b.kilometers);
    } else if (sortBy === 'year-new') {
      result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [
    query,
    selectedBrand,
    selectedType,
    selectedBudget,
    selectedYear,
    selectedFuel,
    selectedOwnership,
    selectedLocation,
    sortBy,
  ]);

  const resetFilters = () => {
    setQuery('');
    setSelectedBrand('All');
    setSelectedType('All');
    setSelectedBudget('All');
    setSelectedYear('All');
    setSelectedFuel('All');
    setSelectedOwnership('All');
    setSelectedLocation('All');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <BikeIcon className="w-3.5 h-3.5" /> Certified Pre-Owned Inventory
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
              Used Motorcycles in India
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Showing <span className="font-bold text-gray-900">{filteredBikes.length}</span> quality tested motorcycles ready for delivery.
            </p>
          </div>

          {/* Search Input & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search brand, model..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Compare Bar if items selected */}
        {compareList.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between text-xs font-bold text-blue-900">
            <span>You have selected {compareList.length} bike(s) for comparison.</span>
            <div className="flex items-center gap-3">
              <button onClick={clearCompare} className="text-blue-600 underline text-xs">
                Clear
              </button>
              <Link
                href="/compare"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl uppercase tracking-wider hover:bg-blue-700 transition"
              >
                Compare Now ({compareList.length})
              </Link>
            </div>
          </div>
        )}

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm h-fit space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-sm font-bold font-heading text-gray-900">
                <Filter className="w-4 h-4 text-red-600" /> Filter Motorcycles
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-red-600 hover:underline font-bold"
              >
                Reset All
              </button>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 outline-none cursor-pointer"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Bike Type Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Category / Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 outline-none cursor-pointer"
              >
                {bikeTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Max Price (₹)
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 outline-none cursor-pointer"
              >
                <option value="All">Any Price</option>
                <option value="120000">Under ₹1,20,000</option>
                <option value="160000">Under ₹1,60,000</option>
                <option value="200000">Under ₹2,00,000</option>
              </select>
            </div>

            {/* Ownership */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                Ownership
              </label>
              <select
                value={selectedOwnership}
                onChange={(e) => setSelectedOwnership(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 outline-none cursor-pointer"
              >
                <option value="All">All Ownerships</option>
                <option value="1st Owner">1st Owner Only</option>
                <option value="2nd Owner">2nd Owner</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                City / Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 outline-none cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* Main Results Grid */}
          <section className="lg:col-span-9 space-y-6">
            {/* Sort Bar */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm text-xs font-semibold text-gray-700">
              <span className="hidden sm:inline">
                Sort options for best match:
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-gray-400 font-bold uppercase tracking-wider">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-bold text-gray-900 outline-none cursor-pointer"
                >
                  <option value="newest">Featured / Newest Listed</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="km-low">Lowest Kilometers</option>
                  <option value="year-new">Newest Model Year</option>
                </select>
              </div>
            </div>

            {/* Bikes Grid */}
            {filteredBikes.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filteredBikes.map((bike) => (
                  <BikeCard
                    key={bike.id}
                    bike={bike}
                    onBookTestRide={(bikeToBook) => setActiveTestRideBike(bikeToBook)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-4">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-black text-gray-900">
                  No Motorcycles Found
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your filters or clearing your search term to view available bikes.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 className="font-heading font-bold text-base text-gray-900">Filter Bikes</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 text-gray-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Selectors */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border rounded-xl text-xs"
                  >
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Category</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border rounded-xl text-xs"
                  >
                    {bikeTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Max Price</label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border rounded-xl text-xs"
                  >
                    <option value="All">Any Price</option>
                    <option value="120000">Under ₹1,20,000</option>
                    <option value="160000">Under ₹1,60,000</option>
                    <option value="200000">Under ₹2,00,000</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Apply Filters ({filteredBikes.length})
              </button>
              <button
                onClick={() => {
                  resetFilters();
                  setIsFilterOpen(false);
                }}
                className="w-full py-2 bg-gray-100 text-gray-700 font-bold text-xs uppercase rounded-xl"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test Ride Modal */}
      {activeTestRideBike && (
        <TestRideModal
          bike={activeTestRideBike}
          onClose={() => setActiveTestRideBike(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default function UsedBikesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 text-center">Loading inventory...</div>}>
      <InventoryContent />
    </Suspense>
  );
}
