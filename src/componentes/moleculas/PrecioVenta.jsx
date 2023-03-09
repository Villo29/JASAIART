import '../../assets/styles/PrecioVenta.css'

function PrecioVenta() {
    return (
        <div className='contenedor-tarjeta3'>
            <h1 className='text-precio'>{props.txtPrecio}</h1>
            <input type="text" className='input-name'/>
            <button className='btn-aceptar'>ACEPTAR</button>
        </div>
    );
}

export default PrecioVenta;