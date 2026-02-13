
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
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team for inquiries and support.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <ContactForm />

                    <div className={styles.locationCard}>
                        <div className={styles.locationInfo}>
                            <h2>Abu Dhabi</h2>
                            <p className={styles.country}>UNITED ARAB EMIRATES</p>
                            <hr className={styles.divider} />

                            <div className={styles.contactDetails}>
                                <div className={styles.detailItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <div>
                                        <p><strong>+971 2 6265664</strong></p>
                                        <p className={styles.subText}>Mobile: +971 58 582 3253</p>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <p>info@probetek.ae</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <div>
                                        <p><strong>Sultan Bin Zayed 1st Street</strong></p>
                                        <p>P.O Box No. 6442</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
