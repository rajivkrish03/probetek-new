import Link from 'next/link';
import { PiArrowUpRight, PiGraduationCap, PiWaveform, PiThermometer, PiFactory, PiDrop } from 'react-icons/pi';
import styles from './ProductCategories.module.css';
import { productsData } from '@/app/products/data';

const solutions = [
    { id: 'research-test-solutions', icon: PiWaveform, label: 'Research & test solutions', description: 'From power electronics to power systems. Find the tools to test, measure and develop with confidence.', tags: ['Power electronics', 'Power systems', 'Real time simulation'], cta: 'Explore testing solutions' },
    { id: 'environmental-test-solutions', icon: PiThermometer, label: 'Environmental testing', description: 'Understand how your products perform under temperature, humidity and environmental stress.', tags: ['Temperature & humidity', 'Product reliability'], cta: 'Explore test chambers' },
    { id: 'education-training', icon: PiGraduationCap, label: 'Education & training', description: 'Bring engineering concepts to life with practical learning systems and teaching equipment.', tags: [], cta: 'Explore education systems' },
    { id: 'oil-gas-industry', icon: PiDrop, label: 'Oil & gas solutions', description: 'Specialist lighting and monitoring equipment for demanding industrial environments.', tags: [], cta: 'Explore industrial solutions' },
    { id: 'pilot-plants', icon: PiFactory, label: 'Pilot plants', description: 'Bridge the gap between laboratory learning and practical process engineering.', tags: [], cta: 'Explore pilot plants' },
];

export default function ProductCategories() {
    return (
        <section className={styles.section} id="solutions" aria-labelledby="solutions-heading">
            <div className={styles.container}>
                <div className={styles.header}><div><p className={styles.eyebrow}>Solutions for your next challenge</p><h2 id="solutions-heading">Your application.<br />Our starting point.</h2></div><div className={styles.intro}><p>Explore equipment and systems for the way you teach, research, test and operate.</p><Link href="/products">Browse all products <PiArrowUpRight aria-hidden="true" /></Link></div></div>
                <div className={styles.grid}>
                    {solutions.filter((solution) => productsData.some((category) => category.id === solution.id)).map((solution, index) => {
                        const Icon = solution.icon;
                        return <Link key={solution.id} href={`/products/${solution.id}`} className={`${styles.card} ${index === 0 ? styles.featured : ''}`}>
                            <div className={styles.cardTop}><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
                            <h3>{solution.label}</h3><p>{solution.description}</p>
                            {solution.tags.length > 0 ? <ul className={styles.tags}>{solution.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> : null}
                            <span className={styles.action}>{solution.cta} <PiArrowUpRight aria-hidden="true" /></span>
                        </Link>;
                    })}
                </div>
                <div className={styles.help}><span>Not sure which system fits your application?</span><Link href="/contact">Talk it through with our team <PiArrowUpRight aria-hidden="true" /></Link></div>
            </div>
        </section>
    );
}
