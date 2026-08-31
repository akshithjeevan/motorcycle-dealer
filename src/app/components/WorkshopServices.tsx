'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Wrench, Cpu, Droplet, Disc, Circle, Sparkles, Clock, ArrowRight, Shield } from 'lucide-react';
import { mockWorkshopServices, WorkshopService } from '@/data/bikes';

const iconMap: Record<string, any> = {
  Wrench,
  Cpu,
  Droplet,
  Disc,
  Circle,
  Sparkles,
};

export default function WorkshopServices() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5" /> Professional Workshop
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
            Expert Care for <span className="text-red-600">Every Ride</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            From routine maintenance and OBD diagnostics to custom engine rebuilding and ceramic detailing for all Indian motorcycle brands.
          </p>
        </div>

        <Link
          href="/book-service"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md shadow-red-600/20"
        >
          Book a Service Slot
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWorkshopServices.map((service) => {
          const IconComponent = iconMap[service.iconName] || Wrench;
          return (
            <div
              key={service.id}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-red-100">
                  Most Popular
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-heading font-black text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100 text-xs mb-4">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{service.estimatedTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Starts at </span>
                    <span className="font-bold text-gray-900 text-base font-heading">
                      ₹{service.startingPrice}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/book-service?service=${service.id}`}
                  className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition"
                >
                  Book Service
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
