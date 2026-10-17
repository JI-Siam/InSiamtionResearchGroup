import { Space_Grotesk, Inter } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadataBase = new URL('https://irg-omega.vercel.app');

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050B14',
};

export const metadata = {
  metadataBase: new URL('https://irg-omega.vercel.app'),
  title: 'InSiamtion Research Group (IRG) — Student-Led Scientific Research & Mentorship at AIUB',
  description: 'InSiamtion Research Group (IRG) is a premier student-led research and mentorship community at American International University-Bangladesh (AIUB). We engineer collaborative teams, mentor capable researchers, and produce high-impact conference and journal publications.',
  keywords: [
    'InSiamtion Research Group',
    'IRG',
    'AIUB Research',
    'Student Research Group',
    'Machine Learning Research Bangladesh',
    'IEEE ICCIT',
    'Springer Nature',
    'Academic Mentorship',
    'AIUB Computer Science',
    'Research Lab'
  ],
  authors: [{ name: 'InSiamtion Research Group', url: 'https://irg-omega.vercel.app' }],
  creator: 'InSiamtion Research Group',
  publisher: 'InSiamtion Research Group',
  openGraph: {
    title: 'InSiamtion Research Group (IRG) — Research & Mentorship',
    description: 'Empowering talented student researchers at AIUB through rigorous mentorship, structured lab teams, and peer-reviewed publications.',
    url: 'https://irg-omega.vercel.app/',
    siteName: 'InSiamtion Research Group',
    images: [
      {
        url: '/images/neural_mesh_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'InSiamtion Research Group Scientific Visualization'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InSiamtion Research Group (IRG)',
    description: 'Student-led research and mentorship at AIUB. Teams, mentorship, and high-impact publications.',
    images: ['/images/neural_mesh_hero.jpg']
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth dark`}>
      <body className="min-h-full flex flex-col font-sans bg-[#050B14] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}

