'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/gallery-workshop.png',
    title: 'The Master Bay',
    category: 'Facilities',
    description: 'Bespoke diagnostic and assembly bay built to medical-grade cleanliness standards.',
  },
  {
    id: 2,
    src: '/gallery-mechanic.png',
    title: 'Precision Machining',
    category: 'Engineering',
    description: 'Expert hand-tuning of high-performance components using dealer-level diagnostics.',
  },
  {
    id: 3,
    src: '/gallery-detail.png',
    title: 'Suspension Setup',
    category: 'Components',
    description: 'Ohlins racing forks and carbon fiber body panels calibrated for custom rider sag.',
  },
  {
    id: 4,
    src: '/gallery-superbike.png',
    title: 'The Showroom Finish',
    category: 'Superbikes',
    description: 'Premium Ducati Panigale V4 detailed and polished to a flawless mirror finish.',
  },
];

export default function WorkshopShowcase() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="workshop" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Workshop Showcase
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary">
              Where Art Meets Engineering.
            </h2>
          </div>
          <p className="font-sans text-text-secondary text-lg max-w-sm mt-4 md:mt-0 leading-relaxed">
            Our clean-room facility is designed for premium diagnostics, meticulous maintenance, and custom racing setups.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md border border-border-custom"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Blur gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-btn-primary/80 via-btn-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />

              {/* Text items showing on hover */}
              <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
                <div>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl">{item.title}</h3>
                  <p className="font-sans text-xs text-white/80 mt-1 max-w-sm">{item.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-btn-primary/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors p-2"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-white rounded-[20px] overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 aspect-[4/3] bg-black">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-heading font-bold text-3xl text-text-primary mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border-custom">
                    <a
                      href="#booking"
                      onClick={() => setSelectedItem(null)}
                      className="w-full flex items-center justify-center py-3.5 bg-btn-primary hover:bg-accent text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300"
                    >
                      Book A Service
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
