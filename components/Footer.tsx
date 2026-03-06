import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Column 1: Brand */}
                <div className={styles.brandColumn}>
                    <div className={styles.logo}>PROBETEK</div>
                    <p className={styles.brandDesc}>
                        Professional engineering solutions provider specializing in power electronics testing, environmental chambers, and research equipment for the UAE and beyond.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="https://www.linkedin.com/company/probetek/" target="_blank" rel="noopener noreferrer" aria-label="Probetek Engineering on LinkedIn" className={styles.socialLink}>
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/partners">Partners</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Solutions */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Solutions</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/products/power-electronics">Power Electronics</Link></li>
                        <li><Link href="/products/environmental-chambers">Environmental Testing</Link></li>
                        <li><Link href="/products/electric-power-system-testing">Power System Testing</Link></li>
                        <li><Link href="/products/power-electronics-research">PE Research</Link></li>
                        <li><Link href="/products/power-electronics-education">PE Education</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Contact Us</h4>
                    <div className={styles.contactInfo}>
                        <p>Sultan Bin Zayed 1st Street</p>
                        <p>Abu Dhabi, UAE</p>
                        <p>T: +971 26265664</p>
                        <p>M: +971 585823253</p>
                        <a href="mailto:info@probetek.ae" className={styles.emailLink}>info@probetek.ae</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© 2025 Probetek Engineering. All rights reserved.</p>
                <p className={styles.bottomRight}>Abu Dhabi, UAE</p>
            </div>
        </footer>
    );
}
