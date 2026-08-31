'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'DUCATI', style: 'font-sans tracking-[0.25em] font-black italic text-xl' },
  { name: 'BMW MOTORRAD', style: 'font-sans tracking-[0.15em] font-bold text-lg' },
  { name: 'TRIUMPH', style: 'font-serif tracking-[0.2em] font-medium text-xl italic' },
  { name: 'HARLEY-DAVIDSON', style: 'font-sans tracking-[0.1em] font-extrabold text-base border-y border-current py-0.5' },
  { name: 'HONDA BIGWING', style: 'font-sans tracking-[0.2em] font-semibold text-lg' },
  { name: 'KTM', style: 'font-sans tracking-[0.05em] font-black text-2xl skew-x-3' },
  { name: 'YAMAHA', style: 'font-heading tracking-[0.25em] font-bold text-lg' },
  { name: 'SUZUKI', style: 'font-sans tracking-[0.15em] font-black text-xl' },
  { name: 'KAWASAKI', style: 'font-sans tracking-[0.2em] font-extrabold text-lg' },
  { name: 'ROYAL ENFIELD', style: 'font-serif tracking-[0.15em] font-bold text-base' },
  { name: 'APRILIA', style: 'font-sans tracking-[0.25em] font-black uppercase text-xl text-red-600/0 hover:text-red-600 transition-colors' },
  { name: 'BENELLI', style: 'font-serif tracking-[0.25em] font-light text-lg uppercase' },
  { name: 'MOTO GUZZI', style: 'font-serif tracking-[0.3em] font-normal text-base' },
];

export default function BrandsWeService() {
  return (
    <section id="brands" className="bg-secondary-bg py-20 border-b border-border-custom">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
            Servicing Excellence
          </span>
          <h2 className="font-heading font-semibold text-sm text-text-secondary uppercase tracking-widest">
            Authorized Service Expertise For Elite Manufacturers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer select-none"
            >
              <span
                className={`text-text-secondary/55 group-hover:text-text-primary transition-all duration-300 ${brand.style}`}
              >
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
