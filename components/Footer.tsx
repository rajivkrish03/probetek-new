import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>PROBETEK ENGINEERING</h3>
                    <p>Professional products, expert services, and cutting-edge solutions.</p>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/news-events">News & Events</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <p>Sultan Bin Zayed 1st street</p>
                    <p>Abu Dhabi, UAE</p>
                    <p>T: +971 26265664</p>
                    <p>M: +971 585823253</p>
                    <p>Email: info@probetek.ae</p>
                </div>
                <div className={styles.social}>
                    <h3>FOLLOW US</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://www.linkedin.com/company/probetek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; 2025 PROBETEK ENGINEERING. All rights reserved.</p>
            </div>
        </footer>
    );
}
