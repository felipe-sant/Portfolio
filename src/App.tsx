import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/main.css";
import HomePage from "./pages/home";
import SobrePage from "./pages/sobre";
import ContatoPage from "./pages/contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
