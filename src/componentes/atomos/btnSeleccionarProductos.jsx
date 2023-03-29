import back from '../../assets/images/FLECHA.png'
import '../../assets/styles/seleccionarMasProductos.css'

function btnSeleccionarProductos() {
    return (
        <div className="contenedorBotonCarrito">
            <img src={back} className="Flechota"/>
            <h1 className='txtProductosCarrito'>Seleccionar mas productos</h1>
        </div>
    );
}

export default btnSeleccionarProductos;