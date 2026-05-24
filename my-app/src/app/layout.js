import { Poppins, Inter } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700','800'],
  variable: '--font-poppins'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','600'],
  variable: '--font-inter'
});

export const metadata = {
  title: 'InSiamtion Research Group — IRG',
  description: 'InSiamtion Research Group (IRG) is a student-led research and mentorship community at AIUB focused on collaborative research, mentoring, and publications.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'InSiamtion Research Group — IRG',
    description: 'Student-led research and mentorship at AIUB. Teams, mentorship, and conference publications.',
    url: 'https://irg-omega.vercel.app/',
    siteName: 'InSiamtion Research Group',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'InSiamtion Research Group logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InSiamtion Research Group — IRG',
    description: 'Student-led research and mentorship at AIUB. Teams, mentorship, and conference publications.',
    images: ['/logo.png']
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
