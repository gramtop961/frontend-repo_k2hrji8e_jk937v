import React from 'react';

const revenue = [
  'Digital Marketing Agent',
  'Sales Agents',
  'Sales Training Agent',
  'Quality Check of the Sales Calls',
  'Renewal Agents',
];

const cost = [
  'Feedback Agents',
  'Quality Check of the Service / Support Calls',
  'Compliance checks',
  'Workflow Optimisation Agent',
];

const product = [
  'Conversational AI',
  'Recommendation / Curation / Personalisation',
  'Demand / Supply Forecasting',
  'Fraud Detection',
  'Analytics & Insights',
];

function Bucket({ title, items }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 p-6">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-zinc-700">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl sm:text-4xl font-semibold">Use cases</h2>
          <p className="mt-2 text-zinc-600">High-impact outcomes across revenue, cost, and product.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Bucket title="Increasing revenue" items={revenue} />
          <Bucket title="Decreasing the cost" items={cost} />
          <Bucket title="Embedding AI in the product" items={product} />
        </div>
      </div>
    </section>
  );
}
