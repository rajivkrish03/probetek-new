import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

const partners = [

    { name: 'NGI', logo: '/probetek/partners/ngi.webp', link: 'https://www.ngi-tech.com/', darkBg: true },
    { name: 'Sanwood', logo: '/probetek/partners/sanwood.png', link: 'https://www.sanwood.cc/', darkBg: true },
    { name: 'Ponovo', logo: '/probetek/partners/ponovo.png', link: 'https://www.ponovo.net/', darkBg: true },
];


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Partners | Probetek Engineering',
    description: 'We partner with industry leaders like NGI, Sanwood, and Ponovo to bring world-class engineering technology to the UAE.',
    alternates: {
        canonical: 'https://probetek.ae/partners',
    },
};

export default function Partners() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>Our Partners</h1>
                        <p>Collaborating with industry leaders to deliver the best solutions.</p>
                    </FadeIn>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {partners.map((partner, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <a href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                                    <div className={styles.card}>
                                        <div className={`${styles.logoContainer} ${partner.darkBg ? styles.darkBg : ''}`}>
                                            <img src={partner.logo} alt={partner.name} className={styles.logo} />
                                        </div>
                                        <h2 className={styles.partnerName}>{partner.name}</h2>
                                    </div>
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
