import { Link } from "react-router-dom";


import "../../assets/styles/PerfilUsuario.css"
import "../../assets/styles/FooterPerfilU.css"



function PerfilUSuario() {
    return (
        <>
            <div className="ConteinerAccount">
                <h5 className="MiAccount">Mi Cuenta</h5>
                <p>
                    <Link to="/JasaiArt">
                        Escritorio
                    </Link>
                </p>

            </div>

        </>
    );
}

export default PerfilUSuario;