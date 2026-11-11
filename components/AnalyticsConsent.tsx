'use client';

import {useEffect, useState} from 'react';

const KEY = 'probetek-analytics-consent';
const GA_ID = 'G-JRFF0K40RS';
type Choice = 'accepted' | 'rejected' | null;
type GAWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  ['ga-disable-G-JRFF0K40RS']?: boolean;
};

function clearAnalyticsCookies() {
  const hostname = window.location.hostname;
  const domains = ['', hostname, '.' + hostname, '.probetek.ae'];
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0]?.trim();
    if (!name || !/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) continue;
    for (const domain of domains) {
      const domainPart = domain ? '; domain=' + domain : '';
      document.cookie = name + '=; Max-Age=0; path=/' + domainPart + '; SameSite=Lax';
    }
  }
}

function disableAnalytics() {
  const w = window as GAWindow;
  w['ga-disable-G-JRFF0K40RS'] = true;
  w.gtag?.('consent', 'update', {analytics_storage: 'denied'});
  document.getElementById('probetek-ga-script')?.remove();
  clearAnalyticsCookies();
}

function enableAnalytics() {
  const w = window as GAWindow;
  w['ga-disable-G-JRFF0K40RS'] = false;
  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: unknown[]) => { w.dataLayer?.push(args); };
  w.gtag('consent', 'default', {analytics_storage: 'granted'});
  w.gtag('js', new Date());
  w.gtag('config', GA_ID);
  if (!document.getElementById('probetek-ga-script')) {
    const script = document.createElement('script');
    script.id = 'probetek-ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Deny before reading stored consent so nothing loads by default.
    (window as GAWindow)['ga-disable-G-JRFF0K40RS'] = true;
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    if (saved === 'accepted') {
      setChoice('accepted');
      enableAnalytics();
    } else {
      disableAnalytics();
      if (saved === 'rejected') setChoice('rejected');
      else setOpen(true);
    }
    setReady(true);
  }, []);

  function decide(next: Exclude<Choice, null>) {
    if (next === 'accepted') enableAnalytics();
    else disableAnalytics();
    setChoice(next);
    setOpen(false);
    try { localStorage.setItem(KEY, next); } catch {}
  }

  if (!ready) return null;
  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label="Open cookie preferences" style={{position:'fixed',bottom:12,left:12,zIndex:9998,border:'1px solid #64748b',background:'#fff',color:'#0f172a',padding:'8px 13px',borderRadius:20,fontSize:12,cursor:'pointer'}}>Cookie preferences</button>
    {open && <section role="dialog" aria-modal="false" aria-label="Cookie preferences" style={{position:'fixed',bottom:54,left:12,right:12,maxWidth:480,zIndex:9999,background:'#fff',color:'#0f172a',padding:20,borderRadius:12,boxShadow:'0 8px 30px #0003',border:'1px solid #cbd5e1'}}>
      <h2 style={{fontSize:18,marginBottom:8}}>Your privacy choices</h2>
      <p style={{fontSize:14,lineHeight:1.6,marginBottom:12}}>Essential website features work without analytics. With your permission, Google Analytics helps us understand website usage. You can change your choice at any time. For privacy enquiries, <a href="/contact" style={{textDecoration:'underline'}}>contact our team</a>.</p>
      <p style={{fontSize:13,marginBottom:12}}>Current analytics preference: <strong>{choice === 'accepted' ? 'Accepted' : choice === 'rejected' ? 'Rejected' : 'Not selected'}</strong></p>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        <button type="button" onClick={() => decide('rejected')} style={{padding:'10px 14px',border:'1px solid #475569',borderRadius:8,background:'#fff',color:'#0f172a',cursor:'pointer'}}>Reject analytics</button>
        <button type="button" onClick={() => decide('accepted')} style={{padding:'10px 14px',border:0,borderRadius:8,background:'#0f766e',color:'#fff',cursor:'pointer'}}>Accept analytics</button>
      </div>
    </section>}
  </>;
}
