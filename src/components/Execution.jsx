import React from 'react';
import { Compass, Bot, Cog, Sparkles, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Consulting',
    desc:
      'From idea to impact — we help you redefine your workflow to create measurable value.',
  },
  {
    icon: Bot,
    title: 'Process Automation & Efficiency',
    desc: 'Eliminate repetitive workflows with intelligent automation.',
  },
  { icon: Cog, title: 'Custom AI Solutions', desc: 'Models and systems tailored to your data and goals.' },
  {
    icon: Sparkles,
    title: 'GenAI Enablement',
    desc: 'Empower your teams with ChatGPT, Gemini, or custom copilots that work.',
  },
  {
    icon: GraduationCap,
    title: 'AI Upskilling Workshops',
    desc: 'Equip your workforce with practical AI literacy and tools.',
  },
];

export default function Execution() {
  return (
    <section id="execution" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl sm:text-4xl font-semibold">How we execute</h2>
          <p className="mt-2 text-zinc-400">End-to-end partnership from strategy to scale.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
