import Link from 'next/link';
import styles from './Hero.module.css';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <FadeIn direction="up">
                        <h1>Professional Products, Expert Services, and Cutting-Edge Solutions</h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <div className={styles.buttonGroup}>
                            <Link href="/products" className={styles.button}>
                                Discover More
                            </Link>
                            <Link href="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
                                Contact Us
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
