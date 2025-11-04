import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import UseCases from './components/UseCases';
import Execution from './components/Execution';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-manrope">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-white" />
              <span className="text-sm font-semibold tracking-wide">Vikara</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
              <a href="#expertise" className="hover:text-white">Expertise</a>
              <a href="#use-cases" className="hover:text-white">Use cases</a>
              <a href="#execution" className="hover:text-white">Execution</a>
            </nav>
            <a
              href="mailto:hello@vikara.ai?subject=Let%27s%20talk%20about%20AI"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Expertise />
        <UseCases />
        <Execution />
      </main>

      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Vikara. Designed for ambitious teams shaping the future with AI.
      </footer>
    </div>
  );
}

export default App;
