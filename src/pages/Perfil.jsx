import Header from '../componentes/atomos/HeaderLadingPage';
import MiCuenta from "../componentes/atomos/MiCuenta";
import PanelDeCuenta from "../componentes/organismos/PanelDeCuenta";
import Footer from '../componentes/atomos/FooterLandingPage';

function Perfil() {
    return (
        <>
        <Header></Header>
        <MiCuenta></MiCuenta>
        <PanelDeCuenta></PanelDeCuenta>
        <Footer></Footer>
        </>
    );
}

export default Perfil;