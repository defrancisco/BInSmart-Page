import { motion } from "framer-motion";

export default function ISO14001() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="p-8 text-center"
    >
      <h2 className="text-3xl font-bold text-binsmartGreen mb-4">Certificación ISO 14001 🌱</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        La norma ISO 14001 ayuda a las empresas a gestionar sus responsabilidades ambientales. 
        BinSmart permite generar métricas automáticas para facilitar estos reportes y fomentar la 
        adopción de prácticas sostenibles.
      </p>
    </motion.div>
  );
}
