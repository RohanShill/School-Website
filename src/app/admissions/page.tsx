import { ArrowRight, BadgeCheck, BookMarked, CircleDollarSign, ShieldCheck } from 'lucide-react';
import { schoolData } from '@/data/schoolData';

const steps = [
  'Visit the school campus in Hiranpur or submit an online inquiry.',
  'Submit student Aadhaar card, bank account details (for DBT), and transfer certificate (if applicable).',
  'Simple document verification by the admission committee.',
  'Instant 100% free enrollment and distribution of free JCERT textbooks & uniform allowance.',
];

export default function AdmissionsPage() {
  return (
    <div className="section-shell py-16">
      <div className="mb-10 text-center">
        <span className="badge-pill">Admissions 2026-27</span>
        <h1 className="mt-4 text-4xl font-black text-brand-navy md:text-5xl">100% Free Government Admission</h1>
        <p className="mt-2 text-slate-600">सत्र 2026-27 — कक्षा 1 से 8 में सभी वर्गों के लिए शत-प्रतिशत निःशुल्क नामांकन</p>
      </div>

      <section className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="card-surface p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white">
              {index + 1}
            </div>
            <p className="text-sm leading-7 text-slate-600">{step}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface p-8">
          <div className="mb-5 flex items-center gap-3">
            <CircleDollarSign className="text-brand-blue" />
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">Fee Structure (शुल्क संरचना)</h2>
              <p className="text-xs text-slate-500">Government School &bull; Jharkhand Education Department Norms</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Grade</th>
                  <th className="px-4 py-3 font-semibold">Tuition</th>
                  <th className="px-4 py-3 font-semibold">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                {schoolData.feeStructure.map((item) => (
                  <tr key={item.grade} className="border-t border-slate-200 bg-white">
                    <td className="px-4 py-3.5 font-bold text-brand-navy">{item.grade}</td>
                    <td className="px-4 py-3.5 text-emerald-600 font-semibold">{item.tuition}</td>
                    <td className="px-4 py-3.5 font-semibold text-brand-blue">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-xs leading-6 text-emerald-800">
            <strong>निःशुल्क सुविधाएं:</strong> कक्षा 1 से 8 के सभी छात्रों को निःशुल्क पाठ्यपुस्तकें, 2 सेट स्कूल पोशाक (DBT), दैनिक पौष्टिक मध्याह्न भोजन (PM POSHAN), एवं छात्रवृत्ति प्रदान की जाती है।
          </div>
        </div>

        <div className="card-surface p-8">
          <div className="mb-5 flex items-center gap-3">
            <BookMarked className="text-brand-blue" />
            <h2 className="text-2xl font-bold text-brand-navy">Admission Inquiry Form</h2>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Student Name (छात्र का नाम)
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-blue" placeholder="Student full name" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Admission Class (नामांकन कक्षा)
                <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-blue">
                  <option>Class 1 (कक्षा 1)</option>
                  <option>Class 2 (कक्षा 2)</option>
                  <option>Class 3 (कक्षा 3)</option>
                  <option>Class 4 (कक्षा 4)</option>
                  <option>Class 5 (कक्षा 5)</option>
                  <option>Class 6 (कक्षा 6)</option>
                  <option>Class 7 (कक्षा 7)</option>
                  <option>Class 8 (कक्षा 8)</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Parent / Guardian Contact
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-blue" placeholder="+91..." />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Village / Area (ग्राम / मोहल्ला)
                <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-blue" placeholder="Hiranpur / Nearby village" />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              Message / Special Notes
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-blue" placeholder="Previous school name, Aadhaar availability, etc." />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 font-semibold text-brand-navy transition hover:scale-[1.01]">
              Submit Admission Inquiry <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-100 p-8">
        <div className="flex items-center gap-3">
          <BadgeCheck className="text-brand-gold" />
          <h2 className="text-2xl font-bold text-brand-navy">Documents Required for Enrollment</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>छात्र का आधार कार्ड (Aadhaar Card)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>माता/पिता का आधार व बैंक पासबुक</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>पासपोर्ट साइज फोटो (2 प्रतियां)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>जन्म प्रमाण पत्र (Birth Certificate)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>जाति/आय प्रमाण पत्र (छात्रवृत्ति हेतु)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-blue" />
            <span>पूर्व विद्यालय का TC (कक्षा 6–8 हेतु)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
