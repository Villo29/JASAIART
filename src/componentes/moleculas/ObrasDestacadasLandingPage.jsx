import ObraDestacada1 from '../../assets/images/ObraDestacada1.png'
import ObraDestacada2 from '../../assets/images/ObraDestacada2.png'
import ObraDestacada3 from '../../assets/images/ObraDestacada3.png'
import '../../assets/styles/ObrasDestacadas.css'

function ObrasDestacadas(props) {
    return (

        <div className="row-Obras">
            <div className="divObras">
                <h1 className='txtObras'>{props.tituloObras}</h1>
            </div>

            <div className="contenedorImagenes">

                <div className="columnasImagenesObras">
                    <div className="imagenTexto1">
                        <img src={ObraDestacada1} className="ImagenesObras" />
                        <div className="txt-PrecioObraDestacada">
                            <p className='nombreObra'>$299</p>
                            <p className='PintorObra'>Bird</p>
                            <p className='DescripcionObra'>McGill Library</p>
                        </div>
                    </div>
                </div>

                <div className="columnasImagenesObras">
                    <div className="imagenTexto2">
                        <img src={ObraDestacada2} className="ImagenesObras" />
                        <div className="txt-PrecioObraDestacada">
                            <p className='nombreObra'>$499</p>
                            <p className='PintorObra'>Abode</p>
                            <p className='DescripcionObra'>Adriana Geo</p>
                        </div>
                    </div>
                </div>

                <div className="columnasImagenesObras">
                    <div className="imagenTexto3">
                        <img src={ObraDestacada3} className="ImagenesObras" />
                        <div className="txt-PrecioObraDestacada">
                            <p className='nombreObra'>$499</p>
                            <p className='PintorObra'>Briming</p>
                            <p className='DescripcionObra'>Museums Trust</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ObrasDestacadas;