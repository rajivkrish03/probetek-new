import { productsData, getProductCategory, getProductSubCategory } from '../../data';
import styles from '../../page.module.css';
import FadeIn from '@/components/FadeIn';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
    const params: { categoryId: string; subCategoryId: string }[] = [];
    productsData.forEach((category) => {
        if (category.subCategories) {
            category.subCategories.forEach((sub) => {
                params.push({ categoryId: category.id, subCategoryId: sub.id });
            });
        }
    });
    return params;
}

type Props = {
    params: Promise<{ categoryId: string; subCategoryId: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { categoryId, subCategoryId } = await params;
    const category = getProductCategory(categoryId);
    const subCategory = getProductSubCategory(categoryId, subCategoryId);

    if (!category || !subCategory) return { title: 'Not Found' };

    return {
        title: `${subCategory.name} | ${category.category} | Probetek Engineering`,
        description: subCategory.description || category.description,
    };
}

export default async function SubCategoryPage({ params }: Props) {
    const { categoryId, subCategoryId } = await params;
    const categoryData = getProductCategory(categoryId);
    const subCategoryData = getProductSubCategory(categoryId, subCategoryId);

    if (!categoryData || !subCategoryData) {
        notFound();
    }

    const { category, icon } = categoryData;
    const { name: subCategoryName, description, items } = subCategoryData;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://probetek.ae/'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://probetek.ae/products'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: category,
                item: `https://probetek.ae/products/${categoryId}`
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: subCategoryName,
                item: `https://probetek.ae/products/${categoryId}/${subCategoryId}`
            }
        ]
    };

    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className={styles.heroSmall}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.breadcrumb}>
                            <Link href={`/products/${categoryId}`} className={styles.backLink}>&larr; Back to {category}</Link>
                        </div>
                        <h1 className={styles.categoryPageTitle}>
                            <span className={styles.titleIcon}>{icon}</span>
                            {subCategoryName}
                        </h1>
                        <p className={styles.categoryPageDesc}>{description || `Explore our range of ${subCategoryName} solutions.`}</p>
                    </FadeIn>
                </div>
            </section>

            <div className={styles.container}>
                <section className={styles.categorySection}>
                    {items && items.length > 0 ? (
                        <div className={styles.grid}>
                            {items.map((item, index) => (
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
