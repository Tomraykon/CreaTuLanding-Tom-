import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div>
      {items.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
