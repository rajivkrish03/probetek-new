import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://probetek.ae'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Probetek Engineering | Advanced Research Equipment & Industrial Solutions',
        template: '%s | Probetek Engineering',
    },
    description: 'Probe Tek Engineering specializes in delivering advanced academic and industrial research equipment, power electronics test solutions, and environmental chambers. Expert services for Oil & Gas and industrial sectors.',
    keywords: ['Engineering Services', 'Research Equipment', 'Power Electronics', 'Environmental Chambers', 'Oil & Gas', 'Industrial Solutions', 'Abu Dhabi', 'UAE'],
    authors: [{ name: 'Probetek Engineering' }],
    creator: 'Probetek Engineering',
    publisher: 'Probetek Engineering',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://probetek.ae',
        title: 'Probetek Engineering | Advanced Research Equipment & Industrial Solutions',
        description: 'Delivering value, precision, and reliability in academic and industrial research equipment.',
        siteName: 'Probetek Engineering',
        images: [
            {
                url: '/probetek/logo.png', // Fallback image
                width: 1200,
                height: 630,
                alt: 'Probetek Engineering Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Probetek Engineering | Advanced Research Equipment & Industrial Solutions',
        description: 'Delivering value, precision, and reliability in academic and industrial research equipment.',
        images: ['/probetek/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/logo.png', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: '/logo.png',
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/logo.png',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
