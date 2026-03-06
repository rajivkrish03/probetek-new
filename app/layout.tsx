import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

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
            { url: '/logo-icon.png', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: '/logo-icon.png',
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/logo-icon.png',
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
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-JRFF0K40RS"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-JRFF0K40RS');
                    `}
                </Script>
            </head>
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />
                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/971585823253"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    title="Chat on WhatsApp"
                    style={{
                        position: 'fixed',
                        bottom: '28px',
                        right: '28px',
                        zIndex: 9999,
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        backgroundColor: '#25D366',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
                        textDecoration: 'none',
                        animation: 'wa-pulse 2.5s infinite',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="32"
                        height="32"
                        fill="white"
                    >
                        <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 10L4 44l10.3-2.7C17.1 43 20.4 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.5-2.3l-.6-.4-6.1 1.6 1.6-5.9-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.8c-.5-.2-2.8-1.4-3.2-1.5-.5-.2-.8-.2-1.2.2-.3.5-1.3 1.5-1.6 1.9-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.2-.2-1.2-2.8-1.6-3.8-.4-1-.8-1-.8-.9h-1c-.3 0-.9.1-1.4.6-.5.5-1.8 1.8-1.8 4.4s1.8 5.1 2.1 5.5c.3.3 3.6 5.5 8.7 7.7 1.2.5 2.2.8 2.9 1 1.2.4 2.3.3 3.2.2 1-.2 2.8-1.2 3.2-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.5-.3-1-.5z" />
                    </svg>
                </a>
                <style>{`
                    @keyframes wa-pulse {
                        0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
                        70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
                    }
                    a[href*="wa.me"]:hover {
                        transform: scale(1.12) !important;
                        box-shadow: 0 6px 28px rgba(37, 211, 102, 0.7) !important;
                    }
                `}</style>
            </body>
        </html>
    )
}
