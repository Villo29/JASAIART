import Logo from '../../assets/images/JasaiART.png'
import FotoPerfil from '../../assets/images/FotoPerfil.png'
import '../../assets/styles/HeaderVenderArte.css'

function HeaderVenderArte() {
    return (
        <nav>
            <div class="logo">
                <a href="#">
                    <img src={Logo} alt="" /></a>
            </div>
            <div class="navbar-items">
                <a>CUENTA</a>
                <a href="#">Ayuda</a>
            </div>
            <div class="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

    );
}

export default HeaderVenderArte;