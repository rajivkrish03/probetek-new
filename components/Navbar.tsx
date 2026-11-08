'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PiArrowUpRight } from 'react-icons/pi';
import styles from './Navbar.module.css';

const links = [{ href: '/', label: 'Home' }, { href: '/products', label: 'Solutions' }, { href: '/services', label: 'Services' }, { href: '/company', label: 'Company' }, { href: '/partners', label: 'Partners' }, { href: '/news-events', label: 'Insights' }];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (!isOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setIsOpen(false); buttonRef.current?.focus(); }
            if (event.key === 'Tab') {
                const elements = [buttonRef.current, ...Array.from(navRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((el): el is HTMLButtonElement | HTMLAnchorElement => !!el);
                const first = elements[0], last = elements[elements.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }
        };
        document.addEventListener('keydown', handleKey);
        return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', handleKey); };
    }, [isOpen]);
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo} aria-label="Probetek Engineering home"><Image src="/probetek/logo.png" alt="Probetek Engineering" width={658} height={278} priority sizes="164px" /></Link>
            <button ref={buttonRef} className={`${styles.menuButton} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="main-navigation"><span /><span /></button>
            <nav ref={navRef} id="main-navigation" className={`${styles.nav} ${isOpen ? styles.open : ''}`} aria-label="Main navigation">
                <ul>{links.map(({ href, label }) => { const active = href === '/' ? pathname === '/' : pathname.startsWith(href); return <li key={href}><Link href={href} onClick={() => setIsOpen(false)} aria-current={active ? 'page' : undefined}>{label}</Link></li>; })}</ul>
                <Link className={styles.contact} href="/contact" onClick={() => setIsOpen(false)}>Discuss a project <PiArrowUpRight aria-hidden="true" /></Link>
            </nav>
        </header>
    );
}
