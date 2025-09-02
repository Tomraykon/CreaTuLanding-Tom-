export default function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Categoría: {item.category}</p>
      <p>Precio: ${item.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}
