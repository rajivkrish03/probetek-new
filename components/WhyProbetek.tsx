import FadeIn from './FadeIn';
import styles from './WhyProbetek.module.css';

const stats = [
    { number: '500+', label: 'Installations Delivered', icon: '📦' },
    { number: '4', label: 'Global Technology Partners', icon: '🤝' },
    { number: '15+', label: 'Years of Engineering Expertise', icon: '🏆' },
    { number: 'UAE', label: 'Headquartered, Globally Sourced', icon: '📍' },
];

const values = [
    {
        title: 'Global Partnerships',
        description: 'We represent industry leaders NGI, Sanwood, Ponovo, and PE Module — bringing world-class precision engineering technology directly to your doorstep.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        title: 'UAE-Based Expertise',
        description: 'Locally headquartered in Abu Dhabi with deep understanding of regional industry requirements, ensuring responsive support and compliance with local standards.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: 'Technical Support',
        description: 'From equipment selection and installation to commissioning and after-sales service — our engineering team provides end-to-end technical expertise.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
];

export default function WhyProbetek() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Stats Row */}
                <FadeIn>
                    <div className={styles.statsGrid}>
                        {stats.map((stat) => (
                            <div key={stat.number} className={styles.statCard}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Section header */}
                <FadeIn delay={0.1}>
                    <div className={styles.header}>
                        <div className={styles.eyebrow}>WHY PROBETEK</div>
                        <h2 className={styles.heading}>Your Trusted Engineering Partner in UAE</h2>
                        <div className={styles.headingUnderline} />
                    </div>
                </FadeIn>

                {/* Value props */}
                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <FadeIn key={value.title} delay={index * 0.1}>
                            <div className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDesc}>{value.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
