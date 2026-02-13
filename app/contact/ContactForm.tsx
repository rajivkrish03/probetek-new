'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);


        try {
            const response = await fetch('https://formspree.io/f/mreapyaa', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

            } else {
                const result = await response.json();
                console.error('Formspree Error:', result);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.formSection}>
            <div className={styles.formContainer}>
                <h2>Send us a Message</h2>
                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <h3>Thank you!</h3>
                        <p>Your message has been sent successfully. We will get back to you soon.</p>
                        <button onClick={() => setStatus('idle')} className={styles.submitButton}>Send Another Message</button>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'error' && <p className={styles.errorMessage}>Something went wrong. Please try again.</p>}
                    </form>
                )}
            </div>
        </div>
    );
}
