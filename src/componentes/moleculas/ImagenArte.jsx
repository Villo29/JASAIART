import '../../assets/styles/ImagenArte.css'

function ImagenArte(props) {
    return (
            <div className='contenedor-tarjeta2'>
                <h1 className='text-Adjunte'>{props.txtImagen}</h1>
                <input type="text" className='input-name'/>
                <button className='btn-examianr'>EXAMINAR</button>
            </div>
    );
}

export default ImagenArte;