import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

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
                                    PROBETEK Engineering is a specialized service provider dedicated to the Oil & Gas and
                                    Industrial sectors. With a strong foundation in engineering excellence, we deliver comprehensive
                                    solutions for turnaround, shutdown, and critical maintenance projects.
                                </p>
                                <p>
                                    Our team of professionally trained engineers ensures reliable and efficient technical
                                    support, offering product installation, preventive maintenance, troubleshooting, and
                                    repair services to maximize equipment performance.
                                </p>
                                <p>
                                    We assist in laboratory relocation with minimal downtime, ensuring operational continuity.
                                    Additionally, we act as consultants for laboratory setup, supporting design, planning,
                                    and implementation to meet specific project requirements.
                                </p>
                            </div>
                            <div className={styles.imageColumn}>
                                <img src="/probetek-new/probetek/about_img_1.jpg" alt="Probetek Engineering Team" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className={styles.section}>
                            <h2>Our Core Expertise</h2>
                            <p>We specialize in four key technology domains, offering comprehensive sales, support, and consultancy:</p>
                            <div className={styles.expertiseGrid}>
                                <div className={styles.expertiseCard}>
                                    <h3>Aviation & Obstruction Lighting</h3>
                                    <p>Ensuring safety and compliance for tall structures and heliports. We supply <strong>Clampco Sistemi</strong> solutions, including:</p>
                                    <ul>
                                        <li>Aircraft Warning Lights (Low, Medium, High Intensity)</li>
                                        <li>Explosion-Proof Lights for Oil & Gas</li>
                                        <li>Heliport & Vertiport Lighting Systems</li>
                                        <li>Solar-Powered & Retractable Solutions</li>
                                    </ul>
                                </div>
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
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.section}>
                            <h2>Why Choose Probetek?</h2>
                            <div className={styles.valuesGrid}>
                                <div className={styles.valueCard}>
                                    <h3>Global Partnerships</h3>
                                    <p>We represent industry leaders like <strong>Clampco, NGI, Sanwood, and Ponovo</strong>, bringing world-class technology to your doorstep.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>Local Expertise</h3>
                                    <p>Based in the UAE, we understand the regional standards, climate challenges, and specific industry requirements.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>End-to-End Support</h3>
                                    <p>From consultation and product selection to after-sales support, we are dedicated to your project's success.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
