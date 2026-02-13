'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductCategories.module.css';
import FadeIn from './FadeIn';
import StaggerContainer from './StaggerContainer';

const categories = [
    /* {
        id: 'aircraft-warning-lights',
        title: 'Aircraft Warning Lights',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Aircraft+Warning+Lights',
        description: 'Obstruction lights for hazardous areas, tall buildings, and heliports.',
    }, */
    {
        id: 'power-electronics',
        title: 'Power Electronics Test Solutions',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Power+Electronics',
        description: 'AC/DC power sources, loads, and battery simulators.',
    },
    {
        id: 'environmental-chambers',
        title: 'Environmental Chambers',
        description: 'Climatic test chambers for temperature, humidity, and aging tests.',
    },
    {
        id: 'electric-power-system-testing',
        title: 'Electric power system testing',
        description: 'IEC61850 Digital Substation, Relay, and Protection Testing.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductCategories() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <h2 className={styles.heading}>Our Products</h2>
                </FadeIn>
                <StaggerContainer className={styles.grid}>
                    {categories.map((category) => (
                        <motion.div key={category.id} variants={cardVariants} className={styles.cardWrapper}>
                            <div className={styles.card}>

                                <div className={styles.content}>
                                    <h3>{category.title}</h3>
                                    <p>{category.description}</p>
                                    <Link href={`/products#${category.id}`} className={styles.link}>
                                        View Products &rarr;
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
