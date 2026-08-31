'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TestRideModal from '../../components/TestRideModal';
import { mockBikes, Bike } from '@/data/bikes';
import { useBikeContext } from '@/context/BikeContext';
import {
  ShieldCheck,
  Calendar,
  Gauge,
  Fuel,
  CheckCircle2,
  Heart,
  Scale,
  MessageSquare,
  Phone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  Award,
  Sparkles,
} from 'lucide-react';

export default function BikeDetailPage() {
  const params = useParams();
  const bikeId = params?.id as string;

  const bike = mockBikes.find((b) => b.id === bikeId) || mockBikes[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  const { toggleWishlist, isInWishlist, toggleCompare, isInCompare } = useBikeContext();
  const isSaved = isInWishlist(bike.id);
  const isCompared = isInCompare(bike.id);

  // EMI Estimate
  const principal = bike.price * 0.8;
  const emi = Math.round((principal * 0.032).toFixed(0) as any);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/used-bikes" className="hover:text-red-600">Used Bikes</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">{bike.brand} {bike.model}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] bg-gray-900 rounded-3xl overflow-hidden shadow-lg group">
              <img
                src={bike.images[activeImageIndex] || bike.images[0]}
                alt={`${bike.brand} ${bike.model}`}
                className="w-full h-full object-cover"
              />

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-md transition"
                title="Fullscreen preview"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Inspection Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 shadow">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{bike.inspectionScore}/100 Certified Health</span>
              </div>

              {/* Image Controls */}
              {bike.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? bike.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === bike.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {bike.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-20 rounded-xl overflow-hidden border-2 transition flex-shrink-0 ${
                    activeImageIndex === idx ? 'border-red-600 scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Inspection Checklist Details */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="font-heading font-black text-lg text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  150+ Point Quality Inspection Highlights
                </h3>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                  Passed All Checks
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Engine & Compression: 98% Health</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Brake Pads & Discs: 85% Life Remaining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tyre Tread Depth: 4.5 mm (Excellent)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>OBD ECU Diagnostics: 0 Fault Codes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Frame & Alignment: Certified Straight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Electricals & Battery: 12.8V Healthy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Specification Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-6">
              {/* Header Title */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {bike.bikeType}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleCompare(bike.id)}
                      className={`p-2 rounded-full border transition ${
                        isCompared ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                      title="Compare"
                    >
                      <Scale className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(bike.id)}
                      className={`p-2 rounded-full border transition ${
                        isSaved ? 'bg-red-600 text-white border-red-600' : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                      title="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-heading font-black text-gray-900 leading-tight">
                  {bike.brand} {bike.model}
                </h1>
                <p className="text-xs text-gray-500 font-medium">{bike.variant}</p>
              </div>

              {/* Price & EMI Box */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Fixed Price</span>
                  <span className="text-3xl font-heading font-black text-gray-900">
                    ₹{bike.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">EMI Starts At</span>
                  <span className="text-sm font-bold text-red-600">
                    ₹{emi.toLocaleString('en-IN')}/mo
                  </span>
                </div>
              </div>

              {/* Specs Pills Grid */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Calendar className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Model Year</span>
                  <span className="font-bold text-gray-900">{bike.year}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Gauge className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Kilometers</span>
                  <span className="font-bold text-gray-900">{bike.kilometers.toLocaleString()} km</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Fuel className="w-4 h-4 text-red-600 mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Engine CC</span>
                  <span className="font-bold text-gray-900">{bike.engineCC} cc</span>
                </div>
              </div>

              {/* Document Overview Matrix */}
              <div className="space-y-2 text-xs border-t border-gray-100 pt-4">
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Ownership</span>
                  <span className="font-bold text-gray-900">{bike.ownership}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Registration</span>
                  <span className="font-bold text-gray-900">{bike.registration}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Insurance</span>
                  <span className="font-bold text-gray-900">{bike.insurance}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-50">
                  <span className="text-gray-500">Location</span>
                  <span className="font-bold text-gray-900">{bike.location}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsTestRideOpen(true)}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/20 transition"
                >
                  Book Free Test Ride
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(bike.brand)}%20${encodeURIComponent(bike.model)}%20(₹${bike.price})`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <Phone className="w-4 h-4" /> Call Dealer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white text-sm font-bold bg-white/10 px-4 py-2 rounded-full"
          >
            Close ✕
          </button>
          <img
            src={bike.images[activeImageIndex]}
            alt="Fullscreen view"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}

      {/* Test Ride Modal */}
      {isTestRideOpen && (
        <TestRideModal bike={bike} onClose={() => setIsTestRideOpen(false)} />
      )}

      <Footer />
    </div>
  );
}
