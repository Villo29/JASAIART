import ImagenRegalaArte from '../../assets/images/imgRegalaArte.png'
import '../../assets/styles/RegalaArte.css'

function RegalaArte() {
    return (
        <div className="row">
        <div className="RegalaArte">
            <h1 className='txt-color1'>REGALA ARTE</h1>
            <h1 className='txt-color2'>REGALA ARTE</h1>
            <h1 className='txt-color1'>REGALA ARTE</h1>
        </div>            

        <div className="imagenRegalaArte">
            <img src={ImagenRegalaArte}/>
        </div>            
    </div>
    );
}

export default RegalaArte;