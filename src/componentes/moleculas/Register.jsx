
// import { useRef, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import Fondo from "../../assets/images/imgR.png";
// import Logo from "../../assets/images/JasaiART.png"
// import "../../assets/styles/Registro.css";

// function RegistroL() {
//     const [stateForm, setStateForm] = useState('')
//     const formDataF = useRef();
//     const handlerClick = (e) => {
//         e.preventDefault();
//         navigateL("/JasaiArt")
//         const formData = new FormData(formDataF.current);
//         let URI = "https://jasaiart-api.iothings.com.mx/Usuarios";
//         let options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 Nombre: formData.get("Nombre"),
//                 Contraseña: formData.get("Contraseña"),
//                 Correo: formData.get("Correo"),
//             }),
//         };
//         console.log(options.body);
//         fetch(URI, options)
//             .then((response) => response.json())
//             .then((data) => {
//                 alert(JSON.stringify(data));
//                 //Alert con Sweetaler
//             });
//     };
//     return (
//         <>
//             <div>
//                 <form ref={formDataF}>
//                     <img src={Logo} alt="" className="Logo" />
//                     <img src={Fondo} alt="" id="mi-imagen" />
//                     <h3 id="welco">REGÍSTRARSE</h3>
//                     <h3 className="emailR">Correo: </h3>
//                     <input type="text" value={stateForm.Correo} name="Correo" className="inputR" />
//                     <div>
//                         <h3 className="contrasR">Contraseña</h3>
//                         <input type="password" value={stateForm.Contraseña} name="Contraseña" className="contraR" />
//                     </div>
//                     <div>
//                         <h3 id="name">Nombre</h3>
//                         <input type="text" value={stateForm.Nombre} name="Nombre" id="con" />
//                     </div>
//                 </form>
//                 <div>
//                     <button onClick={handlerClick} id="butonR" >Registrame</button>
//                 </div>
//                 <div>
//                     <h3 id="Login" >¿Ya tienes cuenta?</h3>
//                     <Link to="/Login">
//                         <h3 id="Login2">Iniciar Sesión</h3>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     );

// }
// export default RegistroL;

import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Fondo from "../../assets/images/imgR.png";
import Logo from "../../assets/images/JasaiART.png"
import "../../assets/styles/Registro.css";

function RegistroL() {
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
                Contrasena: formData.get("Contrasena"),
                Correo: formData.get("Correo"),
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())
            .then((data) => {
<<<<<<< HEAD
                alert(JSON.stringify(data));
                //Alert con Sweetaler
=======
                Swal.fire({
                    text: JSON.stringify("Bienvenido " + data.Nombre)
                })
>>>>>>> david
            });
    };

    return (
        <>
            <div>
                <form ref={formDataF}>
                    <img src={Logo} alt="" className="Logo" />
                    <div className="imgresgisterr">
                        <img src={Fondo} alt="" id="mi-imagen" />
                    </div>
                    <h3 id="welco">REGÍSTRARSE</h3>
                    <label>
                        <h3 className="emailR">Correo:
                        </h3>
                        <input type="text" value={stateForm.Correo} name="Correo" className="inputR" required />
                    </label>
                    <div>
                        <label>
                            <h3 className="contrasR">Contraseña</h3>
                            <input type="password" value={stateForm.Contraseña} name="Contrasena" className="contraR" required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h3 id="name">Nombre</h3>
                            <input type="text" value={stateForm.Nombre} name="Nombre" id="con" required />
                        </label>
                    </div>
                </form>
                <div>
                    <button onClick={handlerClick} id="butonR" >Registrame</button>
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