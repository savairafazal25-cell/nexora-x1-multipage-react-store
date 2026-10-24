import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Camera, Cpu, BatteryCharging, MonitorSmartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Phone from "../components/Phone";
import { products } from "../data";

gsap.registerPlugin(ScrollTrigger);
const features = [
  { icon: Camera, title: "200MP AI camera", text: "Capture the small details that make a moment unforgettable." },
  { icon: Cpu, title: "Next-gen performance", text: "Fast, fluid performance for your everyday multitasking." },
  { icon: MonitorSmartphone, title: "2K AMOLED display", text: "Rich color and crisp detail with a smooth 120Hz feel." },
  { icon: BatteryCharging, title: "All-day battery", text: "A 5000mAh battery concept built to keep up with you." }
];

export default function Home() {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 25, opacity: 0, duration: .8, stagger: .12, ease: "power3.out" });
      gsap.from(".hero-product", { opacity: 0, scale: .86, rotate: 5, duration: 1.1, ease: "power3.out" });
      gsap.to(".hero-product .phone-wrap", { y: -14, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.from(".home-feature", { scrollTrigger: { trigger: ".home-features", start: "top 75%" }, y: 35, opacity: 0, duration: .65, stagger: .12 });
      gsap.from(".home-story-copy > *", { scrollTrigger: { trigger: ".home-story", start: "top 70%" }, y: 24, opacity: 0, duration: .7, stagger: .12 });
      gsap.to(".story-product", { scrollTrigger: { trigger: ".home-story", start: "top bottom", end: "bottom top", scrub: 1 }, y: -60, rotate: -6 });
    }, root);
    return () => ctx.revert();
  }, []);
  return <main ref={root}>
    <section className="hero-section" id="home">
      <div className="hero-glow"/>
      <div className="hero-copy">
        <div className="eyebrow"><span/> Introducing Nexora X1</div>
        <h1>Power meets<br/><em>elegance.</em></h1>
        <p>A bold new perspective on what a smartphone can be. Precision crafted, beautifully powerful, unmistakably yours.</p>
        <div className="hero-buttons"><Link className="button button-primary" to="/products">Shop Nexora X1 <ArrowRight size={17}/></Link><a className="button button-ghost" href="#features">Explore features</a></div>
        <div className="hero-note"><span/> Designed for what comes next</div>
      </div>
      <div className="hero-product"><div className="product-orbit"/><Phone tone="#55e6d0"/><div className="float-spec"><Camera size={17}/><span><b>200MP</b><small>Pro camera system</small></span></div><div className="float-spec float-spec-two"><span><b>120Hz AMOLED</b><small>Fluid, vivid detail</small></span></div></div>
      <a className="scroll-cue" href="#story">↓ <span>Scroll to explore</span></a><span className="hero-counter">01 <i>/</i> 04</span>
    </section>
    <section className="home-story section-pad" id="story">
      <div className="home-story-copy"><div className="eyebrow"><span/> Meet your next</div><h2>More than a phone.<br/><em>A feeling.</em></h2><p>Nexora X1 brings thoughtful design and next-level performance together in one beautifully balanced device. Every detail is made to feel effortless.</p><Link className="text-link" to="/about">Discover our story <ArrowUpRight size={16}/></Link><div className="stat-row"><div><b>2K</b><small>AMOLED display</small></div><div><b>200MP</b><small>AI camera</small></div><div><b>5000</b><small>mAh battery</small></div></div></div>
      <div className="story-product"><Phone tone="#55e6d0"/><span className="vertical-note">CRAFTED WITH INTENTION — NEXORA X1</span></div>
    </section>
    <section className="home-features section-pad" id="features"><div className="section-heading"><div><div className="eyebrow"><span/> Everything, elevated</div><h2>Designed for<br/><em>what matters.</em></h2></div><p>Powerful by nature. Considered by design. Meet the details that make every day feel extraordinary.</p></div><div className="feature-grid">{features.map((f,i)=>{const Icon=f.icon;return <article className="home-feature" key={f.title}><div className="feature-icon"><Icon size={23}/></div><span className="feature-number">0{i+1}</span><h3>{f.title}</h3><p>{f.text}</p></article>})}</div></section>
    <section className="home-shop section-pad"><div><div className="eyebrow"><span/> Find your finish</div><h2>Your style.<br/><em>Your Nexora.</em></h2><p>Four carefully considered finishes. Choose the one that feels like you.</p><Link className="button button-primary" to="/products">Explore colors <ArrowRight size={17}/></Link></div><div className="mini-products">{products.slice(0,3).map(p=><Link to="/products" className="mini-product" key={p.id}><Phone tone={p.tone} compact/><b>{p.color}</b><small>${p.price}</small></Link>)}</div></section>
    <section className="home-cta"><div className="eyebrow"><span/> The next chapter starts here</div><h2>Ready for a new<br/><em>perspective?</em></h2><p>Meet Nexora X1. Made for the moments that move you.</p><Link className="button button-primary" to="/products">Choose your Nexora <ArrowRight size={17}/></Link></section>
  </main>;
}