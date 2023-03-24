
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";
import Logo from "../../assets/images/JasaiART.png";


function Header() {
    return (

        <>
            <nav>
                <div >
                    <a href="#">
                        <img src={Logo} alt="" class="logo" />
                    </a>
                </div>
                <ul class="menu">
                    <Link to="/Login">
                        <li>Login</li>
                    </Link>
                    <Link to="/Contacto">
                        <li>Contacto</li>
                    </Link>
                    <Link to="/Sobre-Pintores">
                        <li>Sobre Pintores</li>
                    </Link>
                    <Link to="/Carrito">
                        <li>Carrito</li>
                    </Link>
                </ul>
                <div class="hamburger-menu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </nav>
        </>
    );
}

export default Header;