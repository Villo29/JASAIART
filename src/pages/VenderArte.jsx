import HeaderLandingPage from "../componentes/atomos/HeaderLadingPage";
import TarjetaNombreArte from "../componentes/moleculas/TarjetaNombreArte";
import ImagenArte from "../componentes/moleculas/ImagenArte";
import PrecioVenta from "../componentes/moleculas/PrecioVenta";
import TipoTecnica from "../componentes/moleculas/TipoTecnica";
import BtnCancelar from "../componentes/atomos/BtnCancelar";
import BtnPublicar from "../componentes/atomos/BtnPublicar";
import Footer from '../componentes/atomos/FooterLandingPage';

function VenderArte() {
    return (
        <>
            <HeaderLandingPage></HeaderLandingPage>
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