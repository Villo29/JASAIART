import Header from "../componentes/atomos/header";
import Footer from "../componentes/atomos/footer";
import ImgText from "../componentes/moleculas/imagen1";
import "../assets/styles/home.css"


function Home() {
    return ( 
        <div className="fondo">
        
        <Header></Header>
        <Footer></Footer>
        <ImgText></ImgText>
        </div>

    );
}

export default Home;