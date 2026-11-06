import Link from 'next/link';
import Image from 'next/image';
import { PiArrowUpRight } from 'react-icons/pi';
import styles from './Footer.module.css';

export default function Footer() {
    return <footer className={styles.footer}><div className={styles.container}>
        <div className={styles.brand}><Link href="/" aria-label="Probetek Engineering home"><Image src="/probetek/logo.png" alt="Probetek Engineering" width={658} height={278} sizes="180px" /></Link><p>Specialist technology.<br />Practical engineering support.<br />Here in the UAE.</p><a href="https://www.linkedin.com/company/probetek/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>Connect on LinkedIn <PiArrowUpRight aria-hidden="true" /></a></div>
        <div className={styles.navigation}><h2>Explore Probetek</h2><ul><li><Link href="/products">Equipment &amp; solutions</Link></li><li><Link href="/services">Engineering services</Link></li><li><Link href="/partners">Our technology partners</Link></li><li><Link href="/company">About Probetek</Link></li><li><Link href="/news-events">News &amp; insights</Link></li><li><Link href="/careers">Careers</Link></li></ul></div>
        <div className={styles.contact}><h2>Let’s talk about your project</h2><a className={styles.email} href="mailto:info@probetek.ae">info@probetek.ae <PiArrowUpRight aria-hidden="true" /></a><a href="tel:+97126265664">+971 2 626 5664</a><address>Office M2, Building 10<br />Al Nahyan Camp Tower<br />Abu Dhabi, UAE</address><Link href="/contact" className={styles.contactLink}>Contact our team <PiArrowUpRight aria-hidden="true" /></Link></div>
    </div><div className={styles.bottom}><span>© {new Date().getFullYear()} Probetek Engineering. All rights reserved.</span><span>Abu Dhabi, United Arab Emirates</span></div></footer>;
}
