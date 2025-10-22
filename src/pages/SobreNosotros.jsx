import React from "react";
import { Target, Users, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Facilitar el reciclaje mediante soluciones tecnológicas simples y accesibles, promoviendo prácticas sostenibles y generando conciencia ambiental.",
  },
  {
    icon: Heart,
    title: "Nuestra Visión",
    description:
      "Convertirnos en una plataforma líder que conecte a personas, empresas y gobiernos en un mismo objetivo: un planeta más limpio y responsable.",
  },
  {
    icon: Users,
    title: "Nuestra Comunidad",
    description:
      "BinSmart es impulsado por estudiantes apasionados por la tecnología y el medio ambiente, con la convicción de que la innovación puede generar impacto real.",
  },
  {
    icon: Award,
    title: "Nuestros Logros",
    description:
      "El proyecto nació como una iniciativa universitaria y evolucionó hasta convertirse en una propuesta reconocida por su enfoque sostenible e integrador.",
  },
];

export default function SobreNosotros() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Sobre BinSmart</h1>
          <p>
            BinSmart nació como un proyecto académico desarrollado por estudiantes comprometidos con
            la sostenibilidad. Nuestro objetivo es aprovechar la tecnología para incentivar el reciclaje,
            conectar a las personas con los puntos de recolección y recompensar a quienes eligen cuidar el planeta.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="icon-wrapper">
                <value.icon className="icon" />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-commitment">
        <h2>Nuestro Compromiso</h2>
        <p>
          En BinSmart creemos que el cambio empieza por lo cotidiano. Buscamos hacer del reciclaje una
          experiencia fácil, medible y motivadora para todos. Cada acción cuenta, y juntos podemos
          construir comunidades más sostenibles e inteligentes.
        </p>
      </section>
    </div>
  );
}
