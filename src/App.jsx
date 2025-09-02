import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Catálogo completo */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Catálogo filtrado */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Detalle de un producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Página 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}
