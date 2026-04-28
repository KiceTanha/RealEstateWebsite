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
    <div className="card-dark p-10">
      <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>CALCULATOR</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#F5EDD6', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '2rem' }}>Mortgage Calculator</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { label: 'HOME PRICE ($)', value: price, setter: setPrice, step: 10000 },
            { label: 'DOWN PAYMENT ($)', value: down, setter: setDown, step: 5000 },
            { label: 'INTEREST RATE (%)', value: rate, setter: setRate, step: 0.1 },
            { label: 'AMORTIZATION (YEARS)', value: years, setter: setYears, step: 1 },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label style={{ fontFamily: 'Montserrat', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#C9A84C', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
              <input type="number" value={value} onChange={e => setter(Number(e.target.value))} step={step} className="input-dark" />
            </div>
          ))}
        </div>
        <div style={{ background: '#080808', border: '1px solid #2A2A2A', padding: '2rem' }} className="flex flex-col justify-center gap-6">
          <div>
            <p style={{ color: '#555', fontSize: '0.6rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>MONTHLY PAYMENT</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: '#C9A84C', fontWeight: 300 }}>${fmt(monthly)}</p>
          </div>
          <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '1.5rem' }} className="space-y-3">
            {[
              { label: 'LOAN AMOUNT', value: `$${principal.toLocaleString()}` },
              { label: 'DOWN PAYMENT', value: `${((down / price) * 100).toFixed(1)}%` },
              { label: 'TOTAL INTEREST', value: `$${fmt((monthly * n) - principal)}` },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between">
                <span style={{ color: '#444', fontSize: '0.6rem', letterSpacing: '0.15em' }}>{label}</span>
                <span style={{ color: '#888', fontSize: '0.75rem' }}>{value}</span>
              </div>
            ))}
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
    <div className="card-dark p-10" id="proforma">
      <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>INVESTMENT ANALYSIS</p>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#F5EDD6', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '2rem' }}>Proforma Calculator</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { label: 'PURCHASE PRICE ($)', value: purchasePrice, setter: setPurchasePrice, step: 10000 },
            { label: 'MONTHLY RENT ($)', value: monthlyRent, setter: setMonthlyRent, step: 50 },
            { label: 'MONTHLY EXPENSES ($)', value: expenses, setter: setExpenses, step: 50 },
            { label: 'DOWN PAYMENT (%)', value: downPct, setter: setDownPct, step: 1 },
            { label: 'INTEREST RATE (%)', value: rate, setter: setRate, step: 0.1 },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label style={{ fontFamily: 'Montserrat', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#C9A84C', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
              <input type="number" value={value} onChange={e => setter(Number(e.target.value))} step={step} className="input-dark" />
            </div>
          ))}
        </div>
        <div style={{ background: '#080808', border: '1px solid #2A2A2A', padding: '2rem' }} className="flex flex-col justify-center gap-6">
          <div>
            <p style={{ color: '#555', fontSize: '0.6rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>MONTHLY CASH FLOW</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: cashFlow >= 0 ? '#4ade80' : '#f87171' }}>
              ${fmt(cashFlow)}
            </p>
          </div>
          <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '1.5rem' }} className="space-y-3">
            {[
              { label: 'CAP RATE', value: `${capRate.toFixed(2)}%` },
              { label: 'CASH-ON-CASH', value: `${cashOnCash.toFixed(2)}%` },
              { label: 'NOI (ANNUAL)', value: `$${noi.toLocaleString()}` },
              { label: 'MORTGAGE/MO', value: `$${fmt(mortgage)}` },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between">
                <span style={{ color: '#444', fontSize: '0.6rem', letterSpacing: '0.15em' }}>{label}</span>
                <span style={{ color: '#C9A84C', fontSize: '0.75rem' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: '#0A0A0A' }}>
      <div className="py-20 px-6 text-center" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>TOOLS</p>
        <h1 className="section-title">Financial Calculators</h1>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <MortgageCalculator />
        <ProformaCalculator />
      </div>
    </div>
  );
}
