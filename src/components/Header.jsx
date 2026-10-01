export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#top">Техномаркет</a>
        <nav className="nav">
          <a href="#catalog">Каталог</a>
          <a href="#about">О магазине</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="cart">Корзина: {cartCount}</div>
      </div>
    </header>
  );
}
