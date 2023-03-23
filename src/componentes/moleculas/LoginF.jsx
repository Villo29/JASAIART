import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/JasaiART.png";
import Foto from "../../assets/images/Limg.png";
import "../../assets/styles/login.css"

function Login() {
    const form = useRef();
    const navigate = useNavigate();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const Nombre = formData.get('Nombre');
        const Contrasena = formData.get('Contrasena');
        if (!Nombre || !Contrasena) {
            Swal.fire({
                icon: 'question',
                text: 'Rellena todos los texto',
            })
        } else {
            fetch(`https://jasaiart-api.iothings.com.mx/usuarios/${Nombre}/${Contrasena}`)
                .then(response => response.json())
                .then(data => {
                    if (data.message == 'Contraseña incorrecta') {
                        Swal.fire({
                            icon: 'error',
                            text: 'La Contraseña esta incorrecta',
                        })
                    }
                    if (data.message == "Nombre de usuario incorrecto") {
                        Swal.fire({
                            icon: 'error',
                            text: 'La Contraseña esta incorrecta!',
                        })
                    }
                    if (data.message == 'Has iniciado sesion') {
                        let timerInterval
                        Swal.fire({
                            text: JSON.stringify("Bienvenido " + Nombre),
                            position: 'top-end',
                            timer: 9000,
                            icon: 'success',
                            timerProgressBar: true,
                            width: '250px',
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
            navigate('/JasaiArt');
        }
    })
}
    }
return (
    <>
        <div >
            <form ref={form} >
                <img src={Logo} alt="" className="imgL" />
                <h3 className='welco'>BIENVENIDO JASAI ART</h3>
                <div>
                    <label>
                        <h3 className="contra">Contraseña</h3>
                        <input type="password"
                            name="Contrasena"
                            className="contras" />
                    </label>
                </div>
                <div>
                    <label >
                        <h3 className="name">Nombre</h3>
                        <input type="text"
                            name="Nombre"
                            className="con" />
                    </label>
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