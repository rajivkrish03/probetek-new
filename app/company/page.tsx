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
                                    <h3>Education & Training Equipments</h3>
                                    <p>Comprehensive educational tools and training systems for engineering disciplines. Featuring solutions from <strong>PE Module</strong> and <strong>Edibon</strong> for:</p>
                                    <ul>
                                        <li>Power Electronics Training Kits</li>
                                        <li>Physics & Electronics Educational Modules</li>
                                        <li>Mechanics, Fluid Mechanics & Thermodynamics</li>
                                        <li>Process Control & Mechatronics</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Research & Test Solutions</h3>
                                    <p>Advanced testing and research solutions for validating and simulating systems. Partnering with <strong>NGI</strong>, <strong>Ponovo</strong>, and <strong>PE Module</strong> for:</p>
                                    <ul>
                                        <li>Power Electronics Test Solutions</li>
                                        <li>Power System Protection & IEC61850 Testing</li>
                                        <li>Power Electronics Research Products</li>
                                        <li>Hardware-In-the-Loop (HIL) & Real-Time Simulation</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Environmental Test Solutions</h3>
                                    <p>Simulating real-world conditions for product validation. With <strong>Sanwood</strong>, we offer:</p>
                                    <ul>
                                        <li>Temperature & Humidity Test Chambers</li>
                                        <li>Thermal Shock & Rapid Change Chambers</li>
                                        <li>UV Accelerated Aging & Xenon Test Chambers</li>
                                        <li>Vibration, Altitude, & Sand Dust Testing</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Pilot Plants</h3>
                                    <p>Advanced scalable systems for research and industrial applications. We provide:</p>
                                    <ul>
                                        <li>Customized Pilot Plants for Process Engineering</li>
                                        <li>Chemical Industry Research Systems</li>
                                        <li>Hands-on Scalable Environmental Tech</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Oil & Gas Industry</h3>
                                    <p>Specialized explosion-proof solutions for hazardous environments in the energy sector. We offer:</p>
                                    <ul>
                                        <li>Ex-proof Battery Monitoring Systems</li>
                                        <li>Ex-proof Lighting Systems</li>
                                        <li>Hazardous Area Safety Solutions</li>
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
