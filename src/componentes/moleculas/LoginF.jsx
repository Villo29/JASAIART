import { Link } from "react-router-dom";
import Logo from "../../assets/images/JasaiART.png";
import Foto from "../../assets/images/Limg.png";
import "../../assets/styles/login.css"

function Login() {
    return (
            <>
            <div className="Form">
            <img src={Logo} alt=""  className="imgL"/>
                <div className="welco">
                    <h3>BIENVENIDO JASAI ART</h3>
                </div>
                <div > 
                    <h3 className="email">Correo: </h3>
                    <input type="text" className="inputL"  />
                </div>
                <div>
                    <h3 className="contra">Contraseña</h3>
                    <input type="password" name="" id=""  className="contras"/>
                </div>
                <div>
                    <img src={Foto} alt="" className="foto1"/>
                </div>
                <div >
                    <div className="check">
                    <input type="checkbox" name="" id=""  /> Mantener Activo    
                    </div>
                    <h3 className="op">Olvidaste tu contraseña</h3>
                </div>
                        <div>
                            <button type="submit" id="buton" >Login</button>
                        </div>
                    <div>
                        <h3 id="create" >¿No tienes cuenta?</h3>
                        <h3 id="create2">Registrate</h3>
                    </div>
            </div>
            </>
    );
}

export default Login;