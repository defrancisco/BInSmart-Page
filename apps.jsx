import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import SobreNosotros from "./pages/SobreNosotros";
import ComoFunciona from "./pages/ComoFunciona";
import ISO14001 from "./pages/ISO14001";
import Subscripciones from "./pages/Suscripciones.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/iso-14001" element={<ISO14001 />} />
            <Route path="/suscripciones" element={<Subscripciones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
