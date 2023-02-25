import '../../assets/styles/TipoTecnica.css'

function TipoTecnica(props) {
    return (
        <div className='contenedor-tarjeta4'>
            <h1 className='text-precio'>{props.txtTecnica}</h1>
            <select name="select">
                <option value="value1">Acrilica</option>
                <option value="value2" selected>Acuarela</option>
                <option value="value3">Digital</option>
                <option value="value4">Óleo</option>
            </select>
            <button className='btn-aceptar'>ACEPTAR</button>
        </div>
    );
}

export default TipoTecnica;