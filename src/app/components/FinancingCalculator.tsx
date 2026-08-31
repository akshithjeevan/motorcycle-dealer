'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FinancingCalculator() {
  const [price, setPrice] = useState(165000);
  const [downPayment, setDownPayment] = useState(35000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenureMonths, setTenureMonths] = useState(36);

  const loanAmount = Math.max(0, price - downPayment);
  const monthlyInterestRate = interestRate / 12 / 100;
  
  const calculateEMI = () => {
    if (loanAmount <= 0) return 0;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayable = monthlyEMI * tenureMonths + downPayment;
  const totalInterest = Math.max(0, monthlyEMI * tenureMonths - loanAmount);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5" /> Instant Finance Calculator
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight">
                Ride Now. <span className="text-red-500">Pay Monthly.</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Flexible EMI options starting at just 8.99% interest with 0 processing fee partners.
              </p>
            </div>

            {/* Slider 1: Bike Price */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                <span>Motorcycle Price</span>
                <span className="text-red-400 font-mono text-base">₹{price.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="400000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                <span>Down Payment</span>
                <span className="text-red-400 font-mono text-base">₹{downPayment.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="10000"
                max={price * 0.8}
                step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            {/* Tenure & Rate Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Loan Tenure (Months)
                </label>
                <div className="flex gap-2">
                  {[12, 24, 36, 48].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenureMonths(m)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                        tenureMonths === m
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {m}m
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Interest Rate (p.a.)
                </label>
                <select
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-gray-800 border border-gray-700 rounded-xl text-xs font-bold text-white outline-none cursor-pointer"
                >
                  <option value={8.99}>8.99% (Special HDFC/IDFC rate)</option>
                  <option value={9.5}>9.50% (Standard Bank Rate)</option>
                  <option value={11.0}>11.00% (Flexible Approval)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                Estimated Monthly Payment
              </span>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-black font-heading text-white">
                  ₹{monthlyEMI.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-400">/ month</span>
              </div>

              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Loan Amount:</span>
                  <span className="font-mono font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Total Interest:</span>
                  <span className="font-mono font-bold text-white">₹{totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Total Payable:</span>
                  <span className="font-mono font-bold text-red-400">₹{totalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Instant paperless approval in 30 minutes</span>
              </div>
              <a
                href="/used-bikes"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-red-600/30"
              >
                Apply for Loan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
