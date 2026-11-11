'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [website, setWebsite] = useState('');
    const [error, setError] = useState('');
    const [marketingOptIn, setMarketingOptIn] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (status === 'submitting') return;
        setStatus('submitting');
        setError('');
        try {
            const response = await fetch('https://qghnojixdexkdcohrmfk.supabase.co/functions/v1/contact-enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, website, marketing_opt_in: marketingOptIn }),
            });
            const result = await response.json();
            if (!response.ok || result.success !== true) {
                throw new Error(result.error || 'We could not save your enquiry. Please try again.');
            }
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setMarketingOptIn(false);
            setWebsite('');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'We could not save your enquiry. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className={styles.formSection}>
            <div className={styles.formContainer}>
                <h2>Send us a Message</h2>
                {status === 'success' ? (
                    <div className={styles.successMessage} role="status">
                        <h3>Thank you!</h3>
                        <p>Your enquiry has been received. Our team will review it and get back to you soon.</p>
                        <button onClick={() => setStatus('idle')} className={styles.submitButton}>Send Another Message</button>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
                        <div aria-hidden="true" style={{position:'absolute',width:1,height:1,overflow:'hidden',clipPath:'inset(50%)'}}>
                            <label htmlFor="website">Leave this field empty</label>
                            <input id="website" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} maxLength={120} disabled={status === 'submitting'} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} maxLength={254} disabled={status === 'submitting'} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} maxLength={200} disabled={status === 'submitting'} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} maxLength={10000} disabled={status === 'submitting'} required></textarea>
                        </div>

                        <p style={{fontSize:'0.875rem',lineHeight:1.6}}>We use your details to respond to your enquiry and manage related business correspondence. See our <Link href="/privacy-policy" style={{textDecoration:'underline'}}>Privacy Policy</Link>.</p>
                        <label style={{display:'flex',alignItems:'flex-start',gap:'0.75rem',fontSize:'0.875rem',lineHeight:1.6}}>
                          <input type="checkbox" disabled={status === 'submitting'} checked={marketingOptIn} onChange={e => setMarketingOptIn(e.target.checked)} style={{marginTop:'0.3rem'}} />
                          <span>Optional: I would like to receive future product news and updates from Probetek Engineering. I can unsubscribe at any time.</span>
                        </label>
                        <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'error' && <p className={styles.errorMessage} role="alert">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
}
