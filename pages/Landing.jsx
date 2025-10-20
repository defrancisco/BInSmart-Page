import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center py-20 px-4"
    >
      <img src="/Logo de Binsmart.png" alt="BinSmart" className="w-40 mb-6" />
      <h1 className="text-4xl font-bold text-binsmartGreen">Reciclar nunca fue tan fácil 🌎</h1>
      <p className="mt-4 max-w-lg text-gray-600">
        BinSmart utiliza inteligencia artificial para ayudarte a clasificar tus residuos 
        correctamente y ganar puntos que podés canjear por beneficios sustentables.
      </p>
      <Link
        to="/como-funciona"
        className="mt-6 bg-binsmartGreen text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
      >
        Ver cómo funciona
      </Link>
    </motion.div>
  );
}
