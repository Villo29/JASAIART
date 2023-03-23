import HeaderVenderArte from "../componentes/atomos/HeaderVenderArte";
import FooterPerfilU from "../componentes/atomos/FooterPerfilU";
import PerfilUSuario from "../componentes/moleculas/InformacionPerfilUsuario";




function PerfilUsuario() {
    return (
        <>
            <HeaderVenderArte></HeaderVenderArte>
            <PerfilUSuario></PerfilUSuario>
            <FooterPerfilU></FooterPerfilU>
        </>
    );
}

export default PerfilUsuario;