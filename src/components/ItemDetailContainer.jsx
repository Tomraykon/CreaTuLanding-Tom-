import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId));
      }, 1000);
    });

    getData.then(res => setItem(res));
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
}
