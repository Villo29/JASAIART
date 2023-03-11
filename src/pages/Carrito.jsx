

import FooterCarrito from "../componentes/atomos/FooterCarrito";
import HeaaderCarrito from "../componentes/atomos/HeaderCarrito";
import ProductosCarrito from "../componentes/moleculas/CarritoC";



function Carrito() {
    return (

        <>
            <HeaaderCarrito></HeaaderCarrito>
            <ProductosCarrito></ProductosCarrito>
            <FooterCarrito></FooterCarrito>
        </>
    );
}

export default Carrito;