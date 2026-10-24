import { useState } from "react";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",topic:"Product question",message:""});
  const [sent, setSent] = useState(false);
  function update(e) { setForm({...form,[e.target.name]:e.target.value}); setSent(false); }
  function submit(e) { e.preventDefault(); setSent(true); setForm({name:"",email:"",topic:"Product question",message:""}); }
  return <main className="page-main">
    <section className="page-hero"><div className="eyebrow"><span/> We're here to help</div><h1>Let's start a<br/><em>conversation.</em></h1><p>Questions about Nexora X1? Send us a note using the form below.</p></section>
    <section className="contact-layout section-pad">
      <div className="contact-info"><div className="eyebrow"><span/> Contact Nexora</div><h2>Good questions<br/><em>deserve answers.</em></h2><p>This concept site uses demo contact details. Use the form to test the interaction; no message is sent to a real company.</p>
        <div className="contact-method"><Mail/><div><b>Email</b><span>hello@nexora.example</span></div></div>
        <div className="contact-method"><MessageCircle/><div><b>Support</b><span>Product questions & order help</span></div></div>
        <div className="contact-method"><Phone/><div><b>Hours</b><span>Monday–Friday · 9am–5pm</span></div></div>
        <div className="contact-method"><MapPin/><div><b>Studio</b><span>Concept brand · Online support</span></div></div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <h3>Send us a message</h3><p>Fields marked with * are required.</p>
        {sent && <div className="success-panel"><Check size={18}/><span><b>Message submitted!</b><small>This is a front-end demo; the message was not sent to a server.</small></span></div>}
        <label>Full name *<input name="name" value={form.name} onChange={update} placeholder="Your name" required minLength="2"/></label>
        <label>Email address *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label>
        <label>What can we help with? *<select name="topic" value={form.topic} onChange={update}><option>Product question</option><option>Order and delivery</option><option>Returns and warranty</option><option>Press and partnerships</option><option>Other</option></select></label>
        <label>Message *<textarea name="message" value={form.message} onChange={update} placeholder="Tell us how we can help..." required minLength="10" rows="5"/></label>
        <button className="button button-primary full-button">Submit message <Check size={16}/></button>
      </form>
    </section>
  </main>;
}