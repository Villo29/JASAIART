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
                    <li>Filtrar por precios</li>
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