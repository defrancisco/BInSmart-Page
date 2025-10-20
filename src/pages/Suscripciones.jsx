import "../styles/main.css";

const planesBinsmart = [
  {
    id: 1,
    nombre: "Plan Básico",
    precio: "$9.99 / mes",
    caracteristicas: [
      "Acceso a reportes diarios",
      "Hasta 5 bandejas monitoreadas",
      "Soporte por correo electrónico",
    ],
  },
  {
    id: 2,
    nombre: "Plan Profesional",
    precio: "$29.99 / mes",
    caracteristicas: [
      "Monitoreo ilimitado de bandejas",
      "Reportes en tiempo real",
      "Integración avanzada (API)",
    ],
  },
  {
    id: 3,
    nombre: "Plan Empresarial",
    precio: "Personalizado",
    caracteristicas: [
      "Consultoría y optimización",
      "Desarrollo a medida",
      "Soporte premium 24/7",
    ],
  },
];

export default function Suscripciones() {
  return (
    <div className="container">
      <h1>Nuestros Planes</h1>
      <div className="plans">
        {planesBinsmart.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <h2>{plan.nombre}</h2>
            <p className="plan-price">{plan.precio}</p>
            <ul>
              {plan.caracteristicas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <button>¡Comenzar ahora!</button>
          </div>
        ))}
      </div>
    </div>
  );
}
