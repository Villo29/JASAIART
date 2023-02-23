import { Link } from "react-router-dom";
import Logo from "../../assets/images/JasaiART.png";
import "../../assets/styles/footer.css";


function Footer() {
    return ( 
        <div className="footer">
            <h2 className="acercaD">ACERCA DE </h2>
            <img src={Logo} className="logo" alt="" />
            <div>
                <Link to="/Vender-Arte">
                <h4 className="publica">Publica tu Arte</h4>    
                </Link>
            </div>
            <div>
                <Link to="/Acerca-De-Nosotros">
                    <h4 className="about">Acerca de Nosotros</h4>
                </Link>
            </div>
        </div>
    );
}

export default Footer;