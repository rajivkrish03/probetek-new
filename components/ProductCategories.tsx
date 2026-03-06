'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductCategories.module.css';
import FadeIn from './FadeIn';
import StaggerContainer from './StaggerContainer';
import { productsData } from '@/app/products/data';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Professional SVG icons for each category ID
const categoryIcons: Record<string, { svg: React.ReactNode; gradient: string }> = {
    'power-electronics': {
        gradient: 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
        svg: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
    },
    'environmental-chambers': {
        gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        svg: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
            </svg>
        ),
    },
    'electric-power-system-testing': {
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        svg: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    'power-electronics-research': {
        gradient: 'linear-gradient(135deg, #0066FF 0%, #6D28D9 100%)',
        svg: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
    },
    'power-electronics-education': {
        gradient: 'linear-gradient(135deg, #059669 0%, #00D9FF 100%)',
        svg: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
    },
};

export default function ProductCategories() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <div className={styles.header}>
                        <div className={styles.eyebrow}>OUR SOLUTIONS</div>
                        <h2 className={styles.heading}>Advanced Equipment for Every Application</h2>
                        <div className={styles.headingUnderline} />
                        <p className={styles.subheading}>
                            From power electronics to environmental testing, we provide comprehensive solutions for research, education, and industry.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className={styles.grid}>
                    {productsData.map((category) => {
                        const iconData = categoryIcons[category.id];
                        return (
                            <motion.div key={category.id} variants={cardVariants} className={styles.cardWrapper}>
                                <Link
                                    href={`/products/${category.id}`}
                                    className={styles.cardLink}
                                    aria-label={`View ${category.category} products`}
                                >
                                    <div className={styles.card}>
                                        <div className={styles.topBar} />
                                        <div
                                            className={styles.iconWrapper}
                                            style={{ background: iconData?.gradient || 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)' }}
                                        >
                                            {iconData?.svg}
                                        </div>
                                        <div className={styles.content}>
                                            <h3>{category.category}</h3>
                                            <p>{category.description}</p>
                                            <div className={styles.action}>
                                                <span>Explore Solutions</span>
                                                <span className={styles.arrow}>→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
