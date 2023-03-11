import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../componentes/moleculas/LoginF";
import Registro from "../pages/Registro";
import LandingPage from "../pages/LandingPage";
import VenderArte from "../pages/VenderArte";
import Carrito from "../pages/Carrito";
import SobrePintores from "../pages/SobrePintores";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registrase" element={<Registro />} />
                <Route path="/JasaiArt" element={<LandingPage />} />
                <Route path="/VenderArte" element={<VenderArte />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/SobrePintores" element={<SobrePintores />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;