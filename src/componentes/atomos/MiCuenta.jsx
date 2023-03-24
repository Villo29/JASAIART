import { useState } from 'react';
import '../../assets/styles/MiCuenta.css'

function MiCuenta() {
    const [selectedLink, setSelectedLink] = useState('Escritorio');

    function selectLink(link) {
        setSelectedLink(link);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <a href="#" className={selectedLink === 'Escritorio' ? 'selected' : ''} onClick={() => selectLink('Escritorio')}>Escritorio</a>
                <a href="#" className={selectedLink === 'Pedidos' ? 'selected' : ''} onClick={() => selectLink('Pedidos')}>Pedidos</a>
                <a href="#" className={selectedLink === 'Datos de la cuenta' ? 'selected' : ''} onClick={() => selectLink('Datos de la cuenta')}>Datos de la cuenta</a>
                <a href="#" className={selectedLink === 'Favoritos' ? 'selected' : ''} onClick={() => selectLink('Favoritos')}>Favoritos</a>
                <a href="#" className={selectedLink === 'Cerrar sesión' ? 'selected' : ''} onClick={() => selectLink('Cerrar sesión')}>Cerrar sesión</a>
            </div>
            <h2 className="sidebar-title">MI CUENTA</h2>
        </div>
    );
}

export default MiCuenta;