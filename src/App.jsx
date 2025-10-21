import React from "react";
import {Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Landing from "./pages/Landing.jsx";
import ComoFuncional from "./pages/ComoFunciona.jsx";
import ISO14001 from "./pages/ISO14001.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Suscripciones from "./pages/Suscripciones.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comofunciona" element={<ComoFuncional />} />
        <Route path="/iso14001" element={<ISO14001 />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/suscripciones" element={<Suscripciones />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
