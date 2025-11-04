import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient vignette to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-300">AI Strategy • Systems • Execution</p>
        <h1 className="font-manrope text-4xl leading-tight sm:text-5xl md:text-6xl font-semibold">
          Transform your business with AI. <span className="text-zinc-300">Guided by experts</span> who’ve built the future before it was cool.
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300">
          We help forward-looking companies unlock AI’s real potential — from strategy to execution.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@vikara.ai?subject=Let%27s%20talk%20about%20AI"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Let’s talk
          </a>
          <a
            href="#use-cases"
            className="rounded-full border border-white/30 px-6 py-3 text-white/90 backdrop-blur-sm hover:border-white/60 hover:text-white"
          >
            Explore use cases
          </a>
        </div>
      </div>
    </section>
  );
}
