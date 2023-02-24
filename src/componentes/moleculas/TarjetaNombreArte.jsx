import '../../assets/styles/TarjetaNombreArte.css'

function TarjetaNombreArte() {
    return (
        <div className="fondo-tarjeta1">
            <div className='contenedor-tarjeta1'>
                <h1 className='text-name'>INGRESE EL NOMBRE DEL ARTE</h1>
                <input type="text" className='input-name'/>
                <button className='btn-aceptar'>ACEPTAR</button>
            </div>
        </div>
    );
}

export default TarjetaNombreArte;