import { Link } from "react-router-dom";
import React from "react";
import logo from "../media/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="nav-logo">
          {/* si no tenés logo.png en src/media, el img no se mostrará pero no tirará error */}
          <img
            src={logo}
            alt="BinSmart"
            style={{ width: 48, height: 48, borderRadius: 8 }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <Link to="/" className="brand">BinSmart</Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/sobrenosotros">Sobre Nosotros</Link>
          <Link to="/comofunciona">Cómo Funciona</Link>
          <Link to="/iso14001">ISO 14001</Link>
          <Link to="/suscripciones">Suscripciones</Link>
        </nav>
      </div>
    </header>
  );
}
