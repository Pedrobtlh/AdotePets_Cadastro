// App.jsx
import "./App.css";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PetDetails from "./components/PetDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route
          path="/pet/:id/:petName/:petBreed/:petAge/:petDetails/:petPhoto"
          element={<PetDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
