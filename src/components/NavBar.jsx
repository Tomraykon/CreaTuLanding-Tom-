import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/category/monitores">Monitores</Link> |{" "}
      <Link to="/category/gpus">GPUs</Link> |{" "}
      <Link to="/category/cpus">CPUs</Link>
    </nav>
  );
}
