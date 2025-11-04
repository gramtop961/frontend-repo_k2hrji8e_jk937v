export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Logo" className="h-7 w-7" />
            <div>
              <p className="font-semibold">Vikara-inspired</p>
              <p className="text-sm text-slate-500">AI agent workflows for modern teams</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
