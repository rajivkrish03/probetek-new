
import { Metadata } from 'next';
import styles from './page.module.css';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us | Probetek Engineering',
    description: 'Get in touch with Probetek Engineering for your academic and industrial research equipment needs in Abu Dhabi, UAE.',
    alternates: {
        canonical: 'https://probetek.ae/contact',
    },
};

export default function Contact() {
    return (
        <main className={styles.main}>
            <section className={styles.contactExperience}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <p className={styles.eyebrow}>CONTACT PROBETEK ENGINEERING</p>
                        <h1>Let&apos;s talk about <span>your next project.</span></h1>
                        <p className={styles.introText}>Whether you&apos;re sourcing specialist equipment, planning a test facility or exploring an engineering solution, our team is here to help.</p>
                    </div>
                    <div className={styles.contactGrid}>
                        <aside className={styles.information}>
                            <p className={styles.sectionLabel}>GET IN TOUCH</p>
                            <h2>Expert support, from the first conversation.</h2>
                            <p className={styles.supportingText}>Tell us what you&apos;re working on. We&apos;ll connect you with the right person to discuss your requirements.</p>
                            <div className={styles.contactMethod}>
                                <span className={styles.methodLabel}>EMAIL</span>
                                <a href="mailto:info@probetek.ae">info@probetek.ae</a>
                            </div>
                            <div className={styles.contactMethod}>
                                <span className={styles.methodLabel}>PHONE</span>
                                <a href="tel:+97126265664">+971 2 626 5664</a>
                                <a href="tel:+971585823253">+971 58 582 3253</a>
                            </div>
                            <div className={styles.contactMethod}>
                                <span className={styles.methodLabel}>VISIT US</span>
                                <address>Office M2, Building 10<br />Al Nahyan Camp Tower<br />Abu Dhabi, United Arab Emirates</address>
                            </div>
                        </aside>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
