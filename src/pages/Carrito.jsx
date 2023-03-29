import FooterCarrito from '../componentes/atomos/FooterLandingPage';
import HeaaderCarrito from "../componentes/atomos/HeaderCarrito";
import SeleccionarProductos from "../componentes/atomos/btnSeleccionarProductos";
import VaciarCarrito from "../componentes/atomos/btnVaciarCarrito";
import InfodelCarrito from "../componentes/moleculas/InfodelCarrito";
import TitulodelCarrito from "../componentes/moleculas/TitulosCarrito";


function Carrito() {
    return (

        <>
            <HeaaderCarrito></HeaaderCarrito>
            <SeleccionarProductos></SeleccionarProductos>
            <TitulodelCarrito></TitulodelCarrito>
            <InfodelCarrito></InfodelCarrito>
            <VaciarCarrito></VaciarCarrito>
            <FooterCarrito></FooterCarrito>
        </>
    );
}

export default Carrito;