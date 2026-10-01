import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products, onAdd }) {
  return (
    <section className="container" id="catalog">
      <h2>Каталог</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
