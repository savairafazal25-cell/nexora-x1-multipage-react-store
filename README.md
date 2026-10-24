# Nexora X1 Store — React + Vite

A multi-page, responsive product launch and demo storefront for a fictional smartphone brand. Uses React Router, GSAP ScrollTrigger, Lucide icons, and custom CSS product visuals.

## Pages
- Home: animated hero, scroll storytelling, product highlights
- Shop: filter finishes and add products to cart
- Our story: brand/about page
- Contact: validated contact form with demo success message
- Cart: persistent cart, quantity controls, remove items, subtotal and shipping
- Checkout: delivery form, payment-method demo, order confirmation

## Run locally
1. Install Node.js LTS.
2. Extract the ZIP and open this folder in VS Code.
3. In the terminal run `npm install`.
4. Run `npm run dev`.
5. Open the URL Vite prints, usually http://localhost:5173.

## Purchase flow
The cart is stored in browser localStorage. Add items, change quantities, remove items, and place a demo order. The checkout creates a local confirmation and clears the cart.

## Important demo limitations
Nexora is a fictional student concept brand. The checkout does not charge money, and no real order, email, contact message, or newsletter signup is sent to a backend. To accept real orders, connect a backend/database and a payment provider such as Stripe or a locally supported gateway. Never collect card data without a secure payment integration.
