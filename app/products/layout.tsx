import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Testing Equipment',
  description: 'Explore power electronics test equipment, environmental test chambers, laboratory training systems and industrial engineering products from Probetek Engineering in the UAE.',
  alternates: { canonical: '/products' },
  openGraph: { title: 'Products & Testing Equipment | Probetek Engineering', description: 'Explore power electronics test equipment, environmental test chambers, laboratory training systems and industrial engineering products from Probetek Engineering in the UAE.', url: 'https://probetek.ae/products' },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
