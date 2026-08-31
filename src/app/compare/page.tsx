'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBikeContext } from '@/context/BikeContext';
import { mockBikes, Bike } from '@/data/bikes';
import { Scale, X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ComparePage() {
  const { compareList, toggleCompare, clearCompare } = useBikeContext();
  const comparedBikes = mockBikes.filter((b) => compareList.includes(b.id));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" /> Side-by-Side Comparison
            </div>
            <h1 className="text-3xl font-heading font-black text-gray-900 tracking-tight">
              Compare Motorcycles
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Comparing {comparedBikes.length} of 3 selected motorcycles.
            </p>
          </div>

          {comparedBikes.length > 0 && (
            <button
              onClick={clearCompare}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-xl transition"
            >
              Clear Comparison
            </button>
          )}
        </div>

        {comparedBikes.length > 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="p-4 w-48 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                    Motorcycle
                  </th>
                  {comparedBikes.map((bike) => (
                    <th key={bike.id} className="p-4 w-72 align-top">
                      <div className="relative space-y-2">
                        <button
                          onClick={() => toggleCompare(bike.id)}
                          className="absolute -top-1 -right-1 p-1.5 bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-full"
                          title="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <img
                          src={bike.images[0]}
                          alt={bike.model}
                          className="w-full h-36 object-cover rounded-xl border border-gray-100"
                        />
                        <h3 className="font-heading font-black text-sm text-gray-900">
                          {bike.brand} {bike.model}
                        </h3>
                        <span className="text-red-600 font-black text-base block">
                          ₹{bike.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Year */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Year</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-bold text-gray-900">{bike.year}</td>
                  ))}
                </tr>
                {/* Kilometers */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Kilometers Driven</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-bold text-gray-900">{bike.kilometers.toLocaleString()} km</td>
                  ))}
                </tr>
                {/* Engine CC */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Engine Displacement</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-bold text-gray-900">{bike.engineCC} cc</td>
                  ))}
                </tr>
                {/* Mileage */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Approx. Mileage</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-bold text-gray-900">{bike.mileage} kmpl</td>
                  ))}
                </tr>
                {/* Fuel & Transmission */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Fuel & Transmission</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-semibold text-gray-800">{bike.fuelType} • {bike.transmission}</td>
                  ))}
                </tr>
                {/* Ownership */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Ownership</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-semibold text-gray-800">{bike.ownership}</td>
                  ))}
                </tr>
                {/* Inspection Score */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Inspection Health Score</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 font-bold text-emerald-600">
                      <span className="inline-flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {bike.inspectionScore} / 100
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Key Features */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Highlights</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4 space-y-1">
                      {bike.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-gray-700 text-[11px]">
                          <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>
                {/* Action CTA */}
                <tr>
                  <td className="p-4 font-bold text-gray-500">Action</td>
                  {comparedBikes.map((bike) => (
                    <td key={bike.id} className="p-4">
                      <Link
                        href={`/used-bikes/${bike.id}`}
                        className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-[11px] rounded-xl flex items-center justify-center gap-1 transition"
                      >
                        View Details
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4 max-w-md mx-auto my-12 shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-heading font-black text-gray-900">
              No Motorcycles Selected for Comparison
            </h2>
            <p className="text-xs text-gray-500">
              Select up to 3 bikes from our inventory cards to compare specs, mileage, pricing, and health scores side by side.
            </p>
            <Link
              href="/used-bikes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-red-700 transition"
            >
              Browse Used Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
