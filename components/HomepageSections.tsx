import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight, PiArrowRight, PiChatCircleText, PiWrench, PiCheckCircle } from 'react-icons/pi';
import HomeStatement from './HomeStatement';
import styles from './HomepageSections.module.css';

const partners = [
    { name: 'NGI Technologies', src: 'ngi.webp' }, { name: 'PEModule', src: 'pemodule.png' }, { name: 'EDIBON', src: 'edibon.jpg' }, { name: 'Sanwood', src: 'sanwood.png' }, { name: 'PONOVO', src: 'ponovo.png', dark: true }, { name: 'Clampco Sistemi', src: 'clampco.png' },
];

export function HomePartners() {
    return <section className={styles.partners} aria-label="Our technology partners"><div className={styles.partnerHeading}><p>Global expertise. Local access.</p><Link href="/partners">Meet our partners <PiArrowUpRight aria-hidden="true" /></Link></div><div className={styles.logos}>{partners.map((partner) => <div className={`${styles.logoTile} ${partner.dark ? styles.darkLogo : ''}`} key={partner.name}><Image src={`/probetek/partners/${partner.src}`} alt={partner.name} width={200} height={70} sizes="150px" /><span>{partner.name}</span></div>)}</div></section>;
}

const support = [
    { icon: PiChatCircleText, title: 'Start with your application', text: 'Tell us what you need to measure, test or teach. We help you identify suitable equipment and technical options.' },
    { icon: PiWrench, title: 'Bring the system together', text: 'Get support with equipment selection, laboratory planning, installation and commissioning.' },
    { icon: PiCheckCircle, title: 'Keep your project moving', text: 'Turn to our team for technical training, maintenance, troubleshooting and ongoing service support.' },
];

export function HomeSupport() {
    return <section className={styles.support} aria-labelledby="support-heading"><div className={styles.supportIntro}><p className={styles.eyebrow}>More than equipment supply</p><h2 id="support-heading">Expertise that stays<br />with your project.</h2><p>Good equipment is only part of the solution. We connect the technology you need with the practical support to put it to work.</p><Link className={styles.textLink} href="/services">Explore our engineering services <PiArrowUpRight aria-hidden="true" /></Link><div className={styles.localNote}><span>Our home. Your local team.</span><strong>Abu Dhabi, UAE <span aria-hidden="true">↗</span></strong></div></div><div className={styles.supportList}>{support.map(({ icon: Icon, title, text }, index) => <article key={title}><div className={styles.stepIcon}><Icon aria-hidden="true" /></div><div><span className={styles.stepNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>;
}

export function HomeAbout() {
    return <section className={styles.about} aria-label="Our approach"><div><p className={styles.eyebrow}>The Probetek approach</p><HomeStatement /></div><div className={styles.aboutCopy}><p>From an engineering classroom to an industrial test environment, every application has its own demands.</p><p>We bring together specialist manufacturers and local engineering knowledge to help you find a solution that fits.</p><Link className={styles.textLink} href="/company">Get to know Probetek <PiArrowUpRight aria-hidden="true" /></Link></div></section>;
}

const questions = [
    ['What solutions do you supply?', 'Our portfolio covers education and training, research and testing, environmental test chambers, pilot plants, and specialist oil and gas equipment.'],
    ['Can you help me choose equipment?', 'Yes. Share your application, technical requirements and project scope with our team so we can help you evaluate suitable options.'],
    ['Do you support installation and commissioning?', 'Our engineering services include equipment installation, commissioning, laboratory planning and integrated project support.'],
    ['Can you support existing equipment?', 'We offer preventive maintenance, troubleshooting, repair services and annual maintenance contracts. Contact us to discuss your equipment.'],
    ['Do you work with educational institutions?', 'Our education portfolio includes engineering teaching systems and practical training equipment for academic and research environments.'],
    ['Where is Probetek based?', 'Our office is at Office M2, Building 10, Al Nahyan Camp Tower, Abu Dhabi, UAE. You can reach us by phone, email or our enquiry form.'],
];

export function HomeFAQ() {
    return <section className={styles.faq} aria-labelledby="faq-heading"><div className={styles.faqIntro}><p className={styles.eyebrow}>A little more clarity</p><h2 id="faq-heading">Before we{' '}<br />get started.</h2><Link className={styles.textLink} href="/contact">Ask us a question <PiArrowUpRight aria-hidden="true" /></Link></div><div className={styles.questions}>{questions.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>;
}

export function HomeContact() {
    return <section className={styles.contact} aria-labelledby="contact-heading"><div><p className={styles.eyebrow}>Let’s put your next project in motion</p><h2 id="contact-heading">A technical challenge?<br />Let’s work through it.</h2><p>Tell us about your application. We’ll help you find the next step.</p></div><div className={styles.contactActions}><Link href="/contact" className={styles.contactButton}>Discuss your requirements <PiArrowUpRight aria-hidden="true" /></Link><a href="mailto:info@probetek.ae">Or email info@probetek.ae <PiArrowRight aria-hidden="true" /></a></div></section>;
}
