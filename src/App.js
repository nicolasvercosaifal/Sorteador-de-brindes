import { Route, Routes } from "react-router-dom";
 
import Cadastro from "./pages/Register";
import Sorteio from "./pages/LuckyDraw";
 
 
function App() {
  return (
    <Routes>
     <Route path="/" element={<Sorteio />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
