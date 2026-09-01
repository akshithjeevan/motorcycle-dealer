'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Scale, Wrench, Bike, Phone, MessageSquare } from 'lucide-react';
import { useBikeContext } from '@/context/BikeContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Used Bikes', href: '/used-bikes' },
  { name: 'Workshop', href: '/workshop' },
  { name: 'Sell Your Bike', href: '/sell-bike' },
  { name: 'Book Service', href: '/book-service' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { wishlist, compareList } = useBikeContext();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? 'bg-white/90 backdrop-blur-md py-3.5 border-b border-gray-200/80 shadow-sm'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
            <Bike className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-black text-xl tracking-tight leading-none ${
                isScrolled || pathname !== '/' ? 'text-gray-900' : 'text-white'
              }`}
            >
              RIDE<span className="text-red-600">HUB</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              Pre-Owned & Workshop
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  isActive
                    ? 'text-red-600'
                    : isScrolled || pathname !== '/'
                    ? 'text-gray-700 hover:text-red-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Quick Utility Icons & CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            className={`relative p-2 rounded-full transition-colors ${
              isScrolled || pathname !== '/'
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Compare Icon */}
          <Link
            href="/compare"
            className={`relative p-2 rounded-full transition-colors ${
              isScrolled || pathname !== '/'
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            title="Compare Bikes"
          >
            <Scale className="w-5 h-5" />
            {compareList.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {compareList.length}
              </span>
            )}
          </Link>

          {/* Contact Direct */}
          <a
            href="tel:+916238392582"
            className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg ${
              isScrolled || pathname !== '/'
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Phone className="w-4 h-4 text-red-600" />
            <span>+91 62383 92582</span>
          </a>

          {/* Book Test Ride Button */}
          <Link
            href="/used-bikes"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-red-600/20 hover:-translate-y-0.5"
          >
            <Bike className="w-4 h-4" />
            Book Test Ride
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/wishlist"
            className={`relative p-2 ${
              isScrolled || pathname !== '/' ? 'text-gray-800' : 'text-white'
            }`}
          >
            <Heart className="w-6 h-6" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg ${
              isScrolled || pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white z-50 flex flex-col justify-between p-6 pt-20 lg:hidden border-t border-gray-100 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Navigation Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-heading text-lg font-bold py-2.5 border-b border-gray-100 flex items-center justify-between ${
                  pathname === link.href ? 'text-red-600' : 'text-gray-800'
                }`}
              >
                <span>{link.name}</span>
                {pathname === link.href && <span className="w-2 h-2 rounded-full bg-red-600" />}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-4">
              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
              >
                <Heart className="w-4 h-4 text-red-600" />
                Wishlist ({wishlist.length})
              </Link>
              <Link
                href="/compare"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <Scale className="w-4 h-4 text-blue-600" />
                Compare ({compareList.length})
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 mt-6">
            <Link
              href="/used-bikes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/20 active:scale-[0.98] transition"
            >
              Browse Inventory
            </Link>
            <a
              href="https://wa.me/916238392582"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl active:scale-[0.98] transition"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
