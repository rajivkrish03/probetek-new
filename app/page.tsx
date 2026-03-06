import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import WhyProbetek from '@/components/WhyProbetek';

export const metadata = {
    title: 'Probetek Engineering | Leading Engineering Solutions in UAE',
    description: 'Probetek Engineering provides advanced academic and industrial research equipment, power electronics test solutions, and environmental chambers in Abu Dhabi, UAE.',
    alternates: {
        canonical: 'https://probetek.ae',
    },
}

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Probetek Engineering',
        url: 'https://probetek.ae',
        logo: 'https://probetek.ae/probetek/logo.png',
        sameAs: [
            'https://www.linkedin.com/company/probetek-engineering',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+971-58-5823253',
            contactType: 'customer service',
            areaServed: 'AE',
            availableLanguage: 'en',
        },
    }

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <WhyProbetek />
            <ProductCategories />
        </main>
    )
}
