import React from "react";

export default function Landing() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>BinSmart ♻️</h1>
        <p className="subtitle">Reciclar nunca fue tan fácil. Detectamos, guiamos y premiamos el reciclaje.</p>
        <div className="hero-cta">
          <a className="btn-primary" href="#membresias">Ver membresías</a>
          <a className="btn-ghost" href="#iso">ISO 14001</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="card-visual">Tablet ● Cámara ● IA</div>
      </div>
    </section>
  );
}
