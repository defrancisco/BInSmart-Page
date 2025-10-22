import "../styles/main.css";
import React from "react";


export default function ISO14001() {
  const benefits = [
    "Seguimiento detallado de residuos gestionados",
    "Reportes automáticos de cumplimiento ambiental",
    "Métricas de reducción de huella de carbono",
    "Certificados digitales de reciclaje",
    "Dashboard con indicadores clave de sostenibilidad",
    "Auditorías y exportación de datos para certificación",
  ];

  const metrics = [
    {
      icon: "📊",
      title: "Métricas en Tiempo Real",
      description:
        "Monitorea el volumen y tipo de residuos reciclados por tu organización en tiempo real.",
    },
    {
      icon: "📄",
      title: "Documentación Automática",
      description:
        "Genera reportes y documentación necesaria para auditorías ISO 14001 automáticamente.",
    },
    {
      icon: "📈",
      title: "Análisis de Impacto",
      description:
        "Visualiza el impacto ambiental positivo de tus acciones con gráficos y estadísticas detalladas.",
    },
  ];

  return (
    <div className="iso-page">
      <section className="iso-hero">
        <span className="iso-badge">Certificación Ambiental</span>
        <h1>ISO 14001 y BinSmart</h1>
        <p>
          Facilitamos el cumplimiento de los estándares ISO 14001 con métricas
          precisas, reportes automáticos y seguimiento completo de tu gestión
          de residuos.
        </p>
      </section>

      <section className="iso-section">
        <div className="iso-grid">
          <div>
            <h2>¿Qué es ISO 14001?</h2>
            <p>
              ISO 14001 es la norma internacional para sistemas de gestión
              ambiental (SGA). Proporciona un marco que las organizaciones
              pueden seguir para mejorar su desempeño ambiental de manera
              continua.
            </p>
            <p>
              Esta certificación demuestra el compromiso de tu empresa con la
              sostenibilidad, la reducción de residuos y el cumplimiento de
              regulaciones ambientales, mejorando tu reputación y
              competitividad.
            </p>
            <p>
              BinSmart facilita el proceso de obtención y mantenimiento de la
              certificación mediante el seguimiento automático de métricas
              ambientales clave.
            </p>
          </div>

          <div className="iso-card">
            <h3>Beneficios de ISO 14001</h3>
            <ul>
              <li>✅ Reducción de costos operativos</li>
              <li>✅ Mejora de la reputación corporativa</li>
              <li>✅ Cumplimiento legal garantizado</li>
              <li>✅ Ventaja competitiva en licitaciones</li>
              <li>✅ Mayor eficiencia en recursos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="iso-section light">
        <h2>Cómo BinSmart Facilita tu Certificación</h2>
        <p className="iso-sub">
          Nuestra plataforma está diseñada específicamente para ayudarte a
          cumplir con los requisitos de ISO 14001.
        </p>

        <div className="iso-metrics">
          {metrics.map((metric, i) => (
            <div key={i} className="iso-metric-card">
              <div className="iso-icon">{metric.icon}</div>
              <h3>{metric.title}</h3>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="iso-card large">
          <h3>Funcionalidades Empresariales</h3>
          <div className="iso-benefits">
            {benefits.map((benefit, i) => (
              <div key={i} className="iso-benefit">
                <span>✅</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iso-cta">
        <h2>¿Listo para Certificarte?</h2>
        <p>
          Descubre cómo BinSmart puede ayudar a tu empresa a obtener y mantener
          la certificación ISO 14001.
        </p>
        <div className="iso-buttons">
          <button className="primary">Solicitar Demo Empresarial</button>
          <button className="secondary">Hablar con un Experto</button>
        </div>
      </section>
    </div>
  );
}



