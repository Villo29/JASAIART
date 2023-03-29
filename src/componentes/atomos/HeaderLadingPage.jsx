import { Link } from "react-router-dom";
import LogoJasaiArt from '../../assets/images/JasaiART.png'
import '../../assets/styles/HeaderLandingPage.css'

function HeaderLandingPage() {
    return (

        <header className="header">
            <div className="logo">
                <img src={LogoJasaiArt}/>
            </div>
            <nav>
                <ul className="nav-links">
                    <Link to="/FiltrarPorTecnica">
                    <li>Filtrar por Tecnica</li></Link>
                    <Link to="/VenderArte">
                    <li>Vender Arte</li>
                    </Link>
                    <li>Destacadas</li>
                    
                </ul>
            </nav>
        </header>

        );
}

export default HeaderLandingPage;