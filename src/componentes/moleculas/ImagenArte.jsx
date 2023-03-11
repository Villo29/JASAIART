import '../../assets/styles/ImagenArte.css'

function ImagenArte() {
    return (
            <div className='contenedor-tarjeta2'>
                <h1 className='text-Adjunte'>ADJUNTE IMAGEN</h1>
                <div>
                <button  className='btn-examianr'>EXAMINAR</button>
                <input type="file" className='input-name'/>
                </div>
            </div>
    );
}

export default ImagenArte;