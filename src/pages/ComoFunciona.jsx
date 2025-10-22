import React from "react";
import "../styles/main.css";

export default function ComoFunciona() {
  return (
    <section className="page container">
      <h2 className="page-title">Cómo Funciona BinSmart</h2>
      <p className="page-text">
        BinSmart combina sensores, cámaras y modelos de inteligencia artificial para <strong>detectar residuos</strong> 
        y clasificarlos automáticamente según su tipo. Además, cada acción de reciclaje se traduce en puntos que 
        pueden canjearse por recompensas o beneficios ambientales.
      </p>

      <div className="steps">
        <div className="step">
          <div className="step-number">1️⃣</div>
          <h3>Colocación del dispositivo</h3>
          <p>Se instala una tablet con cámara y conexión a la nube en la estación de reciclaje.</p>
        </div>
        <div className="step">
          <div className="step-number">2️⃣</div>
          <h3>Detección inteligente</h3>
          <p>El modelo IA identifica el tipo de residuo y lo registra automáticamente en el sistema.</p>
        </div>
        <div className="step">
          <div className="step-number">3️⃣</div>
          <h3>Generación de métricas</h3>
          <p>Los datos recolectados se visualizan en dashboards para reportes ambientales (ISO 14001).</p>
        </div>
        <div className="step">
          <div className="step-number">4️⃣</div>
          <h3>Premiación</h3>
          <p>Los usuarios y empresas obtienen puntos por cada acción de reciclaje registrada.</p>
        </div>
      </div>
    </section>
  );
}
