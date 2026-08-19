import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { NoticeProvider } from '@/context/NoticeContext';
import AdminNoticeModal from '@/components/AdminNoticeModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'PM SHRI Middle School Hiranpur (Boys) | पीएम श्री मध्य विद्यालय हिरणपुर',
    template: '%s | PM SHRI Middle School Hiranpur (Boys)',
  },
  description:
    'PM SHRI Middle School Hiranpur (Boys), Pakur, Jharkhand — Department of School Education and Literacy, Govt. of Jharkhand. Quality, inclusive education under JCERT & NEP 2020.',
  keywords: ['PM SHRI Middle School', 'Hiranpur Boys School', 'school in Pakur', 'PM SHRI Jharkhand', 'JCERT', 'admissions 2026'],
  openGraph: {
    title: 'PM SHRI Middle School Hiranpur (Boys)',
    description:
      'A PM SHRI school committed to quality education, ICT literacy, student development, and community values.',
    url: 'https://example.com',
    siteName: 'PM SHRI Middle School Hiranpur (Boys)',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM SHRI Middle School Hiranpur (Boys)',
    description:
      'PM SHRI school in Hiranpur, Pakur, Jharkhand with a legacy of excellence in education.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <body className="bg-slate-50 text-slate-800 antialiased overflow-x-hidden w-full max-w-full min-h-screen flex flex-col">
        <LanguageProvider>
          <NoticeProvider>
            <Navbar />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
            <Footer />
            <AdminNoticeModal />
          </NoticeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
