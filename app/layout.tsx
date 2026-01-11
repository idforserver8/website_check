import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { LiveUpdates } from '@/components/LiveUpdates';
import { SITE_CONFIG } from '@/lib/constants';
import { LanguageProvider2 } from '@/contexts/LanguageContext2';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Fast On-The-Spot Mobile Repair Services`,
  description: 'Professional mobile repair services in Kathmandu with 19+ years of experience. Fast on-the-spot repairs for broken screens, charging issues, network problems, water damage, and all mobile issues. Expert technician with same-day service.',
  keywords: 'mobile repair, phone repair, fast mobile repair, on-the-spot repair, mobile repair Kathmandu, broken screen repair, charging problem, network issue, water damage repair, motherboard repair, EMMC programming, UFS programming, mobile technician, same day repair, Jadibuti mobile repair',
  openGraph: {
    title: `${SITE_CONFIG.name} - Fast On-The-Spot Mobile Repair Services`,
    description: 'Expert mobile repair services with 19+ years of experience. Fast on-the-spot repairs for all mobile issues.',
    images: [
      {
        url: '/og-image.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Fast On-The-Spot Mobile Repair Services`,
    description: 'Expert mobile repair services with 19+ years of experience.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
          <LanguageProvider2>
            <Navbar />
            <LiveUpdates />
            <main>{children}</main>
          </LanguageProvider2>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
