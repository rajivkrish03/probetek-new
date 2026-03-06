'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductCategories.module.css';
import FadeIn from './FadeIn';
import StaggerContainer from './StaggerContainer';
import { productsData } from '@/app/products/data';
import ProductSearch from './ProductSearch';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductCategories() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <div className={styles.header}>
                        <h2 className={styles.heading}>Our Products</h2>
                        <div className={styles.headingUnderline}></div>
                        <p className={styles.subheading}>
                            Providing state-of-the-art solutions for industrial testing, research, and education.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <ProductSearch />
                        </div>
                    </div>
                </FadeIn>
                <StaggerContainer className={styles.grid}>
                    {productsData.map((category) => (
                        <motion.div key={category.id} variants={cardVariants} className={styles.cardWrapper}>
                            <Link
                                href={`/products/${category.id}`}
                                className={styles.cardLink}
                                aria-label={`View ${category.category} products`}
                            >
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <span className={styles.icon}>{category.icon}</span>
                                    </div>
                                    <div className={styles.content}>
                                        <h3>{category.category}</h3>
                                        <p>{category.description}</p>
                                        <div className={styles.action}>
                                            <span>View Products</span>
                                            <span className={styles.arrow}>&rarr;</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
