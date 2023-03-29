
import '../../assets/styles/infodelCarrito.css'

function InfodelCarrito() {
    return (
        <div className="containerPrincipalCarrito">
            <div class="containerCarrito">
                <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5MzhfbXJ6dGM?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" className="imagendelarte" />
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