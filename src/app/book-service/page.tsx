'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkshopServices from '../components/WorkshopServices';
import { Wrench, Calendar, Clock, CheckCircle2, Bike } from 'lucide-react';

function ServiceBookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || 'general-service';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: 'Royal Enfield',
    model: '',
    regNumber: '',
    serviceType: preselectedService,
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24">
      <Navbar />

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
          {!submitted ? (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5" /> Book Workshop Appointment
              </div>
              <h1 className="text-3xl font-heading font-black text-gray-900 tracking-tight mb-2">
                Schedule Service for Your Bike
              </h1>
              <p className="text-xs text-gray-500 mb-8">
                Factory certified technicians using genuine OEM parts & digital OBD diagnostics.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vikram Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Bike Brand *
                    </label>
                    <select
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer"
                    >
                      <option value="Royal Enfield">Royal Enfield</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="Honda">Honda</option>
                      <option value="KTM">KTM</option>
                      <option value="TVS">TVS</option>
                      <option value="Bajaj">Bajaj</option>
                      <option value="Hero">Hero</option>
                      <option value="Suzuki">Suzuki</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Bike Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meteor 350"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Reg Number
                    </label>
                    <input
                      type="text"
                      placeholder="KA-01-AB-1234"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Service Package *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer"
                    >
                      <option value="general-service">General Service (₹499)</option>
                      <option value="engine-service">Engine Tuning & OBD (₹1,499)</option>
                      <option value="oil-change">Synthetic Oil Change (₹399)</option>
                      <option value="brake-service">Brake Bleed & Service (₹599)</option>
                      <option value="detailing">Foam Wash & Ceramic (₹799)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-red-600" /> Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-red-600" /> Preferred Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none cursor-pointer"
                    >
                      <option value="09:00 AM">Morning (09:00 AM)</option>
                      <option value="11:30 AM">Midday (11:30 AM)</option>
                      <option value="02:30 PM">Afternoon (02:30 PM)</option>
                      <option value="05:00 PM">Evening (05:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Specific Issues / Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any unusual noise, brake stiffness, or oil seepage..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg shadow-red-600/20"
                >
                  Confirm Workshop Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-heading font-black text-gray-900 mb-2">
                Service Slot Booked!
              </h2>
              <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                Thank you <span className="font-bold text-gray-900">{formData.name}</span>. A booking confirmation SMS and WhatsApp message has been dispatched to <span className="font-bold text-gray-900">{formData.phone}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-gray-900 text-white font-bold text-xs uppercase rounded-xl"
              >
                Book Another Service
              </button>
            </div>
          )}
        </div>

        <div className="mt-16">
          <WorkshopServices />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function BookServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 text-center">Loading booking form...</div>}>
      <ServiceBookingForm />
    </Suspense>
  );
}
