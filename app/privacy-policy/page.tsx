import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'How Probetek Engineering handles personal information submitted through our website.', alternates: { canonical: 'https://probetek.ae/privacy-policy' } };

export default function PrivacyPolicy() {
  return <main style={{maxWidth:850,margin:'0 auto',padding:'64px 24px',lineHeight:1.8}}>
    <h1>Privacy Policy</h1>
    <p><strong>Probetek Engineering — Abu Dhabi, United Arab Emirates</strong></p>
    <p>Last updated: 11 November 2026</p>
    <p>We respect your privacy. This notice explains how we handle information you provide when contacting us about engineering equipment, services, quotations and business enquiries.</p>
    <h2>Information we collect</h2>
    <p>When you use our contact form, we collect your name, email address, subject and message, including any personal information you choose to include. We may also receive business contact details when you contact us by email, telephone or WhatsApp. Our website uses Google Analytics, which may collect device and usage information where enabled.</p>
    <h2>Why we use information</h2>
    <p>We use enquiry details to respond, discuss requirements, prepare quotations, provide requested support, maintain business correspondence and meet applicable legal obligations. We process personal information in accordance with applicable legal requirements.</p>
    <h2>Marketing</h2>
    <p>Our contact form includes an optional, unchecked choice for future product news and updates. We do not treat a business enquiry alone as consent to promotional messages. You may withdraw marketing consent by contacting us.</p>
    <h2>Service providers and transfers</h2>
    <p>Contact form submissions are stored in our Supabase-hosted enquiry database and made available to authorised staff through our internal admin portal. The stored information includes your name, email address, subject, message, submission time, review status and whether you opted in to future product news and updates. Contact form submissions do not automatically send enquiry emails. We also use Google Analytics for website measurement where enabled. Our technology providers may process or store information outside the UAE. Contact us for more information about the processing and location of your enquiry data.</p>
    <h2>Retention and security</h2>
    <p>We retain personal information only for as long as reasonably necessary for the stated purposes, business recordkeeping, dispute handling and applicable legal requirements. We apply appropriate technical and organisational safeguards and restrict access to authorised personnel. For details of retention periods applicable to your enquiry, contact us at the address below.</p>
    <h2>Your privacy rights</h2>
    <p>Subject to applicable law and exceptions, you may request information about your data, correction, deletion, or other available rights. Contact <a href="mailto:info@probetek.ae">info@probetek.ae</a>. We may need to verify your identity before responding.</p>
    <h2>Updates and contact</h2>
    <p>We may update this notice as our practices change. Questions or privacy requests: <a href="mailto:info@probetek.ae">info@probetek.ae</a>.</p>
    <p><Link href="/contact">Contact Probetek</Link></p>
  </main>;
}
