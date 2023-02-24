import HeaderLandingPage from '../components/atomos/HeaderLandingPage';
import CarruselLandingPage from '../components/moleculas/CarruselLandingPage';
import RegalaArte from '../components/moleculas/RegalaArteLandingPage';
import FiltrarPorPrecioLandingPage from '../components/atomos/FiltrarPorPrecioLandingPage';
import PreciosLandingPage from '../components/moleculas/PreciosLandingPage';
import PorTecnicaLandingPage from '../components/moleculas/PorTecnicaLandingPage';
import ObrasDestacadas from '../components/moleculas/ObrasDestacadasLandingPage';
import FooterLandingPage from '../components/atomos/FooterLandingPage';

function LandingPage() {
    return (
        <>
        <HeaderLandingPage></HeaderLandingPage>
        <CarruselLandingPage/>
        <RegalaArte/>
        <FiltrarPorPrecioLandingPage/>
        <PreciosLandingPage/>
        <PorTecnicaLandingPage/>
        <ObrasDestacadas/>
        <FooterLandingPage/>
        </>
    );
}

export default LandingPage;