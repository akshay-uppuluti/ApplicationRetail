import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowUpRight, Check, ChevronDown, ChevronRight, CircleCheck, Clock3, Instagram, Layers3, MapPin, Menu, MessageCircle, PackageCheck, Phone, Quote, ShieldCheck, Sparkles, Star, Truck, Users, X } from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();
const phone = '7989380584';
const whatsapp = 'https://wa.me/917989380584';

const products = [
  { title: 'Paper Plates', copy: 'Everyday plates with a clean finish, ready for homes, stalls and busy kitchens.', image: '/plates.jpg', tag: 'Everyday essential' },
  { title: 'Silver Laminated Plates', copy: 'A polished, festive finish for celebrations, pooja, catering and special menus.', image: '/laminated.jpg', tag: 'For occasions' },
  { title: 'Disposable Glasses', copy: 'Practical, clear and dependable for tea, water, juice and service counters.', image: '/glasses.jpg', tag: 'Fast-moving' },
  { title: 'Paper Cups', copy: 'Easy-to-stack cups that keep service moving at tea stalls, offices and functions.', image: '/glasses.jpg', tag: 'Service ready' },
];

const gallery = [
  { image: '/plates.jpg', title: 'Everyday paper plates', type: 'Plates' },
  { image: '/laminated.jpg', title: 'Silver laminated finish', type: 'Plates' },
  { image: '/glasses.jpg', title: 'Clear disposable glasses', type: 'Glasses' },
  { image: '/glasses.jpg', title: 'Paper cups for service', type: 'Cups' },
  { image: '/packing.jpg', title: 'Packed for wholesale', type: 'Packaging' },
  { image: '/plates.jpg', title: 'Stock for the next function', type: 'Packaging' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [lightbox, setLightbox] = useState<(typeof gallery)[number] | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 680);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  const shownGallery = galleryFilter === 'All' ? gallery : gallery.filter((item) => item.type === galleryFilter);

  return (
    <main className="site-shell">
      <div className="top-strip">
        <div className="page-width top-strip-inner">
          <span><Clock3 size={14} /> Open today · Call before you visit</span>
          <span className="top-address"><MapPin size={14} /> Nirmal, Telangana</span>
          <a href={`tel:${phone}`}>Speak to us <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <header className="site-header">
        <div className="page-width header-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Go to top">
            <span className="brand-mark">A</span>
            <span className="brand-copy"><strong>Annapurna</strong><small>Paper Plates & Glasses Wholesale</small></span>
          </button>
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => go('about')}>About</button>
            <button onClick={() => go('products')}>Products</button>
            <button onClick={() => go('why-us')}>Why us</button>
            <button onClick={() => go('gallery')}>Gallery</button>
            <button onClick={() => go('contact')}>Contact</button>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${phone}`}><Phone size={16} /> <span>{phone}</span></a>
            <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
            <button className="button button-small" onClick={() => setQuoteOpen(true)}>Get a quote <ArrowUpRight size={15} /></button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-wash" />
        <div className="page-width hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> Local supply. Professional standards.</div>
            <h1>Ready for<br /><em>every gathering.</em></h1>
            <p className="hero-lead">Quality paper plates and disposable glasses at wholesale prices — supplied with the care of a dependable local partner.</p>
            <div className="hero-actions">
              <button className="button" onClick={() => setQuoteOpen(true)}>Plan a bulk order <ArrowUpRight size={17} /></button>
              <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><span>US</span><span>AP</span><span>+</span></div><span>Trusted by homes, stalls & caterers across Nirmal</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="hero-photo"><img src="/plates.jpg" alt="Stacked paper plates ready for wholesale supply" /></div>
            <div className="floating-note note-one"><span className="note-icon"><PackageCheck size={17} /></span><span><strong>Bulk-ready stock</strong><small>For your next function</small></span></div>
            <div className="floating-note note-two"><span className="star-wrap"><Star size={14} fill="currentColor" /></span><span><strong>Quality checked</strong><small>Before it leaves us</small></span></div>
            <div className="hero-stamp">Since<br /><strong>local</strong><br />always</div>
          </div>
        </div>
        <div className="page-width scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="trust-band">
        <div className="page-width trust-inner">
          <span className="trust-intro">The everyday essentials<br /><b>behind good hosting.</b></span>
          <div className="trust-items"><span><CircleCheck /> Consistent quality</span><span><Truck /> Bulk quantities</span><span><Users /> Friendly local service</span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="page-width two-col about-grid">
          <div className="section-intro"><div className="eyebrow">01 / About us</div><h2>A supplier you can<br /><em>count on.</em></h2><div className="rule" /></div>
          <div className="about-content"><p className="large-copy">Annapurna Paper Plates & Disposable Glasses Wholesale is a local Nirmal business built around one simple promise: make it easy to get good-quality serving essentials, exactly when you need them.</p><p>From a family lunch to a hotel's daily service, a tea stall's morning rush or a wedding with hundreds of guests, we help you buy confidently and plan without last-minute surprises.</p><div className="owner-sign"><span className="signature">U. Shankar</span><span>Owner & local supply partner</span></div></div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="page-width">
          <div className="section-heading"><div><div className="eyebrow">02 / What we supply</div><h2>Stocked for the<br /><em>way you serve.</em></h2></div><p>Simple, useful products. Fair wholesale pricing. Enough choice to get the job done right.</p></div>
          <div className="product-list">{products.map((product, index) => <article className="product-card" key={product.title}><div className="product-image"><img src={product.image} alt={product.title} /><span className="product-number">0{index + 1}</span></div><div className="product-info"><span className="product-tag">{product.tag}</span><h3>{product.title}</h3><p>{product.copy}</p><button className="arrow-button" onClick={() => setQuoteOpen(true)}>Ask about quantity <ChevronRight size={17} /></button></div></article>)}</div>
          <div className="bulk-callout"><div className="bulk-symbol"><Layers3 size={28} /></div><div><span className="eyebrow">Need more than a few packs?</span><h3>Bulk supply for functions & events.</h3><p>Tell us your date, guest count and product needs. We will help you work out a practical order.</p></div><button className="button button-light" onClick={() => setQuoteOpen(true)}>Start a bulk enquiry <ArrowUpRight size={16} /></button></div>
        </div>
      </section>

      <section id="why-us" className="section why-section">
        <div className="page-width why-grid">
          <div className="why-heading"><div className="eyebrow">03 / Why Annapurna</div><h2>Business done<br /><em>the right way.</em></h2><p>Good service is not a special occasion. It is how we show up every day.</p></div>
          <div className="reason-list">{[['01', 'Premium quality products', 'Clean finishes and dependable products chosen for real-world service.'], ['02', 'Competitive wholesale pricing', 'Straightforward pricing that makes sense for regular and larger orders.'], ['03', 'Bulk supply available', 'Planning a wedding or event? We are ready to work with your quantity.'], ['04', 'Reliable service', 'Clear communication, practical guidance and a local team that follows through.'], ['05', 'Customer satisfaction', 'We want your next order to feel easier than the last one.']].map(([number, title, copy]) => <div className="reason" key={number}><span className="reason-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ShieldCheck size={20} /></div>)}</div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="page-width">
          <div className="section-heading gallery-heading"><div><div className="eyebrow">04 / A closer look</div><h2>Made for the<br /><em>moment.</em></h2></div><div className="filter-tabs">{['All', 'Plates', 'Cups', 'Glasses', 'Packaging'].map((filter) => <button className={galleryFilter === filter ? 'active' : ''} onClick={() => setGalleryFilter(filter)} key={filter}>{filter}</button>)}</div></div>
          <div className="gallery-grid">{shownGallery.map((item, index) => <button className={`gallery-tile tile-${index + 1}`} key={`${item.title}-${index}`} onClick={() => setLightbox(item)}><img src={item.image} alt={item.title} /><span className="gallery-caption">{item.title}<ArrowUpRight size={15} /></span></button>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page-width contact-grid">
          <div className="contact-copy"><div className="eyebrow eyebrow-light">05 / Let’s talk supply</div><h2>Have a function<br />coming up?</h2><p>Call us for availability and wholesale pricing, or send a WhatsApp message with what you need.</p><div className="contact-buttons"><a href={`tel:${phone}`} className="button button-light"><Phone size={17} /> Call {phone}</a><a href={whatsapp} target="_blank" rel="noreferrer" className="button button-outline"><MessageCircle size={17} /> WhatsApp us</a></div><div className="contact-note"><Quote size={18} /><span>“Tell us what you are serving. We’ll help you get the essentials right.”<small>— U. Shankar</small></span></div></div>
          <div className="contact-card"><span className="eyebrow">Quick enquiry</span><h3>We’ll get you pointed<br />in the right direction.</h3><button className="card-link" onClick={() => setQuoteOpen(true)}>Request a wholesale quote <ArrowUpRight size={17} /></button><div className="card-divider" /><div className="mini-contact"><MapPin size={18} /><span><b>Visit or call</b><br />2-60/1, Road No. 24, Lingapur,<br />Kaddampeddur, Nirmal, Telangana - 504202</span></div><div className="mini-contact"><Phone size={18} /><span><b>Owner</b><br />U. Shankar · {phone}</span></div></div>
        </div>
      </section>

      <section id="location" className="section location-section">
        <div className="page-width location-grid"><div><div className="eyebrow">06 / Find us</div><h2>Local to Nirmal.<br /><em>Easy to reach.</em></h2><p>We are in Lingapur, Kaddampeddur — ready for a quick call, a practical conversation and your next order.</p><a className="text-link dark-link" href="https://www.google.com/maps/search/?api=1&query=19.04776878400896,78.71659757424806" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={16} /></a></div><div className="map-frame"><iframe title="Annapurna Wholesale location map" src="https://www.openstreetmap.org/export/embed.html?bbox=78.70659757424806%2C19.03776878400896%2C78.72659757424806%2C19.05776878400896&layer=mapnik&marker=19.04776878400896%2C78.71659757424806" loading="lazy" /></div></div>
      </section>

      <footer className="site-footer"><div className="page-width footer-main"><div className="footer-brand"><button className="brand brand-footer" onClick={() => go('home')}><span className="brand-mark">A</span><span className="brand-copy"><strong>Annapurna</strong><small>Paper Plates & Glasses Wholesale</small></span></button><p>Reliable serving essentials for Nirmal and nearby communities.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><button onClick={() => go('about')}>About us</button><button onClick={() => go('products')}>Products</button><button onClick={() => go('gallery')}>Gallery</button></div><div><span className="footer-label">Get in touch</span><a href={`tel:${phone}`}>{phone}</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:annapurnawholesale@example.com">Email enquiry</a></div></div></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Annapurna Paper Plates & Glasses Wholesale</span><span>Serving Nirmal with care <Instagram size={15} /></span></div></footer>

      {showTop && <button className="back-top" onClick={() => go('home')} aria-label="Back to top"><ArrowUpRight size={17} /></button>}
      {quoteOpen && <div className="modal-backdrop" onClick={() => setQuoteOpen(false)}><div className="quote-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setQuoteOpen(false)} aria-label="Close enquiry"><X /></button>{sent ? <div className="success-state"><span className="success-icon"><Check /></span><h2>Enquiry noted.</h2><p>Thank you for reaching out. Please call or WhatsApp us now for the quickest response.</p><div className="contact-buttons"><a href={`tel:${phone}`} className="button">Call now <Phone size={16} /></a><a href={whatsapp} target="_blank" rel="noreferrer" className="button button-outline-dark">WhatsApp <MessageCircle size={16} /></a></div></div> : <><div className="eyebrow">Wholesale enquiry</div><h2>Let’s plan your<br /><em>next order.</em></h2><p className="modal-copy">Share a few details and we’ll help you with availability and quantities.</p><form onSubmit={submitQuote}><label>Name<input required name="name" placeholder="Your name" /></label><label>What do you need?<input required name="need" placeholder="Plates, cups, glasses..." /></label><div className="form-row"><label>Approx. quantity<input name="quantity" placeholder="e.g. 500 plates" /></label><label>Event date<input name="date" type="date" /></label></div><button type="submit" className="button form-submit">Send enquiry <ArrowUpRight size={16} /></button></form></>}</div></div>}
      {lightbox && <div className="modal-backdrop lightbox-backdrop" onClick={() => setLightbox(null)}><div className="lightbox" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setLightbox(null)} aria-label="Close image"><X /></button><img src={lightbox.image} alt={lightbox.title} /><div><span className="eyebrow">{lightbox.type}</span><h3>{lightbox.title}</h3></div></div></div>}
    </main>
  );
}

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;