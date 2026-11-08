'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './HomepageSections.module.css';

export default function HomeStatement() {
    const ref = useRef<HTMLParagraphElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return <p ref={ref} className={`${styles.statement} ${visible ? styles.revealed : ''}`}>{['Global technology.', 'Local understanding.', 'One engineering partner.'].map((line) => <span key={line}>{line.split(' ').map((word) => <span key={word}>{word} </span>)}</span>)}</p>;
}
