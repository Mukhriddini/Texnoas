export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <div className="card__icon" aria-hidden="true">{product.icon}</div>
      <h3>{product.name}</h3>
      <p className="card__meta">{product.type}. {product.spec}</p>
      <div className="card__bottom">
        <span className="card__price">{product.price} ₽</span>
        <button onClick={() => onAdd(product.id)}>В корзину</button>
      </div>
    </article>
  );
}
