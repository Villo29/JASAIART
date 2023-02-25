import BtnVerMas from '../../assets/images/btn-vermas.png'
import ImagenCuadro1 from '../../assets/images/imgCuadro1.jpg'
import ImagenCuadro2 from '../../assets/images/imgCuadro2.jpg'
import ImagenCuadro3 from '../../assets/images/imgCuadro3.jpg'
import '../../assets/styles/ObrasDestacadas.css'

function ObrasDestacadas(props) {
    return (
        <div>
            <h1 className="txt-ObrasDestacadas">{props.tituloObras}</h1>

            <div className='contenedor-pintura1'>
                <div className='elemento1'></div>
                <div className='elementoInterno1'></div>
                <img src={ImagenCuadro1} className="img-1"/>
                <h1 className='txt-precio1'>$299</h1>
                <h3 className='txt-titulo1'>Bird</h3>
                <h4 className='txt-artista1'>McGill Library</h4>
            </div>

            <div className='contenedor-pintura2'>
                <div className='elementoInterno2'></div>
                <img src={ImagenCuadro2} className="img-2"/>
                <h1 className='txt-precio2'>$499</h1>
                <h3 className='txt-titulo2'>Above</h3>
                <h4 className='txt-artista2'>Adriana Geo</h4>
            </div>

            <div className='contenedor-pintura3'>
                <div className='elemento2'></div>
                <div className='elementoInterno3'></div>
                <img src={ImagenCuadro3} className="img-3"/>
                <h1 className='txt-precio3'>$499</h1>
                <h3 className='txt-titulo3'>Birming</h3>
                <h4 className='txt-artista3'>Museums Trust</h4>
            </div>

            <img src={BtnVerMas} className="btn-vermas"/>
            <h1 className='txt-vermas'>VER MÁS</h1>
        </div>
    );
}

export default ObrasDestacadas;