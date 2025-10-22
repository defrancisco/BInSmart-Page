import React from "react";
import "../styles/main.css";

export default function Landing() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1758547343136-19d27f9cb57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Reciclaje"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>♻️ Escaneá, Reciclá, Ganá</h1>
        <p>
          Transformá tus residuos en recompensas. Cada acción cuenta para un
          futuro más sustentable.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            📱 Descargar App
          </button>
          <button className="btn-outline">
            Conocer más
          </button>
        </div>
      </div>

      <button className="scroll-btn" onClick={scrollToContent}>
        ⬇️
      </button>
    </section>
  );
}
