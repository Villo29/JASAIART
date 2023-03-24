import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../componentes/moleculas/LoginF";
import Registro from "../pages/Registro";
import LandingPage from "../pages/LandingPage";
import Carrito from "../pages/Carrito";
import PublicarArte from "../pages/PublicaArte";
import Producto from "../pages/VistaProducto";
import InformacionContacto from "../pages/InformacionContacto";
import SobrePintores from "../pages/SobrePintores";
import Contacto from "../pages/Contacto";
import Perfil from "../pages/Perfil";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registrase" element={<Registro />} />
                <Route path="/JasaiArt" element={<LandingPage />} />
                <Route path="/VenderArte" element={<PublicarArte />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/InformacionDeContacto" element={<InformacionContacto />} />
                <Route path="/Producto" element={<Producto />} />
                <Route path="/Sobre-Pintores" element={<SobrePintores />  } />
                <Route path="/Contacto" element={<Contacto /> }/>
                <Route path="/Perfil" element={<Perfil />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;