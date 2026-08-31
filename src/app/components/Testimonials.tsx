'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Arun Kumar',
    bike: 'Royal Enfield Classic 350',
    rating: 5,
    comment: 'Bought my pre-owned Classic 350 from RideHub. The bike was in pristine 96/100 condition with full service history and instant RC transfer. The team made the buying process smooth and transparent.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
  },
  {
    name: 'Vishnu Prasad',
    bike: 'Yamaha R15 V4',
    rating: 5,
    comment: 'Very transparent and trustworthy dealership. Got my R15 at the best market price with zero hidden charges. Their 150-point inspection gave me complete peace of mind!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
  },
  {
    name: 'Nikhil S.',
    bike: 'KTM Duke 250',
    rating: 5,
    comment: 'The workshop service center here is top-notch. They serviced my Duke 250 like their own bike. OBD scan reports and chain servicing were done flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
  },
  {
    name: 'Akshay Babu',
    bike: 'Bajaj Dominar 400',
    rating: 5,
    comment: 'Best place to buy used bikes in town. Professional team, fast financing approval, and great post-purchase warranty support.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120&h=120',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              Rider Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 tracking-tight">
              What Our <span className="text-red-600">Riders Say</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Real stories from happy buyers and workshop clients across South India.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-red-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-red-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-gray-200" />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 text-sm">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-red-600">
                        {rev.bike}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
