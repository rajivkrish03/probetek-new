import Image from 'next/image';
import Link from 'next/link';
import { PiArrowDown, PiArrowUpRight, PiCheckCircle } from 'react-icons/pi';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="home-heading">
            <div className={styles.copy}>
                <p className={styles.eyebrow}><span /> Engineering expertise. Delivered locally.</p>
                <h1 id="home-heading">The right equipment.<br />The expertise to<br /><span>make it work.</span></h1>
                <p className={styles.description}>Research, testing and education solutions, backed by practical engineering knowledge and local support in the UAE.</p>
                <div className={styles.actions}>
                    <Link className={styles.primary} href="/contact">Discuss your requirements <PiArrowUpRight aria-hidden="true" /></Link>
                    <a className={styles.secondary} href="#solutions">Explore our solutions <PiArrowDown aria-hidden="true" /></a>
                </div>
                <div className={styles.location}><PiCheckCircle aria-hidden="true" /><span>Based in Abu Dhabi. Supporting your next project.</span></div>
            </div>
            <div className={styles.visual}>
                <div className={styles.visualTop}><span>Precision starts here</span><span className={styles.status}><i /> Research &amp; testing</span></div>
                <div className={styles.visualTitle}>Built for the questions<br />that move you forward.</div>
                <Image className={styles.productImage} src="/probetek/home/ngi-grid-simulator.webp" alt="NGI N75500 series programmable power supply and regenerative grid simulator" width={1000} height={600} priority sizes="(max-width: 850px) 100vw, 50vw" />
                <div className={styles.productCaption}><div><span>Featured technology</span><strong>NGI N75500 series</strong></div><Link href="/products/research-test-solutions/power-electronics-test-solutions" aria-label="Explore NGI power electronics test solutions"><PiArrowUpRight aria-hidden="true" /></Link></div>
                <div className={styles.visualFoot}><span>Global technology.</span><span>Local technical support.</span></div>
            </div>
        </section>
    );
}
