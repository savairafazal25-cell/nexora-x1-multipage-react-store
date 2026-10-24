import { Link } from "react-router-dom";
import { ArrowRight, Compass, Heart, ShieldCheck } from "lucide-react";
import Phone from "../components/Phone";

export default function About() {
  return <main className="page-main">
    <section className="page-hero about-page-hero"><div className="eyebrow"><span/> Our philosophy</div><h1>Technology with<br/><em>a human touch.</em></h1><p>We believe the best technology doesn't ask for your attention. It gives you more room for what matters.</p></section>
    <section className="about-page-grid section-pad"><div className="about-page-copy"><div className="eyebrow"><span/> Why Nexora</div><h2>Thoughtful by design.<br/><em>Powerful by nature.</em></h2><p>Nexora is a fictional concept brand created to explore a more considered kind of personal technology. X1 brings together expressive design, useful features, and a simple experience.</p><p>From the shape in your hand to the clarity of the screen, every part of this concept is built around one question: can technology make everyday life feel a little more effortless?</p><Link className="button button-primary" to="/products">Explore Nexora X1 <ArrowRight size={17}/></Link></div><div className="about-page-art"><Phone tone="#55e6d0"/><span>LESS NOISE. MORE POSSIBILITY.</span></div></section>
    <section className="values-grid section-pad">{[{I:Compass,t:"Curiosity first",p:"We explore new ideas with purpose and an open mind."},{I:Heart,t:"Made for people",p:"Technology should feel intuitive, useful, and personal."},{I:ShieldCheck,t:"Trust through clarity",p:"Honest details and clear expectations matter."}].map(v=><article key={v.t}><v.I size={25}/><h3>{v.t}</h3><p>{v.p}</p></article>)}</section>
    <section className="home-cta"><div className="eyebrow"><span/> Get to know the X1</div><h2>Good design should<br/><em>feel effortless.</em></h2><Link className="button button-primary" to="/products">Explore the collection <ArrowRight size={17}/></Link></section>
  </main>;
}