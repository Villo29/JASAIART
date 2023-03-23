import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../componentes/moleculas/LoginF";
import Registro from "../pages/Registro";
import LandingPage from "../pages/LandingPage";
import Carrito from "../pages/Carrito";
import PublicarArte from "../pages/PublicaArte";
import PerfilUsuario from "../pages/PerfilUsuario";
import Producto from "../pages/VistaProducto";

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
                <Route path="/Perfil-Usuario" element={<PerfilUsuario />}/>
                <Route path="/Producto" element={<Producto />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;