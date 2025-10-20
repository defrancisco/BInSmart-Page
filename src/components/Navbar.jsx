import { Link } from "react-router-dom";
import "../styles/main.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">♻️ BinSmart</Link>
      <div>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/como-funciona">Cómo Funciona</Link>
        <Link to="/iso14001">ISO 14001</Link>
        <Link to="/suscripciones">Suscripciones</Link>
      </div>
    </nav>
  );
}
