import { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/JasaiART.png";
import Foto from "../../assets/images/Limg.png";
import "../../assets/styles/login.css"

function Login() {
    const [stateForm, setStateForm] = useState('')
    const navigateL = useNavigate();
    const formDataF = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        navigateL("/JasaiArt")


        const formData = new FormData(formDataF.current);
        let URI = "https://jasaiart-api.iothings.com.mx/Usuarios";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: formData.get("Nombre"),
                Contraseña: formData.get("Contraseña"),
                Correo: formData.get("Correo"),
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())
            .then((data) => {
                alert(JSON.stringify(data));
            });
    };
    return (
        <>
            <div >
                <form ref={formDataF}>
                    <img src={Logo} alt="" className="imgL" />
                    <h3 className='welco'>BIENVENIDO JASAI ART</h3>
                    <h3 className="email">Correo: </h3>
                    <input type="text" value={stateForm.Correo} name="Correo" className="inputL" />
                    <div>
                        <h3 className="contra">Contraseña</h3>
                        <input type="password" value={stateForm.Contraseña} name="Contraseña" className="contras" />
                    </div>
                    <div>
                        <h3 className="name">Nombre</h3>
                        <input type="text" value={stateForm.Nombre} name="Nombre" className="con" />
                    </div>
                    <div>
                        <img src={Foto} alt="" className="imagen" />
                    </div>
                    <div className="check">
                        <input type="checkbox" name="" id="" /> Mantener Activo
                    </div>
                </form>
                <h3 className="op">Olvidaste tu contraseña</h3>
            </div>
            <div>
                <button onClick={handlerClick} id="buton" >Login</button>
            </div>
            <div>
                <h3 id="create" >¿No tienes cuenta?</h3>
                <Link to="/Registrase">
                    <h3 id="create2">Registrate</h3>
                </Link>
            </div>
        </>
    );
}

export default Login;