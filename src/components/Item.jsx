import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}
