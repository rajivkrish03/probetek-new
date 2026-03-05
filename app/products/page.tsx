'use client';

import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { useState } from 'react';

const products = [
    {
        category: 'Power Electronics Test Solutions',
        id: 'power-electronics',
        icon: '⚡',
        description: 'Advanced AC/DC power sources, electronic loads, and automated test systems for power electronics validation.',
        items: [
            { name: 'AC Power Source', link: 'https://www.ngi-tech.com' },
            { name: 'DC Power Supply', link: 'https://www.ngi-tech.com/Dc-power-supplies?_gl=1*ihdzu*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Regenerative Power Supply', link: 'https://www.ngi-tech.com' },
            { name: 'AC/DC Electronic Load', link: 'https://www.ngi-tech.com/Dc-electronic-loads?_gl=1*ihdzu*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Regenerative AC/DC Load', link: 'https://www.ngi-tech.com/' },
            { name: 'Digital Power Meter', link: 'https://www.ngi-tech.com/' },
            { name: 'Automatic Test System (ATS)', link: 'https://www.ngi-tech.com/' },
            { name: 'Battery Simulator', link: 'https://www.ngi-tech.com/Battery-simulators?_gl=1*x30pwn*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Electrical Safety Analyzer', link: 'https://www.ngi-tech.com/' },
            { name: 'Power Analyzer', link: 'https://www.ngi-tech.com/' },
            { name: 'Fuel Cell Test Systems', link: 'https://www.ngi-tech.com/Fuel-cell-test-series?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Supercapacitor and Battery Test Systems', link: 'https://www.ngi-tech.com/Supercapacitor-and-battery-test-series?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Modular Instruments (DAQ)', link: 'https://www.ngi-tech.com/Modular-instruments?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' }
        ]
    },
    {
        category: 'Environmental Chambers / Climatic Test Chambers',
        id: 'environmental-chambers',
        icon: '🌡️',
        description: 'Full range of temperature, humidity, UV, and environmental testing chambers for product reliability and compliance testing.',
        items: [
            { name: 'Temperature Humidity Test Chambers', link: 'https://www.sanwood.cc/Temperature-Humidity-Test-Chamber-pl577699.html' },
            { name: 'Battery Test Chambers', link: 'https://www.sanwood.cc/Battery-Test-Chambers-pd46791355.html' },
            { name: 'Rapid Temperature Change Test Chambers', link: 'https://www.sanwood.cc/Rapid-Temperature-Change-Test-Chamber-pl514009.html' },
            { name: 'Thermal Shock Chambers', link: 'https://www.sanwood.cc/Thermal-Shock-Chamber-pl30121.html' },
            { name: 'UV Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/UV-Lamp-Weathering-Test-Chamber-pl585009.html' },
            { name: 'Xenon Test Chambers', link: 'https://www.sanwood.cc/Xenon-Lamp-Weathering-Test-Chamber-pl525009.html' },
            { name: 'Altitude Test Chambers', link: 'https://www.sanwood.cc/Altitude-Test-Chamber-pl20121.html' },
            { name: 'Precision High Temperature Ovens', link: 'https://www.sanwood.cc/' },
            { name: 'Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/' },
            { name: 'Sand Dust test chambers', link: 'https://www.sanwood.cc/Dust-Test-Chamber-pl565009.html' },
            { name: 'Rain Test Chambers', link: 'https://www.sanwood.cc/Rain-Test-Chamber-pl545009.html' }
        ]
    },
    {
        category: 'Electric Power System Testing',
        id: 'electric-power-system-testing',
        icon: '🔌',
        description: 'Comprehensive power system test solutions including relay protection testing, IEC61850 substation testing, and EV charging verification.',
        items: [
            { name: 'IEC61850 Digital Substation Testing', link: 'https://www.ponovo.net/iec61850-digital-substation-testing/' },
            { name: 'Relay and Protection Testing', link: 'https://www.ponovo.net/relay-and-protection-testing/' },
            { name: 'Primary Injection Testing', link: 'https://www.ponovo.net/primary-injection-testing/' },
            { name: 'UHVDC(Untro High Voltage DC) Testing', link: 'https://www.ponovo.net/uhvdc-untro-high-voltage-dc-testing/' },
            { name: 'EV &amp; Recharging Testing', link: 'https://www.ponovo.net/ev-recharging-testing/' },
            { name: 'Railway Testing', link: 'https://www.ponovo.net/railway-testing/' }
        ]
    },
    {
        category: 'Power Electronics Research Products',
        id: 'power-electronics-research',
        icon: '🔬',
        description: 'Cutting-edge research-grade power electronics equipment and modular systems for advanced academic and industrial R&D.',
        items: []
    },
    {
        category: 'Power Electronics Educational Products',
        id: 'power-electronics-education',
        icon: '🎓',
        description: 'Dedicated educational tools and training systems for power electronics, enabling hands-on learning in academic environments.',
        items: []
    },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleCategoryClick = (id: string) => {
        setActiveCategory(prev => (prev === id ? null : id));
        if (activeCategory !== id) {
            setTimeout(() => {
                const el = document.getElementById(`products-${id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

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
                {/* High-level category blocks */}
                <div className={styles.categoryBlocksGrid}>
                    {products.map((cat, index) => (
                        <FadeIn key={cat.id} delay={index * 0.08}>
                            <button
                                id={`cat-btn-${cat.id}`}
                                className={`${styles.categoryBlock} ${activeCategory === cat.id ? styles.categoryBlockActive : ''}`}
                                onClick={() => handleCategoryClick(cat.id)}
                                aria-expanded={activeCategory === cat.id}
                            >
                                <span className={styles.categoryBlockIcon}>{cat.icon}</span>
                                <h2 className={styles.categoryBlockTitle}>{cat.category}</h2>
                                <p className={styles.categoryBlockDesc}>{cat.description}</p>
                                <span className={styles.categoryBlockArrow}>
                                    {activeCategory === cat.id ? '▲ Hide Products' : '▼ View Products'}
                                </span>
                            </button>
                        </FadeIn>
                    ))}
                </div>

                {/* Product panels — only shown when a category is active */}
                {products.map((category) => (
                    <div
                        key={category.id}
                        id={`products-${category.id}`}
                        className={`${styles.productPanel} ${activeCategory === category.id ? styles.productPanelOpen : ''}`}
                        aria-hidden={activeCategory !== category.id}
                    >
                        <section className={styles.categorySection}>
                            <FadeIn>
                                <div className={styles.categoryHeader}>
                                    <h2>{category.category}</h2>
                                </div>
                            </FadeIn>
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
                                    <p>Products coming soon. <a href="/contact">Contact us</a> for more information.</p>
                                </div>
                            )}
                        </section>
                    </div>
                ))}
            </div>
        </main>
    );
}
