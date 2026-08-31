'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Settings,
  Gauge,
  Cpu,
  Activity,
  Disc,
  Terminal,
  Droplet,
  Shield,
  Battery,
  Sparkles,
  Paintbrush,
  Truck,
  FileCheck,
  ClipboardCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'General Service',
    description: 'Comprehensive 45-point inspection, fluid checks, and fine-tuning to keep your bike in prime condition.',
  },
  {
    icon: Settings,
    title: 'Major Service',
    description: 'Deep mechanical analysis, valve clearance tuning, spark plug replacement, and complete system overhaul.',
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description: 'Bespoke engine remapping, dyno runs, and fuel injection mapping customized for your riding style.',
  },
  {
    icon: Cpu,
    title: 'Engine Rebuild',
    description: 'Precision component assembly, boring, honing, and blueprinting using strict OEM tolerances.',
  },
  {
    icon: Activity,
    title: 'Suspension Setup',
    description: 'Bespoke rider sag calculations, damping calibration, fluid renewal, and fork/shock revalving.',
  },
  {
    icon: Disc,
    title: 'Brake System',
    description: 'Calliper rebuilds, master cylinder servicing, braided line installs, and racing fluid flushing.',
  },
  {
    icon: Terminal,
    title: 'ECU Diagnostics',
    description: 'Manufacturer-level digital scan, error log clearance, sensor tests, and firmware updates.',
  },
  {
    icon: Droplet,
    title: 'Oil Change',
    description: 'Premium Motul synthetic oils and OEM filters matched specifically to your high-performance engine.',
  },
  {
    icon: Shield,
    title: 'Tyre Replacement',
    description: 'Laser wheel alignment, digital balancing, and elite compound tyre installations (Pirelli, Michelin).',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Ultra-lightweight lithium battery installations and electrical charging system output diagnostics.',
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    description: 'High-temp aerospace grade ceramic shield defending paintwork and exhaust headers from weathering.',
  },
  {
    icon: Paintbrush,
    title: 'Bike Detailing',
    description: 'Multi-stage clay bar paint correction, hand polishing, and deep engine bay degreasing.',
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    description: 'Enclosed luxury custom trailer transport of your motorcycle to and from our workshop facility.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims',
    description: 'Complete accident damage reports, OEM pricing estimations, and direct coordination with insurers.',
  },
  {
    icon: ClipboardCheck,
    title: 'Pre-Purchase Inspection',
    description: 'Pre-buy diagnostic report including compression testing, frame scanning, and historic check.',
  },
  {
    icon: Zap,
    title: 'Performance Upgrades',
    description: 'Exhaust installations, quickshifter fitting, forged wheels, and high-performance clutch kits.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary-bg py-24 md:py-32 border-y border-border-custom">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Bespoke Services
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
            Elite Mechanical Craftsmanship.
          </h2>
          <p className="font-sans text-text-secondary text-lg">
            We handle everything from regular maintenance to bespoke engine blueprinting with strict adherence to manufacturer specifications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="bg-white p-8 rounded-[20px] border border-border-custom hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-bg flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors duration-500">
                    <IconComponent className="w-6 h-6 text-btn-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-xs font-bold text-btn-primary hover:text-accent uppercase tracking-widest transition-colors duration-300"
                >
                  Book Service <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
