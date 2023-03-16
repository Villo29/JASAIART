
import Flecha from "../../assets/images/FLECHA.png";
import "../../assets/styles/CarritoC.css"

function ProductosCarrito() {
    return ( 
                <div className="Productos">
                    <div className="selecionarP">
                        <img src={Flecha} className="flecha" />
                        <h4>Seleccionar más productos</h4>
                        </div>
                        <div className="ProductosS"></div>
                </div>
    );
}

export default ProductosCarrito;



