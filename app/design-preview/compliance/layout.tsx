import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '@astryxdesign/theme-neutral/theme.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astryx Compliance Design Preview | Probetek',
  robots: { index: false, follow: false },
};

export default function CompliancePreviewLayout({children}: {children: React.ReactNode}) {
  return children;
}
