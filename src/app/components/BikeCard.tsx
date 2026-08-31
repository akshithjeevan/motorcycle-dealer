'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Scale, ShieldCheck, Fuel, Gauge, Calendar, ChevronRight } from 'lucide-react';
import { Bike } from '@/data/bikes';
import { useBikeContext } from '@/context/BikeContext';

interface BikeCardProps {
  bike: Bike;
  onBookTestRide?: (bike: Bike) => void;
}

export default function BikeCard({ bike, onBookTestRide }: BikeCardProps) {
  const { toggleWishlist, isInWishlist, toggleCompare, isInCompare } = useBikeContext();
  const isSaved = isInWishlist(bike.id);
  const isCompared = isInCompare(bike.id);

  // Approximate EMI calculation (assuming 20% down, 10% rate, 3 years)
  const principal = bike.price * 0.8;
  const emi = Math.round((principal * 0.032).toFixed(0) as any);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={bike.images[0]}
          alt={`${bike.brand} ${bike.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Condition & Inspection Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] sm:text-[11px] font-bold text-gray-800 shadow-sm">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
          <span>{bike.inspectionScore}/100</span>
        </div>

        {/* Action Buttons: Wishlist & Compare */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => toggleCompare(bike.id)}
            className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all ${
              isCompared
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
            title={isCompared ? 'Remove from compare' : 'Add to compare'}
          >
            <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => toggleWishlist(bike.id)}
            className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all ${
              isSaved
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-white/80 text-gray-700 hover:bg-white'
            }`}
            title={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
          {bike.ownership}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 font-medium mb-0.5 sm:mb-1">
            <span className="truncate max-w-[80px] sm:max-w-none">{bike.brand}</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[9px] sm:text-xs">
              Verified RC
            </span>
          </div>

          <h3 className="font-heading font-black text-sm sm:text-lg text-gray-900 leading-snug group-hover:text-red-600 transition-colors truncate">
            {bike.brand} {bike.model}
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-2 sm:mb-3 truncate">{bike.variant}</p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs bg-gray-50 p-2 sm:p-2.5 rounded-xl text-gray-600 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
              <span>{bike.year}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 truncate" />
              <span className="truncate">{bike.kilometers.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Fuel className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
              <span>{bike.fuelType}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[9px] sm:text-xs font-bold text-gray-400">CC:</span>
              <span>{bike.engineCC} cc</span>
            </div>
          </div>
        </div>

        {/* Price & Action CTAs */}
        <div>
          <div className="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-gray-100 mb-3 sm:mb-4">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                Total Price
              </span>
              <span className="text-base sm:text-xl font-heading font-black text-gray-900">
                ₹{bike.price.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                EMI From
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-red-600">
                ₹{emi.toLocaleString('en-IN')}/mo
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
            <Link
              href={`/used-bikes/${bike.id}`}
              className="w-full min-h-[38px] sm:min-h-[44px] py-2 sm:py-2.5 bg-gray-100 active:bg-gray-300 hover:bg-gray-200 text-gray-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl flex items-center justify-center gap-0.5 sm:gap-1 transition"
            >
              Details
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
            <button
              onClick={() => onBookTestRide && onBookTestRide(bike)}
              className="w-full min-h-[38px] sm:min-h-[44px] py-2 sm:py-2.5 bg-red-600 active:bg-red-800 hover:bg-red-700 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl transition shadow-sm"
            >
              Test Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
