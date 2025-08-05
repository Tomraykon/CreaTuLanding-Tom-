import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <h1>MiTienda</h1>
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Contacto</a>
      <CartWidget />
    </nav>
  );
}

export default NavBar;