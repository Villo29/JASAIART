import ImagenTecnica1 from "../../assets/img/imgTecnica1.jpg"
import ImagenTecnica2 from "../../assets/img/imgTecnica2.jpg"
import ImagenTecnica3 from "../../assets/img/imgTecnica3.jpg"
import ImagenTecnica4 from "../../assets/img/imgTecnica4.jpg"
import '../../assets/styles/PorTecnicaLandingPage.css'

function PorTecnicaLandingPage() {
    return (
        <div className="contenedor">
            <h1 className='txt-PorTecnica'>POR TÉCNICA</h1>

            <img src={ImagenTecnica1} className="img-tecnica1"/>
            <img src={ImagenTecnica2} className="img-tecnica2"/>
            <img src={ImagenTecnica3} className="img-tecnica3"/>
            <img src={ImagenTecnica4} className="img-tecnica4"/>
        </div>
    );
}

export default PorTecnicaLandingPage;