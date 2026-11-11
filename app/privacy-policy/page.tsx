import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Privacy Policy | Probetek Engineering', description: 'How Probetek Engineering handles personal information submitted through our website.', alternates: { canonical: 'https://probetek.ae/privacy-policy' } };

export default function PrivacyPolicy() {
  return <main style={{maxWidth:850,margin:'0 auto',padding:'64px 24px',lineHeight:1.8}}>
    <h1>Privacy Policy</h1>
    <p><strong>Probetek Engineering — Abu Dhabi, United Arab Emirates</strong></p>
    <p>Last updated: 11 November 2026</p>
    <p>We respect your privacy. This notice explains how we handle information you provide when contacting us about engineering equipment, services, quotations and business enquiries.</p>
    <h2>Information we collect</h2>
    <p>When you use our contact form, we collect your name, email address, subject and message, including any personal information you choose to include. We may also receive business contact details when you contact us by email, telephone or WhatsApp. Our website uses Google Analytics, which may collect device and usage information where enabled.</p>
    <h2>Why we use information</h2>
    <p>We use enquiry details to respond, discuss requirements, prepare quotations, provide requested support, maintain business correspondence and meet applicable legal obligations. We will assess the appropriate lawful basis for each activity under applicable UAE data protection law.</p>
    <h2>Marketing</h2>
    <p>We are not currently operating a general marketing newsletter through this form. If we introduce promotional emails, we will provide a separate choice where required and explain how to opt out.</p>
    <h2>Service providers and transfers</h2>
    <p>Our contact form currently uses Formspree to process submissions. We may receive the enquiries through our email service and store related business records in our systems. We also use Google Analytics for website measurement. These providers may process information outside the UAE. We assess applicable safeguards and legal conditions for international transfers.</p>
    <h2>Retention and security</h2>
    <p>We retain personal information only for as long as reasonably necessary for the stated purposes, business recordkeeping, dispute handling and applicable legal requirements. We apply appropriate technical and organisational safeguards and restrict access to authorised personnel. Exact retention periods are being documented and will be reflected here before publication.</p>
    <h2>Your privacy rights</h2>
    <p>Subject to applicable law and exceptions, you may request information about your data, correction, deletion, or other available rights. Contact <a href="mailto:info@probetek.ae">info@probetek.ae</a>. We may need to verify your identity before responding.</p>
    <h2>Updates and contact</h2>
    <p>We may update this notice as our practices change. Questions or privacy requests: <a href="mailto:info@probetek.ae">info@probetek.ae</a>.</p>
    <p><Link href="/contact">Contact Probetek</Link></p>
  </main>;
}
