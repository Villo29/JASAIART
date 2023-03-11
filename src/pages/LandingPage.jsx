import HeaderLandingPage from '../componentes/atomos/HeaderLadingPage';
import CarruselLandingPage from '../componentes/moleculas/CarruselLandingPage';
import RegalaArte from '../componentes/moleculas/RegalaArteLandingPage';
import FiltrarPorPrecioLandingPage from '../componentes/atomos/FiltrarPorPrecioLandigPage';
import PreciosLandingPage from '../componentes/moleculas/PreciosLandingPage';
import PorTecnicaLandingPage from '../componentes/moleculas/PorTecnicaLandingPage';
import ObrasDestacadas from '../componentes/moleculas/ObrasDestacadasLandingPage';
import FooterLandingPage from '../componentes/atomos/FooterLandingPage';

function LandingPage() {
    return (
        <>
            <HeaderLandingPage></HeaderLandingPage>
            <CarruselLandingPage />
            <RegalaArte />
            <FiltrarPorPrecioLandingPage />
            <PreciosLandingPage />
            <PorTecnicaLandingPage tituloTecnica="POR TÉCNICA" />
            <ObrasDestacadas tituloObras="OBRAS DESTACADAS"/>
            <FooterLandingPage />
        </>
    );
}

export default LandingPage;