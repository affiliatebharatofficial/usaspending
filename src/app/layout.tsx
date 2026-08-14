import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "USA Spending — See Where America's Money Goes",
  description:
    'Explore U.S. Federal Government spending in real-time. Fast, clear visualizations of federal budgets, defense, healthcare, agencies, states, and top government contractors.',
  keywords: [
    'USA spending',
    'us government spending',
    'federal spending clock',
    'where does my tax money go',
    'defense spending',
    'medicare budget',
    'top defense contractors',
    'state federal funding',
  ],
  authors: [{ name: 'USA Spending Data Project' }],
  verification: {
    google: 'BjEe0IX0Cm89CYnoYPpnL1BzBcjm_Ylp1WGNL5SWLxQ',
    yandex: 'c10c080b970b1180',
    other: {
      'msvalidate.01': '2A730A2FAF8DA672C0BDBCC548BEB4FA',
    },
  },
  openGraph: {
    title: "USA Spending — See Where America's Money Goes",
    description:
      'Explore U.S. Federal Government spending in real-time. Live counters, interactive charts, state maps, and government contract explorers.',
    type: 'website',
    url: 'https://usa-spending.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="BjEe0IX0Cm89CYnoYPpnL1BzBcjm_Ylp1WGNL5SWLxQ" />
        <meta name="msvalidate.01" content="2A730A2FAF8DA672C0BDBCC548BEB4FA" />
        <meta name="yandex-verification" content="c10c080b970b1180" />
      </head>
      <body className="bg-radial-gradient min-h-screen flex flex-col antialiased selection:bg-blue-500 selection:text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQ3G5KRTP2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZQ3G5KRTP2');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
