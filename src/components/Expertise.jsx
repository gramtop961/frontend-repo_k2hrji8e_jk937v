import React from 'react';
import { Brain, Workflow, Wand2, Layers, Wrench } from 'lucide-react';

const items = [
  { icon: Brain, title: 'Building your team “AI-ready”' },
  { icon: Workflow, title: 'Redefining workflows by embedding AI' },
  { icon: Wand2, title: 'Generative AI Integration' },
  { icon: Layers, title: 'AI across platforms (CRM / SCM / HRMS)' },
  { icon: Wrench, title: 'Engineering & capability enhancement' },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl sm:text-4xl font-semibold">Expertise</h2>
          <p className="mt-2 text-zinc-600">From workforce readiness to deep platform integration.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-black/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                <Icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="font-medium leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
