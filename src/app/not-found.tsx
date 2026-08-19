import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="card-surface max-w-lg p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">404</p>
        <h1 className="mt-4 text-4xl font-black text-brand-navy">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-blue px-5 py-3 font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
