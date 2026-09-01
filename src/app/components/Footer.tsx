'use client';

import React from 'react';
import Link from 'next/link';
import { Bike, Phone, Mail, MapPin, Clock, MessageSquare, Heart, Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        {/* Company Info */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold">
              <Bike className="w-6 h-6" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-white">
              RIDE<span className="text-red-600">HUB</span>
            </span>
          </Link>

          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            South India's premier pre-owned motorcycle dealership and multi-brand workshop. Every bike is certified with a 150+ point quality inspection and backed by legal document assurance.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/916238392582"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-red-500">
            Used Bikes
          </h4>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li><Link href="/used-bikes?brand=Royal+Enfield" className="hover:text-white transition">Royal Enfield</Link></li>
            <li><Link href="/used-bikes?brand=Yamaha" className="hover:text-white transition">Yamaha Bikes</Link></li>
            <li><Link href="/used-bikes?brand=Honda" className="hover:text-white transition">Honda CB Series</Link></li>
            <li><Link href="/used-bikes?brand=KTM" className="hover:text-white transition">KTM Duke & RC</Link></li>
            <li><Link href="/used-bikes?type=Cruiser" className="hover:text-white transition">Cruiser Motorcycles</Link></li>
            <li><Link href="/used-bikes?type=Sport" className="hover:text-white transition">Sports Bikes</Link></li>
          </ul>
        </div>

        {/* Workshop Services */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-red-500">
            Workshop Services
          </h4>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li><Link href="/book-service?service=general-service" className="hover:text-white transition">General Periodic Service</Link></li>
            <li><Link href="/book-service?service=engine-service" className="hover:text-white transition">Engine Diagnostics & Tuning</Link></li>
            <li><Link href="/book-service?service=oil-change" className="hover:text-white transition">Synthetic Oil Replacement</Link></li>
            <li><Link href="/book-service?service=brake-service" className="hover:text-white transition">Brake Pad & Fluid Service</Link></li>
            <li><Link href="/book-service?service=detailing" className="hover:text-white transition">Foam Wash & Detailing</Link></li>
            <li><Link href="/sell-bike" className="hover:text-white transition">Sell Your Motorcycle</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-red-500">
            Visit Dealership
          </h4>
          <div className="space-y-2.5 text-xs text-gray-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span>RideHub Dealership & Workshop, NH-66 Bypass, Edappally, Kochi, Kerala - 682024</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>+91 62383 92582</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>support@ridehubmotorcycles.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Mon - Sat: 9:00 AM - 7:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} RideHub Pre-Owned Motorcycles & Workshop. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/used-bikes" className="hover:text-white transition">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
