import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import UseCases from './components/UseCases';
import Execution from './components/Execution';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-manrope">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm backdrop-blur-md">
            <a href="#top" className="flex items-center gap-2">
              {/* Replace the dot with your logo by uploading /public/logo.svg and swapping in an img tag */}
              <div className="h-6 w-6 rounded-full bg-black" />
              <span className="text-sm font-semibold tracking-wide">Vikara</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
              <a href="#expertise" className="hover:text-black">Expertise</a>
              <a href="#use-cases" className="hover:text-black">Use cases</a>
              <a href="#execution" className="hover:text-black">Execution</a>
            </nav>
            <a
              href="mailto:hello@vikara.ai?subject=Let%27s%20talk%20about%20AI"
              className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
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

      <footer className="border-t border-black/10 bg-white py-10 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Vikara. Designed for ambitious teams shaping the future with AI.
      </footer>
    </div>
  );
}

export default App;
