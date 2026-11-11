import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Applications',
  description: 'Explore battery and EV testing, renewable energy, power electronics, environmental testing and industrial applications supported by Probetek Engineering.',
  alternates: { canonical: '/applications' },
  openGraph: { title: 'Engineering Applications | Probetek Engineering', description: 'Explore battery and EV testing, renewable energy, power electronics, environmental testing and industrial applications supported by Probetek Engineering.', url: 'https://probetek.ae/applications' },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
