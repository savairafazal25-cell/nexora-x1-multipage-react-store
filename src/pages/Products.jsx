import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShoppingBag } from "lucide-react";
import Phone from "../components/Phone";
import { products } from "../data";

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState("All finishes");
  const [notice, setNotice] = useState("");
  const filtered = filter === "All finishes" ? products : products.filter(p => p.color === filter);
  function add(product) { addToCart(product); setNotice(`${product.color} added to your bag.`); }
  return <main className="page-main">
    <section className="page-hero"><div className="eyebrow"><span/> The Nexora collection</div><h1>Meet your<br/><em>Nexora X1.</em></h1><p>Premium design, thoughtful technology, and a finish that feels like you.</p></section>
    <section className="products-page section-pad">
      <div className="shop-toolbar"><div><b>{filtered.length} finishes</b><span> · Nexora X1 collection</span></div><label>Filter <select value={filter} onChange={e=>setFilter(e.target.value)}><option>All finishes</option>{products.map(p=><option key={p.id}>{p.color}</option>)}</select></label></div>
      {notice && <div className="inline-notice"><Check size={16}/>{notice} <Link to="/cart">View bag <ArrowRight size={14}/></Link></div>}
      <div className="product-grid">{filtered.map(p=><article className="product-card" key={p.id}><div className="product-card-art"><span className="product-tag">{p.tag}</span><Phone tone={p.tone}/></div><div className="product-card-body"><div><h2>{p.name}</h2><p>{p.color} · {p.storage}</p></div><strong>${p.price}</strong><p className="product-desc">{p.description}</p><button className="button button-primary full-button" onClick={()=>add(p)}><ShoppingBag size={16}/> Add to bag</button></div></article>)}</div>
    </section>
  </main>;
}