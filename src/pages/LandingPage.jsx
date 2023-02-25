import HeaderLandingPage from '../componentes/atomos/HeaderLandingPage';
import CarruselLandingPage from '../componentes/moleculas/CarruselLandingPage';
import RegalaArte from '../componentes/moleculas/RegalaArteLandingPage';
import FiltrarPorPrecioLandingPage from '../componentes/atomos/FiltrarPorPrecioLandingPage';
import PreciosLandingPage from '../componentes/moleculas/PreciosLandingPage';
import PorTecnicaLandingPage from '../componentes/moleculas/PorTecnicaLandingPage';
import ObrasDestacadas from '../componentes/moleculas/ObrasDestacadasLandingPage';
import FooterLandingPage from '../componentes/atomos/FooterLandingPage';

function LandingPage() {
    return (
        <>
        <HeaderLandingPage></HeaderLandingPage>
        <CarruselLandingPage/>
        <RegalaArte/>
        <FiltrarPorPrecioLandingPage/>
        <PreciosLandingPage/>
        <PorTecnicaLandingPage tituloTecnica="POR TÉCNICA"/>
        <ObrasDestacadas tituloObras="OBRAS DESTACADAS"/>
        <FooterLandingPage numero="+52 968 109 6112" correo="jasaiart@gmail.com"/>
        </>
    );
}

export default LandingPage;