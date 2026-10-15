'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, CalendarDays, Check, Clock3, Heart, MapPin, Menu, Navigation, Sparkles, X } from 'lucide-react';

const mapsUrl = 'https://maps.app.goo.gl/F89WCm3bLqxLFbca8';
const profileUrl = 'https://msha.ke/samarts#links';
const photos = [
  { src: '/images/hotel-front.webp', alt: 'Ruwanara Royal Majestry hotel exterior', label: 'A place to gather' },
  { src: '/images/pool-night.webp', alt: 'Illuminated hotel pool at night', label: 'Evening glow' },
  { src: '/images/reception.webp', alt: 'Warmly decorated wedding reception hall', label: 'Celebration awaits' },
  { src: '/images/ceremony-arch.webp', alt: 'Elegant white floral ceremony arch', label: 'Little moments, forever' },
  { src: '/images/garden-path.webp', alt: 'Tropical garden walkway at the hotel', label: 'A beautiful setting' },
  { src: '/images/banquet-hall.webp', alt: 'Hotel banquet hall set for guests', label: 'Room for everyone' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const target = new Date('2027-01-20T00:00:00+05:30').getTime();
    const update = () => {
      const distance = Math.max(0, target - Date.now());
      setCountdown({ days: Math.floor(distance / 86400000), hours: Math.floor((distance % 86400000) / 3600000), minutes: Math.floor((distance % 3600000) / 60000), seconds: Math.floor((distance % 60000) / 1000) });
    };
    update(); const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { nodes.forEach((node) => node.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const copyVenue = async () => {
    try { await navigator.clipboard.writeText('Ruwanara Royal Majestry, Negombo Road, Narammala 60100, Sri Lanka'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.open(mapsUrl, '_blank', 'noopener,noreferrer'); }
  };
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Avindu and Yavishka home"><span className="brand-flower">❀</span><span>A <i>&</i> Y</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#story" onClick={closeMenu}>Our day</a><a href="#venue" onClick={closeMenu}>The venue</a><a href="#gallery" onClick={closeMenu}>Gallery</a><a className="nav-cta" href={mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Get directions <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <Image className="hero-image" src="/images/hotel-front.webp" alt="Ruwanara Royal Majestry, the venue for our wedding" fill priority sizes="100vw" />
        <div className="hero-shade" /><div className="petal petal-one" aria-hidden="true">✿</div><div className="petal petal-two" aria-hidden="true">✧</div><div className="petal petal-three" aria-hidden="true">❀</div>
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow"><span /> WITH FULL HEARTS, WE INVITE YOU <span /></div>
          <p className="hero-pretitle">Together with our families</p>
          <h1>Avindu <em>&</em><br/>Yavishka</h1>
          <div className="lotus-divider"><span></span><span className="lotus-icon">❀</span><span></span></div>
          <p className="hero-copy">Two hearts, one beautiful beginning.<br/>Come celebrate our forever with us.</p>
          <a href="#venue" className="hero-button">Find our celebration <ArrowDown size={16}/></a>
          <p className="hero-note">A day made brighter with you</p>
        </div>
        <div className="hero-bottom"><span>OUR WEDDING</span><span>WITH LOVE, ALWAYS</span></div>
      </section>

      <section className="invitation section-pad reveal" id="story">
        <div className="section-kicker"><Sparkles size={15}/> A LITTLE INVITATION</div>
        <h2>Our favourite chapter<br/><em>is better with you in it.</em></h2>
        <p className="invitation-copy">We’re so happy to share this special milestone with the people who mean the most to us. Please join us as we celebrate love, laughter, and the beginning of our life together.</p>
        <div className="signature"><span>With love,</span><strong>Avindu <i>&</i> Yavishka</strong></div>
        <div className="floral-stamp" aria-hidden="true"><span>❀</span><small>LOVE<br/>GROWS</small></div>
      </section>

      <section className="venue section-pad reveal" id="venue">
        <div className="venue-photo"><Image src="/images/pool-night.webp" alt="The hotel pool glowing in the evening" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="venue-panel">
          <div className="section-kicker"><MapPin size={15}/> WHERE WE’LL MEET</div>
          <h2>Meet us at<br/><em>Ruwanara Royal Majestry</em></h2>
          <p className="venue-intro">A beautiful place for a beautiful beginning. We can’t wait to welcome you here.</p>
          <div className="venue-details">
            <div className="detail-icon"><MapPin size={19}/></div><div><b>Wedding venue</b><p>Ruwanara Royal Majestry<br/>Negombo Road, Narammala 60100<br/>Sri Lanka</p></div>
          </div>
          <div className="venue-details">
            <div className="detail-icon"><Navigation size={18}/></div><div><b>Coming from somewhere?</b><p>Open the exact venue pin in Google Maps for step-by-step directions.</p></div>
          </div>
          <div className="venue-actions"><a className="button-primary" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16}/> Open Google Maps <ArrowUpRight size={15}/></a><button className="button-secondary" onClick={copyVenue}>{copied ? <Check size={16}/> : <span className="copy-symbol">▤</span>}{copied ? 'Address copied' : 'Copy address'}</button></div>
          <a className="hotel-link" href={profileUrl} target="_blank" rel="noreferrer">Hotel links & contact details <ArrowUpRight size={14}/></a>
        </div>
      </section>

      <section className="details-strip reveal">
        <div className="strip-item"><span className="strip-icon"><Heart size={19}/></span><div><small>THE OCCASION</small><b>A wedding celebration</b></div></div>
        <div className="strip-item"><span className="strip-icon"><MapPin size={19}/></span><div><small>THE DESTINATION</small><b>Narammala, Sri Lanka</b></div></div>
        <div className="strip-item"><span className="strip-icon"><CalendarDays size={19}/></span><div><small>THE DATE</small><b>Wednesday, 20 January 2027</b></div></div>
      </section>

      <section className="gallery-section section-pad reveal" id="gallery">
        <div className="gallery-heading"><div><div className="section-kicker"><Sparkles size={15}/> A GLIMPSE OF THE SETTING</div><h2>A little <em>lovely.</em></h2></div><p>Warm lights, beautiful spaces, and memories waiting to be made.</p></div>
        <div className="gallery-grid">{photos.map((photo, i) => <a className={`gallery-card gallery-card-${i + 1}`} href={photo.src} target="_blank" rel="noreferrer" key={photo.src} aria-label={`View photo: ${photo.alt}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 50vw, 33vw"/><span>{photo.label}</span></a>)}</div>
      </section>

      <section className="countdown-section reveal" aria-label="Countdown to the wedding">
        <div className="section-kicker"><CalendarDays size={15}/> THE COUNTDOWN TO OUR DAY</div>
        <h2>Until we say <em>“I do”</em></h2>
        <div className="countdown-grid">
          <div className="countdown-cell"><strong>{countdown.days}</strong><span>Days</span></div>
          <div className="countdown-cell"><strong>{String(countdown.hours).padStart(2, '0')}</strong><span>Hours</span></div>
          <div className="countdown-cell"><strong>{String(countdown.minutes).padStart(2, '0')}</strong><span>Minutes</span></div>
          <div className="countdown-cell"><strong>{String(countdown.seconds).padStart(2, '0')}</strong><span>Seconds</span></div>
        </div>
        <p>Wednesday · 20 January 2027</p>
      </section>

      <section className="closing reveal">
        <div className="closing-flower">❀</div><p className="closing-kicker">SAVE A LITTLE SPACE IN YOUR HEART</p><h2>We can’t wait<br/>to <em>celebrate with you.</em></h2><p className="closing-copy">Join us on Wednesday, 20 January 2027, and make our day even more meaningful.<br/>See you at Ruwanara Royal Majestry!</p><a href={mapsUrl} target="_blank" rel="noreferrer" className="button-primary closing-button"><MapPin size={16}/> Find the venue <ArrowUpRight size={15}/></a>
      </section>
      <footer><a className="footer-monogram" href="#home">A <i>&</i> Y</a><p>Made with love, for our favourite people.</p><a href={profileUrl} target="_blank" rel="noreferrer">Venue & contact links <ArrowUpRight size={13}/></a><small>AVINDU & YAVISHKA · OUR WEDDING</small></footer>
    </main>
  );
}
