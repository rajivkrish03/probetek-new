import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

const products = [
    /* {
        category: 'Aircraft Warning Lights (Obstruction Lights)',
        id: 'aircraft-warning-lights',
        items: [
            { name: 'Lights for Vertiports', link: 'https://clampco.it/lights-for-vertiports/' },
            { name: 'Obstruction lights for hazardous areas (Flare stacks, chimneys, Oil & Gas platforms)', link: 'https://clampco.it/aircraft-warning-lights-for-explosion-proof/' },
            { name: 'Obstruction lights (Tall buildings, Cranes, industrial chimneys, telecommunications towers)', link: 'https://clampco.it/aircraft-warning-lights/' },
            { name: 'Heliport Lighting (Helipads, helidecks, heliports, Vertiports)', link: 'https://clampco.it/lights-for-heliports/' },
            { name: 'Obstruction lighting for power lines (Conductor marking lights for overhead power lines)', link: 'https://clampco.it/aircraft-warning-lights-for-power-lines/' },
            { name: 'Retractable Maintenance Solution (Retractable Aircraft warning light system)', link: 'https://clampco.it/retractable-lighting-maintenance-solution/' },
            { name: 'Telemetry Monitoring Solution (Remote Control and Monitoring)', link: 'https://clampco.it/telemetry-lighting-monitoring-system/' }
        ]
    }, */
    {
        category: 'Power Electronics Test Solutions',
        id: 'power-electronics',
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
        category: 'Electric power system testing',
        id: 'electric-power-system-testing',
        items: [
            { name: 'IEC61850 Digital Substation Testing', link: 'https://www.ponovo.net/iec61850-digital-substation-testing/' },
            { name: 'Relay and Protection Testing', link: 'https://www.ponovo.net/relay-and-protection-testing/' },
            { name: 'Primary Injection Testing', link: 'https://www.ponovo.net/primary-injection-testing/' },
            { name: 'UHVDC(Untro High Voltage DC) Testing', link: 'https://www.ponovo.net/uhvdc-untro-high-voltage-dc-testing/' },
            { name: 'EV &Recharging Testing', link: 'https://www.ponovo.net/ev-recharging-testing/' },
            { name: 'Railway Testing', link: 'https://www.ponovo.net/railway-testing/' }
        ]
    }
];


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products | Probetek Engineering',
    description: 'Explore our range of research equipment, including power electronics test solutions, environmental chambers, and modular instruments.',
    alternates: {
        canonical: 'https://probetek.ae/products',
    },
};

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
                {products.map((category) => (
                    <section key={category.id} id={category.id} className={styles.categorySection}>
                        <FadeIn>
                            <div className={styles.categoryHeader}>
                                <h2>{category.category}</h2>
                            </div>
                        </FadeIn>
                        <div className={styles.grid}>
                            {category.items.map((item, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
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
                    </section>
                ))}
            </div>
        </main>
    );
}
