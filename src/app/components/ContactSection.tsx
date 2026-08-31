'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldAlert, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Column */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                Connect With Us
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
                Visit Our Facility.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed">
                Experience the standard in luxury motorcycle maintenance. Speak with our concierge or visit our secure state-of-the-art workshop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-widest">
                    Address
                  </h4>
                  <p className="font-sans text-sm text-text-secondary mt-2 leading-relaxed">
                    100 Performance Way <br />
                    Suite A, Silicon Valley <br />
                    CA 94025
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-widest">
                    Working Hours
                  </h4>
                  <p className="font-sans text-sm text-text-secondary mt-2 leading-relaxed">
                    Monday - Friday: 08:00 - 18:00 <br />
                    Saturday: 09:00 - 16:00 <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-widest">
                    Direct Contact
                  </h4>
                  <p className="font-sans text-sm text-text-secondary mt-2 leading-relaxed">
                    Phone: +1 (800) 555-AURA <br />
                    WhatsApp: +1 (800) 555-9000 <br />
                    Email: concierge@auramotorsport.com
                  </p>
                </div>
              </div>

              {/* Emergency Service */}
              <div className="flex gap-4 items-start bg-accent/5 p-4 rounded-2xl border border-accent/20">
                <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-1 animate-pulse" />
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-widest">
                    24/7 Breakdown Dispatch
                  </h4>
                  <p className="font-sans text-xs text-text-secondary mt-2 leading-normal">
                    Emergency enclosed towing and roadside logistics dispatch: <br />
                    <strong>+1 (800) 999-TOWS</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border-custom flex gap-6 items-center">
              <span className="font-sans text-xs font-bold text-text-secondary uppercase tracking-wider">
                Follow Us:
              </span>
              <a href="#" className="font-sans text-sm text-text-secondary hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="font-sans text-sm text-text-secondary hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="font-sans text-sm text-text-secondary hover:text-accent transition-colors">YouTube</a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-secondary-bg rounded-[20px] overflow-hidden border border-border-custom relative group shadow-lg">
            {/* Embed stylized map or beautiful graphic placeholder */}
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none z-10" />
            <iframe
              title="Aura Motorsport Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101238.31952296068!2d-122.18182283083656!3d37.423984180479135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc8d0e515d97%3A0x1ff26a6ad48a97c6!2sStanford%20University!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) invert(0)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-5 py-2.5 bg-btn-primary hover:bg-accent text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300 shadow-xl"
            >
              Get Directions <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
