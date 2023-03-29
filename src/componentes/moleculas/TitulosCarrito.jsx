import '../../assets/styles/TitulosCarrito.css'

function TitulosCarrito() {
    return (
        <div className="containerPrincipalCarrito">
            <div className="containerTitulosCarrito">
                <h1 className='titulosCarrito'>Productos seleccionados</h1>
                <h1 className='titulosCarrito'>Valor</h1>
                <h1 className='titulosCarrito'>Cantidad</h1>
                <h1 className='titulosCarrito'>Total a pagar</h1>
            </div>
        </div>
    );
}

export default TitulosCarrito;