import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { productsData } from './data';
import Link from 'next/link';

export default function Products() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>Our Products</h1>
                        <p>Comprehensive solutions for industrial and research applications.</p>
                    </FadeIn>
                </div>
            </section>

            <div className={styles.container}>
                {/* High-level category blocks linked to their dedicated pages */}
                <div className={styles.categoryBlocksGrid}>
                    {productsData.map((cat, index) => (
                        <FadeIn key={cat.id} delay={index * 0.08}>
                            <Link href={`/products/${cat.id}`} className={styles.categoryBlock}>
                                <span className={styles.categoryBlockIcon}>{cat.icon}</span>
                                <h2 className={styles.categoryBlockTitle}>{cat.category}</h2>
                                <p className={styles.categoryBlockDesc}>{cat.description}</p>
                                <span className={styles.categoryBlockArrow}>
                                    View Products &rarr;
                                </span>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
