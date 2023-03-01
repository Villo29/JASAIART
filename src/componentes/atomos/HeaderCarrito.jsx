
import Logo from "../../assets/images/JasaiART.png";
import "../../assets/styles/HeaderCarrito.css"

function HeaaderCarrito() {
    return ( 
<>
            <header id="ContenedorHeader">
            <img src={Logo} id="LogoH" />
            <h4 className="text">Mi Carrito</h4>
            </header>
</>

    );
}

export default HeaaderCarrito;