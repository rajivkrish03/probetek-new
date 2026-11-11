import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Read Probetek Engineering news, technical insights, partner announcements and updates on industrial testing and research equipment.',
  alternates: { canonical: '/news-events' },
  openGraph: { title: 'News & Events | Probetek Engineering', description: 'Read Probetek Engineering news, technical insights, partner announcements and updates on industrial testing and research equipment.', url: 'https://probetek.ae/news-events' },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
