'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Zap,
  FileCheck,
  Clock,
  Truck,
  Sparkles,
  Award,
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'OEM Genuine Parts',
    desc: 'Original components backed by manufacturer warranty, preserving your motorcycle’s lineage.',
  },
  {
    icon: Cpu,
    title: 'Computer Diagnostics',
    desc: 'Deep level ECU mapping, electronics scanning, and fault isolation diagnostics.',
  },
  {
    icon: Zap,
    title: 'Performance Specialists',
    desc: 'Expert mechanics trained to build, tune, and rebuild high-end superbikes and track machinery.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Support',
    desc: 'Hassle-free insurance checkups, detailed accident damage reporting, and direct processing.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    desc: 'Fast lane options for regular synthetic oil changes, tire replacement, and quick tune-ups.',
  },
  {
    icon: Truck,
    title: 'Doorstep Pickup',
    desc: 'Your vehicle collected in custom enclosed trailers and returned to you immaculate.',
  },
  {
    icon: Award,
    title: 'Workmanship Warranty',
    desc: 'Every mechanical adjustment, seal, and overhaul is fully guaranteed by our certified seal.',
  },
  {
    icon: Sparkles,
    title: 'Ceramic & Bike Spa',
    desc: 'Advanced aerospace surface seal protection and detailed aesthetic paint restoration.',
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Workshop Advantages
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Engineered To Excel.
          </h2>
          <p className="font-sans text-text-secondary text-lg">
            We operate at the highest standards of safety, quality, and technical expertise to deliver peace of mind for every owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 rounded-[20px] border border-border-custom bg-white hover:border-btn-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary-bg flex items-center justify-center text-btn-primary">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
