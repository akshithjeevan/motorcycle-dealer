'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkshopServices from '../components/WorkshopServices';
import InspectionSection from '../components/InspectionSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import { Wrench, Shield, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow">
        {/* Workshop Banner */}
        <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1440px] mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" /> State-of-the-Art Multi-Brand Workshop
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight max-w-3xl mx-auto">
              Precision Engineering & Diagnostic Workshop
            </h1>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Certified master mechanics, OBD ECU diagnostic tools, synthetic lubes, and ceramic detailing under one roof.
            </p>
            <div className="pt-4 flex items-center justify-center gap-4">
              <Link
                href="/book-service"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

        <WorkshopServices />
        <InspectionSection />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
