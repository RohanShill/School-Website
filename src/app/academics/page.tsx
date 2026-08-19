import { BookCopy, CheckCircle2, ClipboardCheck, GraduationCap, Monitor, Utensils, Users, Award } from 'lucide-react';
import { schoolData } from '@/data/schoolData';

const evaluationDetails = [
  'Continuous & Comprehensive Evaluation (CCE) as per JCERT guidelines.',
  'Formative assessments, periodic unit tests, and classroom participation tracking.',
  'Compulsory ICT Computer Practical tests for Classes 6, 7 & 8.',
  'Science project exhibitions and activity-based learning assessments.',
];

export default function AcademicsPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-10 text-center">
        <span className="badge-pill">Academics</span>
        <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">Academic excellence across every stage</h1>
        <p className="mt-2 text-slate-600">JCERT Curriculum & NEP 2020 Framework &bull; Classes I to VIII</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {schoolData.academicWings.map((wing) => (
          <div key={wing.title} className="card-surface p-6">
            <div className="mb-4 inline-flex rounded-xl bg-brand-gold/15 p-3 text-brand-navy">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">{wing.title}</h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-brand-blue">{wing.ageGroup}</p>
            <p className="mt-4 text-sm font-semibold text-brand-navy">{wing.focus}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{wing.description}</p>
          </div>
        ))}
      </div>

      {/* ICT Curriculum Section */}
      <section className="mt-16 card-surface p-8">
        <div className="mb-6 flex items-center gap-3">
          <Monitor className="text-brand-blue" size={24} />
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">ICT Computer Lab Curriculum (Classes 6, 7 & 8)</h2>
            <p className="text-sm text-slate-500">10+ Computer Workstations &bull; Broadband Internet &bull; Smart Panel</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {schoolData.ictCurriculum.map((item) => (
            <div key={item.classLevel} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue mb-2">
                {item.classLevel}
              </span>
              <p className="text-sm leading-6 text-slate-700">{item.topics}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PM POSHAN Weekly Menu Section */}
      <section className="mt-16 card-surface p-8">
        <div className="mb-6 flex items-center gap-3">
          <Utensils className="text-brand-gold" size={24} />
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">PM POSHAN (Mid-Day Meal) — Weekly Menu</h2>
            <p className="text-sm text-slate-500">100% daily coverage with fresh, hot, and nutritionally balanced meals</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Day (दिन)</th>
                <th className="px-4 py-3 font-semibold">Determined Menu (निर्धारित मेनू)</th>
                <th className="px-4 py-3 font-semibold">Nutrition Category (पोषण श्रेणी)</th>
              </tr>
            </thead>
            <tbody>
              {schoolData.pmPoshanMenu.map((item) => (
                <tr key={item.day} className="border-t border-slate-200 bg-white hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-brand-navy">
                    {item.day} <span className="text-xs text-slate-500">({item.dayHindi})</span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{item.menu}</td>
                  <td className="px-4 py-3 font-medium text-brand-blue">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bal Sansad (Student Council) */}
      <section className="mt-16 card-surface p-8">
        <div className="mb-6 flex items-center gap-3">
          <Users className="text-brand-navy" size={24} />
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">बाल संसद (Bal Sansad - Student Council)</h2>
            <p className="text-sm text-slate-500">Fostering self-reliance, leadership, and school governance participation</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schoolData.balSansad.map((role) => (
            <div key={role.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-bold text-brand-navy">{role.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{role.responsibilities}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Streams & Evaluation */}
      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="card-surface p-8">
          <div className="mb-5 flex items-center gap-3">
            <BookCopy className="text-brand-blue" />
            <h2 className="text-2xl font-bold text-brand-navy">Academic Curriculum</h2>
          </div>
          <div className="space-y-4">
            {schoolData.streams.map((stream) => (
              <div key={stream.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-brand-navy">{stream.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-8">
          <div className="mb-5 flex items-center gap-3">
            <ClipboardCheck className="text-brand-blue" />
            <h2 className="text-2xl font-bold text-brand-navy">Evaluation & Assessment</h2>
          </div>
          <ul className="space-y-4">
            {evaluationDetails.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-brand-gold" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Welfare Schemes */}
      <section className="mt-16 rounded-3xl bg-brand-navy p-8 text-white shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-brand-gold" size={24} />
          <h2 className="text-2xl font-bold">Government Welfare Schemes (सरकारी योजनाएं)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {schoolData.welfareSchemes.map((scheme) => (
            <div key={scheme.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-bold text-brand-gold">{scheme.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">{scheme.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
