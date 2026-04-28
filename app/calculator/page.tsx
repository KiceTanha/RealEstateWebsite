'use client';
import { useState } from 'react';

function MortgageCalculator() {
  const [price, setPrice] = useState(500000);
  const [down, setDown] = useState(100000);
  const [rate, setRate] = useState(5.5);
  const [years, setYears] = useState(25);

  const principal = price - down;
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const fmt = (n: number) => isNaN(n) ? '—' : Math.round(n).toLocaleString();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="font-serif text-2xl font-bold mb-6">Mortgage Calculator</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { label: 'Home Price ($)', value: price, setter: setPrice, step: 10000 },
            { label: 'Down Payment ($)', value: down, setter: setDown, step: 5000 },
            { label: 'Interest Rate (%)', value: rate, setter: setRate, step: 0.1 },
            { label: 'Amortization (years)', value: years, setter: setYears, step: 1 },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
              <input type="number" value={value} onChange={e => setter(Number(e.target.value))} step={step}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500" />
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 rounded-xl p-6 flex flex-col justify-center gap-4">
          <div>
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <p className="font-serif text-4xl font-bold text-yellow-600">${fmt(monthly)}</p>
          </div>
          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Loan Amount</span><span className="font-semibold">${principal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Down Payment</span><span className="font-semibold">{((down / price) * 100).toFixed(1)}%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Total Interest</span><span className="font-semibold">${fmt((monthly * n) - principal)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProformaCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [monthlyRent, setMonthlyRent] = useState(2500);
  const [expenses, setExpenses] = useState(800);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(5.5);

  const down = purchasePrice * (downPct / 100);
  const loan = purchasePrice - down;
  const monthlyRate = rate / 100 / 12;
  const n = 25 * 12;
  const mortgage = loan * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const noi = (monthlyRent - expenses) * 12;
  const capRate = (noi / purchasePrice) * 100;
  const cashFlow = monthlyRent - expenses - mortgage;
  const cashOnCash = ((cashFlow * 12) / down) * 100;
  const fmt = (n: number) => isNaN(n) ? '—' : Math.round(n).toLocaleString();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8" id="proforma">
      <h2 className="font-serif text-2xl font-bold mb-2">Investment Proforma</h2>
      <p className="text-gray-500 text-sm mb-6">Analyze the return on an investment property</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { label: 'Purchase Price ($)', value: purchasePrice, setter: setPurchasePrice, step: 10000 },
            { label: 'Monthly Rent ($)', value: monthlyRent, setter: setMonthlyRent, step: 50 },
            { label: 'Monthly Expenses ($)', value: expenses, setter: setExpenses, step: 50 },
            { label: 'Down Payment (%)', value: downPct, setter: setDownPct, step: 1 },
            { label: 'Interest Rate (%)', value: rate, setter: setRate, step: 0.1 },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
              <input type="number" value={value} onChange={e => setter(Number(e.target.value))} step={step}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500" />
            </div>
          ))}
        </div>
        <div className="bg-[#0f0f1a] text-white rounded-xl p-6 flex flex-col justify-center gap-4">
          <div>
            <p className="text-sm text-gray-400">Monthly Cash Flow</p>
            <p className={`font-serif text-4xl font-bold ${cashFlow >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ${fmt(cashFlow)}
            </p>
          </div>
          <div className="border-t border-gray-700 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-400">Cap Rate</span><span className="font-semibold text-yellow-400">{capRate.toFixed(2)}%</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Cash-on-Cash</span><span className="font-semibold text-yellow-400">{cashOnCash.toFixed(2)}%</span></div>
            <div className="flex justify-between"><span className="text-gray-400">NOI (annual)</span><span className="font-semibold">${noi.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Mortgage/mo</span><span className="font-semibold">${fmt(mortgage)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-[#0f0f1a] text-white py-14 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Financial Calculators</h1>
        <p className="text-gray-400">Make informed decisions with the right numbers</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <MortgageCalculator />
        <ProformaCalculator />
      </div>
    </div>
  );
}
