import { Link } from "react-router-dom";
import "../../assets/styles/header.css";
import Logo from "../../assets/images/JasaiART.png";


function Header() {
    return (  

            
            <div className="he">
                <img src={Logo} className="logo" alt="" />
                <div className="he2">
                <Link to="/Login">
                <h3 id="Login" > Login </h3>
                </Link>
                <Link to="/Sobre-Pintores">
                    <h3 id="SobreP">Sobre Pintores</h3>
                </Link>
                <Link to="/Contacto">
                    <h3 id="contacto">Contacto</h3>
                </Link>
                <Link to="/Carrito">
                    <h3 id="carrito">Carrito</h3>
                </Link>
                </div>
            </div>
    );
}

export default Header;