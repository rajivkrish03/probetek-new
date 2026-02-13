'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductCategories.module.css';
import FadeIn from './FadeIn';
import StaggerContainer from './StaggerContainer';

const categories = [
    {
        id: 'power-electronics',
        title: 'Power Electronics Test Solutions',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Power+Electronics',
        description: 'Advanced testing solutions for power supplies, batteries, and electronic loads.',
        link: '/products#power-electronics'
    },
    {
        id: 'environmental-test',
        title: 'Environmental Test Chambers',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Environmental+Chambers',
        description: 'Reliable climatic testing chambers for temperature, humidity, and vibration.',
        link: '/products#environmental-test'
    },
    {
        id: 'modular-instruments',
        title: 'Modular Instruments / Cards',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Modular+Instruments',
        description: 'High-precision modular instrumentation for flexible test configurations.',
        link: '/products#modular-instruments'
    },
    {
        id: 'electric-power-system-testing',
        title: 'Electric Power System Testing',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Electric+Power+System',
        description: 'Comprehensive testing solutions for IEC61850 Digital Substation, Relay, and Protection.',
        link: '/products#electric-power-system-testing'
    },
    {
        id: 'aircraft-warning-lights',
        title: 'Aircraft Warning Lights',
        image: 'https://placehold.co/600x400/1a2533/ffffff?text=Aircraft+Warning+Lights',
        description: 'Obstruction lights for hazardous areas, tall buildings, and heliports.',
        link: '/products#aircraft-warning-lights'
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
