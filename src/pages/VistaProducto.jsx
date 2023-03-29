import HeaderLandingPage from "../componentes/atomos/HeaderLadingPage";
import ProductoVista from "../componentes/moleculas/Producto";
import FooterLandingPage from "../componentes/atomos/FooterLandingPage";



function Producto() {
    return (
        <>
            <HeaderLandingPage></HeaderLandingPage>
            <ProductoVista></ProductoVista>
            <FooterLandingPage></FooterLandingPage>
        </>
    );
}

export default Producto;