import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 1000);
    });

    getData.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo de productos"}</h2>
      <ItemList items={items} />
    </div>
  );
}
