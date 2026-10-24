import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  return <header className="site-header">
    <nav className="nav-inner">
      <Link className="wordmark" to="/" onClick={close}>NEX<span>O</span>RA<i>®</i></Link>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/products" onClick={close}>Shop</NavLink>
        <NavLink to="/about" onClick={close}>Our story</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <Link className="mobile-cart" to="/cart" onClick={close}>Bag ({cartCount}) <ArrowRight size={15}/></Link>
      </div>
      <div className="nav-actions">
        <Link className="bag-link" to="/cart" aria-label="Shopping cart"><ShoppingBag size={18}/><span>{cartCount}</span></Link>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </nav>
  </header>;
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function subscribe(e) {
    e.preventDefault();
    setMessage("Thanks! This demo has recorded your signup on this page.");
    setEmail("");
  }
  return <footer className="site-footer">
    <div className="footer-main">
      <div><Link className="wordmark" to="/">NEX<span>O</span>RA<i>®</i></Link><p>Innovate. Connect. Explore.</p><small>Thoughtfully designed technology for everyday life.</small></div>
      <div className="footer-links"><b>Explore</b><Link to="/products">Shop Nexora X1</Link><Link to="/about">Our story</Link><Link to="/contact">Contact & support</Link><Link to="/cart">Your bag</Link></div>
      <form className="newsletter" onSubmit={subscribe}><label htmlFor="newsletter-email">Stay in the know</label><p>Product news, launches and more.</p><div className="newsletter-field"><input id="newsletter-email" type="email" required placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)}/><button aria-label="Subscribe"><ArrowRight size={17}/></button></div>{message && <small className="form-success">{message}</small>}</form>
    </div>
    <div className="footer-bottom"><span>© 2026 Nexora. Student concept project.</span><span>Demo store · No real payment is processed</span></div>
  </footer>;
}