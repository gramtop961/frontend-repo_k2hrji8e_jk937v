import { Brain, Shield, Zap, Workflow } from 'lucide-react';

const features = [
  {
    title: 'Reasoning Engine',
    description:
      'Multi-step reasoning with memory lets agents plan, adapt, and deliver reliable outcomes.',
    icon: Brain,
  },
  {
    title: 'Tooling & Data',
    description:
      'Connect APIs, knowledge bases, and business tools. Bring your own models and vector stores.',
    icon: Workflow,
  },
  {
    title: 'Speed & Scale',
    description:
      'Parallelized execution and caching to ship outcomes in seconds at any scale.',
    icon: Zap,
  },
  {
    title: 'Security & Guardrails',
    description:
      'Policy controls, audit trails, and environment isolation keep you in control.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="platform" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to ship with AI
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A modular platform that lets you compose agents, tools, and data into production-ready workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
