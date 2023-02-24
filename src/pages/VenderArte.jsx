import Header from "../components/atomos/HeaderVenderArte";
import TarjetaNombreArte from "../components/moleculas/TarjetaNombreArte";
import ImagenArte from "../components/moleculas/ImagenArte";
import PrecioVenta from "../components/moleculas/PrecioVenta";
import TipoTecnica from "../components/moleculas/TipoTecnica";
import BtnCancelar from "../components/atomos/BtnCancelar";
import BtnPublicar from "../components/atomos/BtnPublicar";

import Footer from '../components/atomos/FooterLandingPage';

function VenderArte() {
    return (
        <>
            <Header></Header>
            <TarjetaNombreArte></TarjetaNombreArte>
            <ImagenArte></ImagenArte>
            <PrecioVenta></PrecioVenta>
            <TipoTecnica></TipoTecnica>
            <BtnCancelar></BtnCancelar>
            <BtnPublicar></BtnPublicar>
            <Footer></Footer>
        </>
    );
}

export default VenderArte;