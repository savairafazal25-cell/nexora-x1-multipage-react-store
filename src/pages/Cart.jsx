import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Phone from "../components/Phone";

export default function Cart({ cart, updateQty, removeFromCart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? (subtotal >= 800 ? 0 : 15) : 0;
  return <main className="page-main cart-page">
    <section className="page-hero compact-page-hero"><div className="eyebrow"><span/> Your selection</div><h1>Your shopping<br/><em>bag.</em></h1><p>Review your Nexora selection before checkout.</p></section>
    <section className="cart-layout section-pad">
      <div className="cart-items">
        {cart.length === 0 ? <div className="empty-cart"><ShoppingBag size={36}/><h2>Your bag is waiting.</h2><p>Find a Nexora finish that feels like you.</p><Link className="button button-primary" to="/products">Explore products <ArrowRight size={16}/></Link></div> :
        cart.map(item=><article className="cart-item" key={item.id}><div className="cart-item-art"><Phone tone={item.tone} compact/></div><div className="cart-item-info"><h3>{item.name}</h3><p>{item.color} · {item.storage}</p><strong>${item.price}</strong><div className="quantity-control"><button aria-label="Decrease quantity" onClick={()=>updateQty(item.id,item.qty-1)}><Minus size={14}/></button><span>{item.qty}</span><button aria-label="Increase quantity" onClick={()=>updateQty(item.id,item.qty+1)}><Plus size={14}/></button></div></div><button className="remove-item" aria-label="Remove item" onClick={()=>removeFromCart(item.id)}><Trash2 size={17}/></button></article>)}
        {cart.length > 0 && <Link className="text-link" to="/products"><ArrowLeft size={15}/> Continue shopping</Link>}
      </div>
      <aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></div><div><span>Shipping</span><b>{shipping === 0 ? (subtotal ? "Free" : "$0.00") : `$${shipping.toFixed(2)}`}</b></div><p className="shipping-hint">{subtotal > 0 && subtotal < 800 ? `Add $${(800-subtotal).toFixed(2)} more for free shipping.` : "Free shipping on orders of $800 or more."}</p><div className="summary-total"><span>Total</span><strong>${(subtotal+shipping).toFixed(2)}</strong></div><Link className={`button button-primary full-button ${!cart.length ? "disabled-link" : ""}`} to={cart.length ? "/checkout" : "/products"}>{cart.length ? "Proceed to checkout" : "Start shopping"} <ArrowRight size={16}/></Link><small className="demo-disclaimer">Demo checkout only. No real payment will be taken.</small></aside>
    </section>
  </main>;
}