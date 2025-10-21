import React from "react";

export default function SobreNosotros() {
  return (
    <section className="page container">
      <h2 className="page-title">Sobre Nosotros</h2>
      <p className="page-text">
        En <strong>BinSmart</strong> creemos que la tecnología puede ser una aliada poderosa para cuidar el planeta.
        Nuestro proyecto nació con el objetivo de <strong>automatizar el reciclaje</strong> a través de inteligencia artificial,
        sensores y sistemas de puntos para incentivar prácticas sostenibles.
      </p>

      <p className="page-text">
        Somos un equipo multidisciplinario de estudiantes y profesionales apasionados por el medio ambiente,
        la innovación y el desarrollo tecnológico responsable.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>Misión 🌱</h3>
          <p>Reducir el impacto ambiental mediante soluciones tecnológicas accesibles y medibles.</p>
        </div>
        <div className="card">
          <h3>Visión 🔭</h3>
          <p>Ser referentes en herramientas de gestión ambiental inteligente en América Latina.</p>
        </div>
        <div className="card">
          <h3>Valores 💚</h3>
          <p>Innovación, sostenibilidad y compromiso con la comunidad.</p>
        </div>
      </div>
    </section>
  );
}
