'use client';

import {useState, type FormEvent} from 'react';
import Link from 'next/link';
import {Theme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import styles from './preview.module.css';

type Tab = 'contact' | 'cookies' | 'privacy' | 'terms';
const tabs: {id:Tab; label:string}[] = [
  {id:'contact',label:'Contact form'},
  {id:'cookies',label:'Cookie preferences'},
  {id:'privacy',label:'Privacy Policy'},
  {id:'terms',label:'Terms of Use'},
];
const privacySections = [
  {heading:'Information we collect',body:'When you contact Probetek, we collect your name, email address, subject and message. We may also process business contact information and, with your permission, analytics data.'},
  {heading:'How we use information',body:'We use enquiry details to respond, discuss requirements, prepare quotations, provide requested support and maintain business correspondence.'},
  {heading:'Service providers and transfers',body:'The current contact form uses Formspree. We also use email services and Google Analytics where permitted. International processing and data retention details require operational verification.'},
  {heading:'Your choices and rights',body:'You can contact info@probetek.ae to ask about your personal information and applicable rights. Marketing updates, if introduced, will have a separate optional choice.'},
];
const termsSections = [
  {heading:'Website information',body:'Product specifications, descriptions and availability are informational and may change. This website does not constitute a binding quotation or offer.'},
  {heading:'Intellectual property',body:'Probetek branding and original website materials are protected. Third-party trademarks and product information remain with their respective owners.'},
  {heading:'External websites',body:'Links to third-party websites are provided for convenience; those sites have their own policies.'},
  {heading:'Commercial transactions',body:'Product purchases, quotations, warranties and engineering services are subject to separately agreed commercial terms.'},
];

export default function AstryxCompliancePreview() {
  const [tab,setTab] = useState<Tab>('contact');
  const [marketing,setMarketing] = useState(false);
  const [cookieChoice,setCookieChoice] = useState<'accepted'|'rejected'|null>(null);
  const [submitted,setSubmitted] = useState(false);
  function previewSubmit(event:FormEvent<HTMLFormElement>) {event.preventDefault();setSubmitted(true);}
  return <Theme theme={neutralTheme}>
    <main className={styles.shell}>
      <div className={styles.topline}><span className={styles.brand}>PROBETEK <span>ENGINEERING</span></span><span className={styles.draft}>LOCAL DESIGN PREVIEW · NOT PUBLISHED</span></div>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Meta Astryx · design proposal</p>
        <h1>Clearer, more trustworthy customer experiences.</h1>
        <p>Explore proposed Astryx interfaces for Probetek’s contact form, analytics preferences and legal pages. All interactions here are simulated; no enquiries are sent and no analytics preferences are saved.</p>
      </header>
      <nav className={styles.tabs} aria-label="Preview sections">
        {tabs.map(item=><button key={item.id} type="button" aria-current={tab===item.id?'page':undefined} className={tab===item.id?styles.activeTab:styles.tab} onClick={()=>{setTab(item.id);setSubmitted(false)}}>{item.label}</button>)}
      </nav>
      {tab==='contact' && <section className={styles.twoColumns} aria-labelledby="contact-title">
        <div className={styles.side}><p className={styles.eyebrow}>01 / Enquiries</p><h2 id="contact-title">Let’s talk about your project.</h2><p>Tell us about your testing, engineering or laboratory requirements. Our team in Abu Dhabi will help you find the right solution.</p><div className={styles.fact}><strong>Abu Dhabi, UAE</strong><span>info@probetek.ae</span><span>+971 2 626 5664</span></div></div>
        <Card maxWidth={600} elevation="low"><div className={styles.cardBody}>
          <h3>Send an enquiry</h3><p className={styles.muted}>Our team will respond to your business enquiry.</p>
          {submitted?<div className={styles.success} role="status"><h3>Preview successful</h3><p>This is a design demo. No message was transmitted to Formspree or Probetek.</p><Button label="Try again" variant="primary" onClick={()=>setSubmitted(false)}/></div>:
          <form onSubmit={previewSubmit} className={styles.form}>
            <div className={styles.fieldGrid}><label>Full name<input name="name" autoComplete="name" required placeholder="Your full name"/></label><label>Business email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div>
            <label>Subject<input name="subject" required placeholder="Equipment enquiry, quotation, or support"/></label>
            <label>How can we help?<textarea name="message" required rows={5} placeholder="Tell us about your project and requirements…"/></label>
            <p className={styles.notice}>We use your details to respond to your enquiry. Read our <button type="button" className={styles.textButton} onClick={()=>setTab('privacy')}>Privacy Policy</button>.</p>
            <label className={styles.check}><input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)}/><span>Optional: Send me future product news and updates. I can unsubscribe at any time.</span></label>
            <Button label="Preview form submission" variant="primary" type="submit"/>
          </form>}
        </div></Card>
      </section>}
      {tab==='cookies' && <section className={styles.demoSection} aria-labelledby="cookies-title">
        <div className={styles.side}><p className={styles.eyebrow}>02 / Analytics preferences</p><h2 id="cookies-title">Give visitors a meaningful choice.</h2><p>Analytics remains optional. The actual website consent implementation is separate from this visual demonstration.</p></div>
        <Card maxWidth={610} elevation="low"><div className={styles.cardBody}>
          <p className={styles.eyebrow}>Cookie preferences</p><h3>Your privacy matters</h3><p>Essential technologies keep the website working. With your permission, Google Analytics helps us understand website usage and improve our services.</p>
          <div className={styles.choice}><div><strong>Essential</strong><span>Required for core functionality</span></div><strong>Always active</strong></div>
          <div className={styles.choice}><div><strong>Analytics</strong><span>Google Analytics — optional</span></div><strong>{cookieChoice==='accepted'?'Allowed':cookieChoice==='rejected'?'Declined':'Not selected'}</strong></div>
          <div className={styles.actions}><Button label="Reject analytics" variant="secondary" onClick={()=>setCookieChoice('rejected')}/><Button label="Accept analytics" variant="primary" onClick={()=>setCookieChoice('accepted')}/></div>
          <p className={styles.muted} role="status">{cookieChoice?('Demo choice: '+cookieChoice+'. This choice is not stored or sent.'): 'Choose either option to preview its visual state.'}</p>
        </div></Card>
      </section>}
      {(tab==='privacy'||tab==='terms') && <section className={styles.documentLayout} aria-labelledby="document-title">
        <aside className={styles.documentAside}><p className={styles.eyebrow}>0{tab==='privacy'?'3':'4'} / Legal</p><h2>{tab==='privacy'?'Privacy Policy':'Terms of Use'}</h2><p>Probetek Engineering<br/>Abu Dhabi, UAE</p><p className={styles.muted}>Draft for review · 11 November 2026</p><div className={styles.warning}>Content is an illustrative summary. The complete draft requires legal and operational review before publication.</div></aside>
        <Card maxWidth={820} elevation="low"><article className={styles.cardBody}>
          <p className={styles.eyebrow}>PROBETEK ENGINEERING</p><h2 id="document-title">{tab==='privacy'?'Privacy Policy':'Website Terms of Use'}</h2>
          <p className={styles.lead}>{tab==='privacy'?'We respect your privacy and want you to understand how your information is handled.':'These terms explain the general conditions for using the Probetek Engineering website.'}</p>
          {(tab==='privacy'?privacySections:termsSections).map((section,i)=><section className={styles.legalSection} key={section.heading}><p className={styles.number}>0{i+1}</p><h3>{section.heading}</h3><p>{section.body}</p></section>)}
          <div className={styles.legalFooter}>Questions? <a href="mailto:info@probetek.ae">info@probetek.ae</a></div>
        </article></Card>
      </section>}
      <footer className={styles.previewFooter}><span>Probetek · Astryx design experiment</span><span><Link href="/contact">Existing contact page</Link> · <Link href="/privacy-policy">Existing draft policy</Link> · <Link href="/terms">Existing draft terms</Link></span></footer>
    </main>
  </Theme>;
}
