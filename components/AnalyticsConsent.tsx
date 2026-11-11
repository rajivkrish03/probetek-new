'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const KEY = 'probetek-analytics-consent';
type Choice = 'accepted' | 'rejected' | null;

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'accepted' || saved === 'rejected') setChoice(saved);
      else setOpen(true);
    } catch { setOpen(true); }
    setReady(true);
  }, []);
  const decide = (next: Exclude<Choice, null>) => {
    setChoice(next);
    setOpen(false);
    try { localStorage.setItem(KEY, next); } catch {}
    if (next === 'rejected' && typeof window !== 'undefined') {
      // Disable subsequent analytics collection. Script only loads when accepted.
      (window as Window & { ['ga-disable-G-JRFF0K40RS']?: boolean })['ga-disable-G-JRFF0K40RS'] = true;
    }
  };
  if (!ready) return null;
  return <>
    {choice === 'accepted' && <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JRFF0K40RS" strategy="afterInteractive" />
      <Script id="probetek-google-analytics" strategy="afterInteractive">{`
        window['ga-disable-G-JRFF0K40RS'] = false;
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JRFF0K40RS');
      `}</Script>
    </>}
    <button type="button" onClick={() => setOpen(true)} style={{position:'fixed',bottom:12,left:12,zIndex:9998,border:'1px solid #64748b',background:'#fff',color:'#0f172a',padding:'7px 12px',borderRadius:20,fontSize:12,cursor:'pointer'}}>Cookie preferences</button>
    {open && <section role="dialog" aria-modal="false" aria-label="Cookie preferences" style={{position:'fixed',bottom:54,left:12,right:12,maxWidth:480,zIndex:9999,background:'#fff',color:'#0f172a',padding:20,borderRadius:12,boxShadow:'0 8px 30px #0003',border:'1px solid #cbd5e1'}}>
      <h2 style={{fontSize:18,marginBottom:8}}>Your privacy choices</h2>
      <p style={{fontSize:14,lineHeight:1.6,marginBottom:12}}>Essential website features work without analytics. With your permission, Google Analytics helps us understand website usage. You can change your choice at any time. Read our <a href="/privacy-policy" style={{textDecoration:'underline'}}>Privacy Policy</a>.</p>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        <button type="button" onClick={() => decide('rejected')} style={{padding:'10px 14px',border:'1px solid #475569',borderRadius:8,background:'#fff',color:'#0f172a',cursor:'pointer'}}>Reject analytics</button>
        <button type="button" onClick={() => decide('accepted')} style={{padding:'10px 14px',border:0,borderRadius:8,background:'#0f766e',color:'#fff',cursor:'pointer'}}>Accept analytics</button>
      </div>
    </section>}
  </>;
}
