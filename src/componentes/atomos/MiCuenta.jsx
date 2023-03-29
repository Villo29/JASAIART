import '../../assets/styles/MiCuenta.css'
import { Link } from 'react-router-dom';

function MiCuenta(props) {
    const { activeView, handleMenuItemClick } = props;

    return (
        <div className="sidebar-container ocultarEnMovil">

            <div className="sidebar">
            <h2 className="sidebar-title">MI CUENTA</h2>
                <ul>

                    <li
                        className={activeView === "Escritorio" ? "active" : ""}
                        data-view="Escritorio"
                        onClick={() => handleMenuItemClick("Escritorio")}
                    >
                        Escritorio
                    </li>

                    <li
                        className={activeView === "Pedidos" ? "active" : ""}
                        data-view="Pedidos"
                        onClick={() => handleMenuItemClick("Pedidos")}
                    >
                        Pedidos
                    </li>


                    <li
                        className={activeView === "Datos" ? "active" : ""}
                        data-view="Datos"
                        onClick={() => handleMenuItemClick("Datos")}
                    >
                        Datos de la cuenta
                    </li>


                    <li
                        className={activeView === "Favoritos" ? "active" : ""}
                        data-view="Favoritos"
                        onClick={() => handleMenuItemClick("Favoritos")}
                    >
                        Favoritos
                    </li>

                    <Link to="/" className='sin-linea'>
                        <li>Cerrar sesión</li>
                    </Link>

                </ul>
            </div>

        </div>
    );
}

export default MiCuenta;