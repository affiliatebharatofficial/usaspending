import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deep Federal Data Explorer — U.S. Government Spending Tree',
  description: 'Interactive visual data tree for drilling from total U.S. spending down into categories, agencies, states, prime recipients, and awards.',
  alternates: {
    canonical: 'https://www.usaspending.us/explorer',
  },
};

export default function ExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
