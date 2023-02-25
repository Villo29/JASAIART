import { useRef } from "react";
import { Link } from "react-router-dom";
import Fondo from "../../assets/images/imgR.png";
import Logo from "../../assets/images/JasaiART.png"
import "../../assets/styles/Registro.css";

function RegistroL() {
    return ( 
        
        <>
        <div>
        <img src={Fondo} alt=""  className="imgR"/>
        <img src={Logo} alt=""  className="Logo"/>
        <div id="welco">
                    <h3>REGÍSTRARSE</h3>
                </div>
                <div > 
                    <h3 className="emailR">Correo: </h3>
                    <input type="text" className="inputR"  />
                </div>
                <div>
                    <h3 className="contrasR">Contraseña</h3>
                    <input type="password" name="" id=""  className="contraR"/>
                </div>
                <div>
                    <button type="submit" id="butonR" >Registrame</button>
                </div>
                <div>
                        <h3 id="Login" >¿Ya tienes cuenta?</h3>
                        <Link to="/Login">
                        <h3 id="Login2">Iniciar Sesión</h3>
                        </Link>
                    </div>
        </div>
        </>
     );
}

export default RegistroL;