import Logo from "../../assets/images/JasaiART.png";
import "../../assets/styles/HeaderCarrito.css"

function HeaaderCarrito() {
    return ( 
        <div id='contenedorHeader'>
        <img src={Logo} id="LogoJasai"/>
        <h2 id='txt-FiltrarPrecio'>Carrito</h2>
    </div>
    );
}

export default HeaaderCarrito;