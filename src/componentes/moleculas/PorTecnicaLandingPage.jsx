import ImagenTecnica1 from "../../assets/images/imgTecnica1.jpg"
import ImagenTecnica2 from "../../assets/images/imgTecnica2.jpg"
import ImagenTecnica3 from "../../assets/images/imgTecnica3.jpg"
import ImagenTecnica4 from "../../assets/images/imgTecnica4.jpg"
import '../../assets/styles/PorTecnicaLandingPage.css'

function PorTecnicaLandingPage(props) {





    return (
        <div className="row-tecnica">

            <div className="txt-tecnica">
                <h1 className="txt-tecnica2">{props.tituloTecnica}</h1>
            </div>

            <div className="tecnica1">
                <img src={ImagenTecnica1} />
            </div>

            <div className="tecnica2">
                <img src={ImagenTecnica2} />
            </div>

            <div className="tecnica3">
                <img src={ImagenTecnica3} />
            </div>

            <div className="tecnica4">
                <img src={ImagenTecnica4} />
            </div>

        </div>
    );
}

export default PorTecnicaLandingPage;