import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./components/ProductList.jsx";
import { products } from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (id) => setCart([...cart, id]);

  return (
    <div id="top">
      <Header cartCount={cart.length} />
      <main>
        <section className="hero container" id="about">
          <h1>Техника для учёбы, работы и игр</h1>
          <p>Смартфоны, ноутбуки, наушники и аксессуары. Официальная гарантия и доставка по городу.</p>
        </section>
        <ProductList products={products} onAdd={addToCart} />
      </main>
      <Footer />
    </div>
  );
}
