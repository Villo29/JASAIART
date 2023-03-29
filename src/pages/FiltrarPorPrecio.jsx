import Header from '../componentes/atomos/HeaderLadingPage';
import FiltrarTexto from "../componentes/atomos/FiltrarTexto";
import Card from '../componentes/organismos/CardFiltrar'
import Footer from '../componentes/atomos/FooterLandingPage';

function FiltrarPorPrecio() {
    return (
        <>
            <Header></Header>
            <FiltrarTexto></FiltrarTexto>
            <Card></Card>
            <Footer></Footer>
        </>
    );
}

export default FiltrarPorPrecio;