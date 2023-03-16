import Logo from '../../assets/img/JasaiART.png'
import FotoPerfil from '../../assets/img/FotoPerfil.png'
import '../../assets/styles/HeaderVenderArte.css'

function HeaderVenderArte() {
    return (
        <header className="Header">
            <img src={Logo} className="Logo"/>
            <img src={FotoPerfil} className="FotoPerfil"/>
            <h2 className='txt-NameUser'>Mi cuenta</h2>
            <h2 className='txt-Ayuda'>Ayuda</h2>
        </header>
    );
}

export default HeaderVenderArte;