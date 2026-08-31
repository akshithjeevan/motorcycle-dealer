'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number (min 10 digits)'),
  email: z.string().email('Please enter a valid email address'),
  bikeBrand: z.string().min(1, 'Please select a brand'),
  bikeModel: z.string().min(1, 'Please enter your motorcycle model'),
  bikeYear: z.string().regex(/^(19|20)\d{2}$/, 'Please enter a valid 4-digit year (e.g., 2024)'),
  serviceType: z.string().min(1, 'Please select a service type'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time window'),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Premium Service Request Submitted:', data);
    setIsSuccess(true);
    reset();
  };

  return (
    <section id="booking" className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                Service Booking
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6">
                Reserve Your Appointment.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed">
                Schedule a consultation or mechanical service. Our concierge team will contact you within 2 hours to confirm your time slot and logistics options.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border-custom">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-secondary-bg flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-wider">
                    Flexible Scheduling
                  </h4>
                  <p className="font-sans text-sm text-text-secondary mt-1">
                    Book up to 6 months in advance. Free rescheduling up to 24 hours prior.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-secondary-bg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm uppercase tracking-wider">
                    Immediate Support
                  </h4>
                  <p className="font-sans text-sm text-text-secondary mt-1">
                    Need roadside assistance or emergency engine repairs? Call us directly for immediate logistics dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-secondary-bg p-8 md:p-12 rounded-[20px] border border-border-custom relative overflow-hidden">
            {isSuccess ? (
              <div className="py-16 text-center flex flex-col items-center justify-center space-y-6">
                <CheckCircle className="w-16 h-16 text-success animate-bounce" />
                <h3 className="font-heading font-bold text-3xl text-text-primary">
                  Reservation Received
                </h3>
                <p className="font-sans text-text-secondary text-base max-w-md mx-auto">
                  Thank you for booking with Aura Motorsport. A service adviser is reviewing your vehicle details and will contact you shortly to confirm your booking.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-btn-primary hover:bg-accent text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                >
                  Book Another Vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., John Doe"
                      {...register('fullName')}
                      className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 font-semibold">{errors.fullName.message}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., +1 234 567 8900"
                      {...register('phone')}
                      className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., johndoe@example.com"
                    {...register('email')}
                    className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Brand */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Brand
                    </label>
                    <select
                      {...register('bikeBrand')}
                      className="bg-white px-4 py-3.5 rounded-xl border border-border-custom text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select Brand</option>
                      <option value="Ducati">Ducati</option>
                      <option value="BMW Motorrad">BMW Motorrad</option>
                      <option value="Triumph">Triumph</option>
                      <option value="Harley-Davidson">Harley-Davidson</option>
                      <option value="Honda">Honda</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="Kawasaki">Kawasaki</option>
                      <option value="KTM">KTM</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.bikeBrand && (
                      <span className="text-xs text-red-500 font-semibold">{errors.bikeBrand.message}</span>
                    )}
                  </div>

                  {/* Model */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Model
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Panigale V4 S"
                      {...register('bikeModel')}
                      className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm"
                    />
                    {errors.bikeModel && (
                      <span className="text-xs text-red-500 font-semibold">{errors.bikeModel.message}</span>
                    )}
                  </div>

                  {/* Year */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2024"
                      {...register('bikeYear')}
                      className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm"
                    />
                    {errors.bikeYear && (
                      <span className="text-xs text-red-500 font-semibold">{errors.bikeYear.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Service Type */}
                  <div className="flex flex-col space-y-2 md:col-span-1">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Service Type
                    </label>
                    <select
                      {...register('serviceType')}
                      className="bg-white px-4 py-3.5 rounded-xl border border-border-custom text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select Service</option>
                      <option value="General Service">General Service</option>
                      <option value="Major Service">Major Service</option>
                      <option value="Performance Tuning">Performance Tuning</option>
                      <option value="Diagnostics">ECU Diagnostics</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                      <option value="Detailing">Bike Spa / Detailing</option>
                      <option value="Other">Other Repairs</option>
                    </select>
                    {errors.serviceType && (
                      <span className="text-xs text-red-500 font-semibold">{errors.serviceType.message}</span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate')}
                      className="bg-white px-5 py-3 rounded-xl border border-border-custom text-sm cursor-pointer"
                    />
                    {errors.preferredDate && (
                      <span className="text-xs text-red-500 font-semibold">{errors.preferredDate.message}</span>
                    )}
                  </div>

                  {/* Time */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                      Preferred Time
                    </label>
                    <select
                      {...register('preferredTime')}
                      className="bg-white px-4 py-3.5 rounded-xl border border-border-custom text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select Time Window</option>
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 - 15:00)</option>
                      <option value="Late Afternoon (15:00 - 18:00)">Late Afternoon (15:00 - 18:00)</option>
                    </select>
                    {errors.preferredTime && (
                      <span className="text-xs text-red-500 font-semibold">{errors.preferredTime.message}</span>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-xs font-bold text-text-primary uppercase tracking-wider">
                    Additional Instructions / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe any specific issues, aftermarket upgrades installed, or customization requests..."
                    {...register('notes')}
                    className="bg-white px-5 py-3.5 rounded-xl border border-border-custom text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-btn-primary hover:bg-accent text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-btn-primary/10 hover:shadow-accent/20 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Requesting Appointment...' : 'Schedule Premium Service'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
