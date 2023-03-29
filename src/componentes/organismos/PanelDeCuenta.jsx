import Pedidos from '../../assets/images/Pedidos.png'
import DatosDeLaCuenta from '../../assets/images/DatosCuenta.png'
import Favoritos from '../../assets/images/Favoritos.png'
import CerrarSesion from '../../assets/images/CerrarSesion.png'
import ObraDestacada1 from '../../assets/images/ObraDestacada1.png'

import MiCuenta from '../atomos/MiCuenta';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../../assets/styles/PanelDeCuenta.css'
import '../../assets/styles/Pedidos.css'
import '../../assets/styles/DatosdelaCuenta.css'
import '../../assets/styles/Favoritos.css'


function PanelDeCuenta() {
    const [activeView, setActiveView] = useState("Escritorio");

    const handleMenuItemClick = (viewName) => {
        setActiveView(viewName);
    };

    return (
        <div className="container-perfil">
            <div className='ocultarEnMovil'>
                {<MiCuenta activeView={activeView} handleMenuItemClick={handleMenuItemClick} />}
            </div>
            <div className="main-content">
                <div className={`view ${activeView === "Escritorio" ? "active" : ""}`} id="Escritorio">
                    <p className="text">
                        Desde el escritorio de tu cuenta puedes ver tus pedidos recientes,
                        gestionar direcciones de envío y editar tu contraseña y los detalles
                        de tu cuenta
                    </p>
                    <div className="contenedor-boton">


                        <button className="botonesPerfil">
                            <img src={Pedidos} className="imagenesDeBotones" />
                            PEDIDOS
                        </button>

                        <button className="botonesPerfil">
                            <img src={DatosDeLaCuenta} className="imagenesDeBotones" />
                            DATOS DE LA CUENTA
                        </button>
                        <button className="botonesPerfil">
                            <img src={Favoritos} className="imagenesDeBotones" />
                            FAVORITOS
                        </button>
                        <button className="botonesPerfil">
                            <img src={CerrarSesion} className="imagenesDeBotones" />
                            CERRAR SESIÓN
                        </button>
                    </div>
                </div>

                <div className={`view ${activeView === "Pedidos" ? "active" : ""}`} id="Pedidos">
                    <h1>Pedidos</h1>

                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Tipo de técnica</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>OH CHIAPANECA BELLA</td>
                                <td>$1,300</td>
                                <td>Óleo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>




                <div className={`view ${activeView === "Datos" ? "active" : ""}`} id="Datos">
                    <div className='espacio'>


                        <h1 className='h1Datos'>Datos de la cuenta</h1>
                        <p className='datosP'>Nombre:</p>
                        <input type="text" value='Carlos' className='inputDatos' />

                        <p className='datosP'>Correo:</p>
                        <input type="text" value="Carlos@gmail.com" className='inputDatos' />

                        <p className='datosP'>Contraseña:</p>
                        <input type="text" value='1234' className='inputDatos' />

                        <div className="btn-container">
                            <button className="btn">Descartar</button>
                            <button className="btn">Guardar</button>
                        </div>
                    </div>
                </div>




                <div className={`view ${activeView === "Favoritos" ? "active" : ""}`} id="Favoritos">
                    <div className="espacio2">
                        <h1>Favoritos</h1>
                        <div className="productoFavoritos">
                            <img src={ObraDestacada1} className="imagenDeProductoFavorito" />
                            <div className="informacion-producto">
                                <h3 className="productoFavorito">Nombre del producto</h3>
                                <h3 className="precioFavorito">Precio: $XXX</h3>
                                <a className="eliminarFavorito" href="#">Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`view ${activeView === "Favoritos" ? "active" : ""}`} id="Favoritos">

                </div>

            </div>
        </div>
    );
}

export default PanelDeCuenta;