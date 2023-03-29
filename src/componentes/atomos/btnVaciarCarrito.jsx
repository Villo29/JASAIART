import '../../assets/styles/seleccionarMasProductos.css'

import Vaciar from '../../assets/images/Vaciar.png'

function btnVaciarCarrito() {
    return (
        <div className="contenedorBotonCarrito2">
            <button className='botonsinborde'>
                <img src={Vaciar} className="Vaciar" />
            </button>
            <h1 className='txtProductosCarrito2'>Vaciar carrito</h1>
        </div>
    );
}

export default btnVaciarCarrito;