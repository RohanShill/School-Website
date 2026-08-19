import Image from 'next/image';
import { Bus, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { schoolData } from '@/data/schoolData';

const facilityHighlights = [
  { icon: ShieldCheck, title: 'Student Safety', description: 'CCTV monitoring, secure access systems, and trained campus support staff ensure a safe environment.' },
  { icon: Sparkles, title: 'Smart Technologies', description: 'Digital classrooms, projection tools, and device-enabled teaching foster active engagement.' },
  { icon: Bus, title: 'Transport Support', description: 'Reliable school transport services with route planning for safety and convenience.' },
];

export default function FacilitiesPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-10 text-center">
        <span className="badge-pill">Campus Facilities</span>
        <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">Spaces that inspire learning and wellbeing</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {schoolData.facilities.map((facility) => (
          <div key={facility.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            <div className="relative h-60">
              <Image src={facility.image} alt={facility.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${facility.accent}`}>{facility.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 card-surface p-8">
        <h2 className="text-2xl font-bold text-brand-navy">Campus Experience</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {facilityHighlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-brand-blue/10 p-3 text-brand-blue">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-brand-navy p-8 text-white shadow-soft">
        <h2 className="text-2xl font-bold">A campus built for growth and safety</h2>
        <ul className="mt-6 space-y-4 text-slate-200">
          {[ 'Airy classrooms with smart boards and natural light', 'Science and digital labs with safe experimentation zones', 'School transport, counseling support, and student-first care' ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm md:text-base">
              <CheckCircle2 className="mt-0.5 text-brand-gold" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
