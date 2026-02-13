'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logo}>
                        <img src="/probetek/logo.png" alt="Probetek Engineering" />
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/company" onClick={() => setIsMenuOpen(false)}>Company</Link></li>
                        <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><Link href="/applications" onClick={() => setIsMenuOpen(false)}>Applications</Link></li>
                        <li><Link href="/partners" onClick={() => setIsMenuOpen(false)}>Partners</Link></li>
                        <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
