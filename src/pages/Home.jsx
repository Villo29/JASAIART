import Header from "../componentes/atomos/header";
import ImgText from "../componentes/moleculas/imagen1";
import FooterLandingPage from "../componentes/atomos/FooterLandingPage";



function Home() {
    return ( 
        <div className="fondo">
        
        <Header></Header>
        <ImgText></ImgText>
        <FooterLandingPage></FooterLandingPage>
        </div>

    );
}

export default Home;