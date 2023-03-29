import Header from '../componentes/atomos/HeaderLadingPage';
import FiltrarTexto from "../componentes/atomos/FiltrarTexto";
import Card from '../componentes/organismos/CardFiltrar'
import Footer from '../componentes/atomos/FooterLandingPage';

function FiltrarPorTecnica() {
    return (
        <>
            <Header></Header>
            <FiltrarTexto tituloFiltro="ACRILICA"></FiltrarTexto>
            <Card></Card>
            <Footer></Footer>
        </>
    );
}

export default FiltrarPorTecnica;