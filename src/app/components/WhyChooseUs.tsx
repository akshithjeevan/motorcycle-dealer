'use client';

import React from 'react';
import { ShieldCheck, FileCheck, DollarSign, Wrench, HeartHandshake, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality Checked',
    description: 'Every pre-owned motorcycle undergoes a rigorous 150+ point diagnostic & physical inspection.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden dealership fees or surprise charges. What you see is what you pay.',
  },
  {
    icon: FileCheck,
    title: 'Verified Documents',
    description: '100% legal verification for RC, insurance history, and zero crime record clearance.',
  },
  {
    icon: Wrench,
    title: 'Trusted Workshop Service',
    description: 'In-house expert workshop with factory-trained technicians to care for your bike long after purchase.',
  },
  {
    icon: HeartHandshake,
    title: 'Easy Financing & EMI',
    description: 'Partnerships with leading Indian banks for 30-minute approval and down payments starting at ₹10,000.',
  },
  {
    icon: Headphones,
    title: 'Dedicated After-Sales Support',
    description: 'Free first service, roadside assistance support, and hassle-free RC transfer warranty.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-gray-100">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
          The Dealership Difference
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
          Why Riders Choose <span className="text-red-600">RideHub</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          We combine transparent pre-owned motorcycle sales with state-of-the-art workshop engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-red-600 border border-gray-200 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-black text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
