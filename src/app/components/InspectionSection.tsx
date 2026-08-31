'use client';

import React, { useState } from 'react';
import { ShieldCheck, Cpu, Disc, Wrench, Zap, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'engine', name: 'Engine & Gearbox', score: '98/100', items: ['Compression Test', 'Clutch Wear & Slippage', 'Oil Leakages', 'Exhaust Emissions'] },
  { id: 'brakes', name: 'Brakes & Tyres', score: '95/100', items: ['ABS System Test', 'Brake Pad Thickness (>70%)', 'Tread Depth', 'Disc Rotor Runout'] },
  { id: 'electrical', name: 'Electricals & ECU', score: '96/100', items: ['Battery Health Test', 'ECU Diagnostic Scan', 'All Lights & Indicators', 'Cluster Calibration'] },
  { id: 'frame', name: 'Chassis & Frame', score: '99/100', items: ['Frame Alignment Scan', 'Fork Seal Leakage', 'Swingarm Bushings', 'Rear Shock Damping'] },
  { id: 'documents', name: 'Verified Documents', score: '100/100', items: ['Original RC Verification', 'Chassis No. Match', 'Insurance Validity Check', 'NCRB Crime Check'] },
];

export default function InspectionSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Trust Badges */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Unmatched Quality Guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight leading-tight mb-4">
              150+ Point <span className="text-red-600">Motorcycle Inspection</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Every pre-owned motorcycle undergoes a rigorous multi-stage physical, diagnostic, and paperwork evaluation by certified master technicians before listing.
            </p>

            {/* Overall Score Showcase */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full bg-red-50 border-4 border-red-600 flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <span className="text-2xl font-black text-gray-900 font-heading block leading-none">96</span>
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">/ 100</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Avg Health Index</span>
                <h4 className="text-lg font-bold text-gray-900 font-heading">Certified Road-Ready Standard</h4>
                <p className="text-xs text-gray-500 mt-1">Zero major accident history guarantee with 7-day money-back assurance.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Category Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
              Inspection Parameters Breakdown
            </h3>

            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                    activeCategory.id === cat.id
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    activeCategory.id === cat.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {cat.score}
                  </span>
                </button>
              ))}
            </div>

            {/* Checklist Items */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                <h4 className="font-bold text-gray-900 font-heading">{activeCategory.name} Checkpoints</h4>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Score: {activeCategory.score}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div className="p-3 bg-red-50/50 rounded-xl">
                <span className="font-bold text-red-600 block text-lg font-heading">150+</span>
                <span className="text-gray-500">Points Checked</span>
              </div>
              <div className="p-3 bg-red-50/50 rounded-xl">
                <span className="font-bold text-red-600 block text-lg font-heading">100%</span>
                <span className="text-gray-500">Legal Verification</span>
              </div>
              <div className="p-3 bg-red-50/50 rounded-xl">
                <span className="font-bold text-red-600 block text-lg font-heading">6 Months</span>
                <span className="text-gray-500">Engine Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
