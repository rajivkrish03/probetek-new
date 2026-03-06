import Link from 'next/link';
import styles from './Hero.module.css';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Radial glow decorations */}
            <div className={styles.glowLeft} aria-hidden="true" />
            <div className={styles.glowRight} aria-hidden="true" />

            <div className={styles.content}>
                {/* Trust badge */}
                <FadeIn direction="up" delay={0}>
                    <div className={styles.trustBadge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Trusted by 500+ Institutions &nbsp;·&nbsp; 4 Global Partner Brands
                    </div>
                </FadeIn>

                {/* Main headline */}
                <FadeIn direction="up" delay={0.1}>
                    <h1 className={styles.headline}>
                        Engineering Excellence for<br />
                        <span className={styles.headlineHighlight}>Advanced Testing & Research</span>
                    </h1>
                </FadeIn>

                {/* Subtitle */}
                <FadeIn direction="up" delay={0.2}>
                    <p className={styles.subtitle}>
                        Delivering world-class power electronics, environmental testing, and research solutions
                        across UAE and beyond. Partner with industry leaders for cutting-edge equipment and expert support.
                    </p>
                </FadeIn>

                {/* CTAs */}
                <FadeIn direction="up" delay={0.3}>
                    <div className={styles.buttonGroup}>
                        <Link href="/products" className={styles.btnPrimary}>
                            Explore Solutions
                        </Link>
                        <Link href="/contact" className={styles.btnSecondary}>
                            Request Quote
                        </Link>
                    </div>
                </FadeIn>

                {/* Stats row */}
                <FadeIn direction="up" delay={0.45}>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Installations</span>
                        </div>
                        <div className={styles.statDivider} aria-hidden="true" />
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>4</span>
                            <span className={styles.statLabel}>Global Partners</span>
                        </div>
                        <div className={styles.statDivider} aria-hidden="true" />
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Years of Expertise</span>
                        </div>
                        <div className={styles.statDivider} aria-hidden="true" />
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>UAE</span>
                            <span className={styles.statLabel}>Based & Supported</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
