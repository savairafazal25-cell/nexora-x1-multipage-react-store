import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nexora-cart") || "[]"); }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem("nexora-cart", JSON.stringify(cart)); }, [cart]);

  function addToCart(product) {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      return found ? current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...current, { ...product, qty: 1 }];
    });
  }
  function updateQty(id, qty) {
    if (qty < 1) { setCart(current => current.filter(item => item.id !== id)); return; }
    setCart(current => current.map(item => item.id === id ? { ...item, qty } : item));
  }
  function removeFromCart(id) { setCart(current => current.filter(item => item.id !== id)); }
  function clearCart() { setCart([]); }
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return <div className="site-shell">
    <ScrollToTop />
    <Header cartCount={cartCount}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products addToCart={addToCart}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart}/>}/>
      <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart}/>}/>
      <Route path="*" element={<main className="not-found"><div className="eyebrow"><span/> Lost in space</div><h1>Page not<br/><em>found.</em></h1><a className="button button-primary" href="/">Back home</a></main>}/>
    </Routes>
    <Footer/>
  </div>;
}