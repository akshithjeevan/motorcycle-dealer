'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Will servicing my bike at Aura void my manufacturer warranty?',
    answer: 'No. Under national right-to-repair laws, servicing your motorcycle at an independent specialist does not void your warranty, provided OEM parts are used and service schedules are strictly followed. We use certified manufacturer parts and document everything in digital logs.',
  },
  {
    question: 'Do you only service European superbikes?',
    answer: 'While we specialize in high-end European manufacturers (Ducati, BMW Motorrad, Triumph, Aprilia, Moto Guzzi), we also provide expert level tuning, rebuilds, and servicing for premium Japanese superbikes (Yamaha R1, Kawasaki Ninja ZX-10R, Honda Fireblade, Suzuki Hayabusa) and custom cruisers.',
  },
  {
    question: 'How does the Doorstep Pickup & Delivery work?',
    answer: 'We operate custom enclosed trailers with air-ride suspension specifically designed for low-clearance superbikes. Your motorcycle is secured using soft tie-downs that do not compress the suspension seals. This service is fully insured door-to-door.',
  },
  {
    question: 'What is included in the Live Service Updates?',
    answer: 'During the inspection and diagnosis phases, your dedicated technician will send you a digital report link containing photos of any wear items (pads, filters, chain links) and a video detailing diagnostic scanner telemetry. You approve or reject options before any work starts.',
  },
  {
    question: 'Can I wait at the lounge while my bike is serviced?',
    answer: 'Absolutely. For general maintenance (oil changes, brake pad replacement, tyre fitting), you can relax in our luxury lounge. We offer artisanal espresso, charging stations, high-speed WiFi, and a double-glazed viewing window overlooking the master workshop bays.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-secondary-bg py-24 md:py-32 border-y border-border-custom">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Common Inquiries
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
              Frequently Asked Questions.
            </h2>
            <p className="font-sans text-text-secondary text-lg leading-relaxed">
              Have specific questions about our technical capabilities or scheduling? Explore our FAQs or reach out directly to speak with a service specialist.
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[20px] border border-border-custom overflow-hidden transition-all duration-300 hover:border-accent"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                  >
                    <h3 className="font-heading font-semibold text-text-primary text-base md:text-lg pr-4">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center shrink-0 text-text-primary transition-colors group-hover:bg-btn-primary group-hover:text-white">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-8 border-t border-border-custom pt-4">
                          <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
