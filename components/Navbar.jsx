import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-binsmartBlue shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-binsmartGreen text-2xl font-bold">
        ♻️ BinSmart
      </Link>
      <div className="flex gap-4 text-gray-700 font-medium">
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/como-funciona">Cómo Funciona</Link>
        <Link to="/iso14001">ISO 14001</Link>
        <Link to="/suscripciones">Suscripciones</Link>
      </div>
    </nav>
  );
}
