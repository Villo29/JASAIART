import { useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/JasaiART.png";
import Foto from "../../assets/images/Limg.png";
import "../../assets/styles/login.css"

function Login() {
    // const [stateForm,setStateForm]=useState('')
    // const navigateL = useNavigate();
    // const formDataF = useRef();
    // const handlerClick=(e)=>{
    //     e.preventDefault();
    //     navigateL ("/JasaiArt")


    //     const formData = new FormData(formDataF.current);
    //     let URI = "http://54.85.130.168:3000/Login";
    //     let options = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         Nombre: formData.get("Nombre"),
    //         Contraseña: formData.get("Contraseña"),
    //         Correo: formData.get("Correo"),
    //     }),
    //     };
    //     console.log(options.body);
    //     fetch(URI, options)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         alert(JSON.stringify(data));
    //     });
        // };

        const [Correo, setCorreo] = useState("");
        const [Contraseña, setContraseña] = useState("");
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [notificationMessage, setNotificationMessage] = useState("");

        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
              /* const response = await axios.post("http://44.214.82.200:3000/usuarios", { */
            const response = await axios.post(
                "http://jasaiart-api.iothings.com.mx:3000/Login",
                {
                Correo,
                Contraseña,
                }
            );
            console.log(response.data); 
            setIsLoggedIn(true);
            setNotificationMessage("¡Has iniciado sesión correctamente!");
            } catch (error) {
            console.log(error);
            setNotificationMessage("Ha ocurrido un error al iniciar sesión.");
            }

        };
        
        const navigate = useNavigate()
            const handlerClick=(e)=>{
                e.preventDefault();
                navigate("/RegisterP")
            }
    return (
            <>
            <div >
            {isLoggedIn && <Notification message={notificationMessage} />}
                    <form  onSubmit={handleSubmit}>
                    <img src={Logo} alt=""  className="imgL"/>
                    <h3 className='welco'>BIENVENIDO JASAI ART</h3>
                    <h3 className="email">Correo: </h3>
                    <input type="text"  name="Correo" value={Correo} onChange={(e) => setCorreo(e.target.value)} className="inputL"  />
                <div>
                    <h3 className="contra">Contraseña</h3>
                    <input type="password" name="Contraseña" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} className="contras"/>
                </div>
                {/* <div>
                    <h3 className="name">Nombre</h3>
                    <input type="text" value={stateForm.Nombre} name="Nombre" className="con"/>
                </div> */}
                <div>
                    <img src={Foto} alt="" className="foto1"/>
                </div>
                    <div className="check">
                    <input type="checkbox" name="" id=""  /> Mantener Activo    
                    </div>
                    </form>
                    <h3 className="op">Olvidaste tu contraseña</h3>
                </div>
                        <div>
                            <button type='submit'  id="buton" >Login</button>
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