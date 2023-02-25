import { Link } from "react-router-dom";
import LogoJasaiArt from '../../assets/images/JasaiART.png'
import '../../assets/styles/HeaderLandingPage.css'

function HeaderLandingPage() {
    return (
        <header className='contenedorHeader'>
            <img src={LogoJasaiArt} className="LogoJasai"/>
            <h2 className='txt-FiltrarPrecio'>Filtrar por precio</h2>
            <Link to="/VenderArte">
                <h2 className='txt-VenderArte'>Vender arte</h2>    
            </Link>

            <h2 className='txt-tecnicas'>Técnicas</h2>
        </header>

        );
}

export default HeaderLandingPage;