import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Probetek Engineering',
    description: 'Learn about Probetek Engineering, a specialized service provider for Oil & Gas and Industrial sectors offering turnaround, shutdown, and critical maintenance solutions in UAE.',
    alternates: {
        canonical: 'https://probetek.ae/company',
    },
};

export default function Company() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>About PROBETEK</h1>
                        <p>Your Trusted Partner for Advanced Engineering & Testing Solutions in the Middle East.</p>
                    </FadeIn>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.aboutContent}>
                            <div className={styles.textColumn}>
                                <h2>About Us</h2>
                                <p>
                                    Probetek Engineering specializes in delivering advanced academic and industrial
                                    research equipment that empowers innovation and drives results. With over a decade of
                                    proven expertise, our technically qualified team provides solutions that go far beyond
                                    standard product supply — we deliver value, precision, and reliability.
                                </p>
                                <p>
                                    Our diverse portfolio serves multiple industries and specialized applications, offering
                                    tailored solutions for complex challenges.
                                </p>
                                <p>
                                    At Probetek, our mission is simple: to provide professional products, expert services,
                                    and cutting-edge solutions that help you achieve excellence.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className={styles.section}>
                            <h2>Our Core Expertise</h2>
                            <p>We specialize in five key technology domains, offering comprehensive sales, support, and consultancy:</p>
                            <div className={styles.expertiseGrid}>
                                <div className={styles.expertiseCard}>
                                    <h3>Power Electronics Test Solutions</h3>
                                    <p>Advanced testing for the electric future. Partnering with <strong>NGI Technologies</strong>, we provide:</p>
                                    <ul>
                                        <li>AC/DC Power Supplies & Electronic Loads</li>
                                        <li>Battery Simulators & Supercapacitor Testers</li>
                                        <li>Fuel Cell Test Systems</li>
                                        <li>Regenerative Power Solutions</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Environmental Climatic Testing</h3>
                                    <p>Simulating real-world conditions for product validation. With <strong>Sanwood</strong>, we offer:</p>
                                    <ul>
                                        <li>Temperature & Humidity Chambers</li>
                                        <li>Thermal Shock & Rapid Change Chambers</li>
                                        <li>Battery Explosion-Proof Test Chambers</li>
                                        <li>Dust, Rain, and UV Aging Chambers</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Power System Protection</h3>
                                    <p>Critical testing for grid stability and safety. Featuring <strong>Ponovo</strong> technology for:</p>
                                    <ul>
                                        <li>IEC61850 Digital Substation Testing</li>
                                        <li>Relay Protection & Primary Injection Testing</li>
                                        <li>EV Charging Station Testing</li>
                                        <li>HVDC & Railway Power Testing</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Power Electronics Research Products</h3>
                                    <p>Empowering breakthrough research. In partnership with <strong>PE Module</strong>, we provide:</p>
                                    <ul>
                                        <li>PLUGY HP Power Modules & Control Boards</li>
                                        <li>Modular Converters (Buck, Boost, Inverters)</li>
                                        <li>Micro-grid Research Systems</li>
                                        <li>Customizable R&D Test Benches</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Power Electronics Educational Products</h3>
                                    <p>Building future engineering talent. Dedicated educational tools from <strong>PE Module</strong>:</p>
                                    <ul>
                                        <li>Integrated Power Electronics Training Kits</li>
                                        <li>Modular Educational Discovery Systems</li>
                                        <li>Hands-on Curriculum Support</li>
                                        <li>Safe, Industry-aligned Learning Platforms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.section}>
                            <h2>Why Choose Probetek?</h2>
                            <div className={styles.valuesGrid}>
                                <div className={styles.valueCard}>
                                    <h3>Global Partnerships</h3>
                                    <p>We represent industry leaders like <strong>NGI, Sanwood, Ponovo, and PE Module</strong>, bringing world-class technology to your doorstep.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>Local Expertise</h3>
                                    <p>Based in the UAE, we understand the regional standards, climate challenges, and specific industry requirements.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>End-to-End Support</h3>
                                    <p>From consultation and product selection to after-sales support, we are dedicated to your project's success.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>ICV Certified</h3>
                                    <p>We are a certified In-Country Value (ICV) partner, supporting the UAE's economic growth and localization goals.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
