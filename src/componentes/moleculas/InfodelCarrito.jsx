import Arte1 from '../../assets/images/MiCieloMiCultura.png'
import '../../assets/styles/infodelCarrito.css'

function InfodelCarrito() {
    return (
        <div className="containerPrincipalCarrito">
            <div class="containerCarrito">
                <img src={Arte1} className="imagendelarte" />
                <h1 className='titulosCarrito'>1,300 MXN</h1>
                <button className='botonMasMenos'>-</button>
                <h1 className='titulosCarrito'>1</h1>
                <button className='botonMasMenos'>+</button>
                <h1 className='titulosCarrito'>1,300 MXN</h1>
            </div>
        </div>
    );
}

export default InfodelCarrito;