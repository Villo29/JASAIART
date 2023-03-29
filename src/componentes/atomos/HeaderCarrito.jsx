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
                    <Link to="/Perfil">
                    <li>Mi Cuenta</li>
                    </Link>
                </ul>
            </nav>
        </header>

        );
}
export default HeaderLandingPage;