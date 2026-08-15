import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Federal Prime Contractors & Award Recipients Explorer',
  description: 'Explore top defense contractors, universities, and non-profit organizations receiving federal prime contracts and grant awards.',
  alternates: {
    canonical: 'https://www.usaspending.us/recipients',
  },
};

export default function RecipientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
