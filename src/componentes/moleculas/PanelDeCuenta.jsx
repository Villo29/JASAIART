import Pedidos from '../../assets/images/Pedidos.png'
import DatosDeLaCuenta from '../../assets/images/DatosCuenta.png'
import Favoritos from '../../assets/images/Favoritos.png'
import CerrarSesion from '../../assets/images/CerrarSesion.png'

import '../../assets/styles/PanelDeCuenta.css'

function PanelDeCuenta() {
    return (
        <div className="content">
            <p className="text">
                Desde el escritorio de tu cuenta puedes ver tus pedidos recientes,
                gestionar direcciones de envío y editar tu contraseña y los detalles
                de tu cuenta
            </p>

            <div className="contenedor-boton">
                <button className="botonesPerfil">
                    <img src={Pedidos} className="imagenesDeBotones"/>
                    PEDIDOS
                </button>
                <button className="botonesPerfil">
                    <img src={DatosDeLaCuenta} className="imagenesDeBotones"/>
                    DATOS DE LA CUENTA
                </button>
                <button className="botonesPerfil">
                    <img src={Favoritos} className="imagenesDeBotones"/>
                    FAVORITOS
                </button>
                <button className="botonesPerfil">
                    <img src={CerrarSesion} className="imagenesDeBotones"/>
                    CERRAR SESIÓN
                </button>
            </div>
        </div>
    );
}

export default PanelDeCuenta;