import { productsData, getProductCategory } from '../data';
import styles from '../page.module.css';
import FadeIn from '@/components/FadeIn';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Required for static site generation (output: 'export')
export function generateStaticParams() {
    return productsData.map((category) => ({
        categoryId: category.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getProductCategory(categoryId);
    if (!category) return { title: 'Not Found' };

    return {
        title: `${category.category} | Probetek Engineering`,
        description: category.description,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getProductCategory(categoryId);

    if (!category) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <section className={styles.heroSmall}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.breadcrumb}>
                            <Link href="/products" className={styles.backLink}>&larr; Back to all categories</Link>
                        </div>
                        <h1 className={styles.categoryPageTitle}>
                            <span className={styles.titleIcon}>{category.icon}</span>
                            {category.category}
                        </h1>
                        <p className={styles.categoryPageDesc}>{category.description}</p>
                    </FadeIn>
                </div>
            </section>

            <div className={styles.container}>
                <section className={styles.categorySection}>
                    {category.items.length > 0 ? (
                        <div className={styles.grid}>
                            {category.items.map((item, index) => (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                                        <div className={styles.card}>
                                            <div className={styles.cardContent}>
                                                <h3>{item.name}</h3>
                                                <div className={styles.cardAction}>
                                                    <span>Learn More &rarr;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.comingSoon}>
                            <span className={styles.comingSoonIcon}>🚀</span>
                            <p>Products coming soon. <Link href="/contact" className={styles.textLink}>Contact us</Link> for more information.</p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
