'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Book Service', desc: 'Secure your appointment online or speak with a personal service adviser.' },
  { step: '02', title: 'Detailed Inspection', desc: 'A thorough visual and mechanical check-in logging all client preferences.' },
  { step: '03', title: 'Digital Diagnosis', desc: 'Dealership-grade scan reports measuring battery, ECU, emission, and mechanical tolerances.' },
  { step: '04', title: 'Adviser Approval', desc: 'Receive an itemized digital work order detailing photos and options before authorization.' },
  { step: '05', title: 'Master Repair', desc: 'Work is carried out by certified master technicians using strictly OEM components.' },
  { step: '06', title: 'Quality Check', desc: 'Dual-technician verification checking torque specs, software updates, and fluid levels.' },
  { step: '07', title: 'Road Test', desc: 'A real-world test run under varying loads to ensure suspension, mapping, and handling are correct.' },
  { step: '08', title: 'White-Glove Delivery', desc: 'Your detailed bike is handed back to you at our showroom lounge or custom transported.' },
];

export default function Workflow() {
  return (
    <section id="workflow" className="bg-secondary-bg py-24 md:py-32 border-y border-border-custom overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Our Process
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
            The Aura Service Standard.
          </h2>
          <p className="font-sans text-text-secondary text-lg">
            Every bike that enters our facility undergoes a structured, multi-step quality protocol that ensures precision results.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-[35px] left-8 right-8 h-[1px] bg-border-custom hidden xl:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex flex-col items-start space-y-4 group"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-border-custom group-hover:border-accent flex items-center justify-center transition-all duration-300">
                  <span className="font-heading font-bold text-sm text-accent group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
