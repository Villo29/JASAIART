import myVideo from "../../assets/images/y2mate.com - Cartel de Santa  Piensa en Mi_1080p.mp4"
import img from "../../assets/images/img1.png";
import img2 from "../../assets/images/img3.png";
import "../../assets/styles/img1.css";
function ImgText() {


    return (
        <>
            <div className="image-container">
                <div className="text-container">
                    <h4>Bienvenidos</h4>
                    <h3>Estamos emocionados de presentarles el trabajo de algunos
                        de los mejores pintores de nuestra comunidad. Estos artistas
                        han dedicado su vida a crear obras impresionantes que reflejan
                        su creatividad y habilidad técnica. Cada uno de ellos tiene un estilo
                        único y una historia interesante detrás de su trabajo. Esperamos que disfruten
                        y se inspiren para seguir apreciando el arte de la pintura.</h3>
                </div>
                <img src={img} className="responsive-image" />
            </div>

            <section class="image-with-text">
                <video autoPlay muted loop className="responsive-image" >
                    <source src={myVideo} type="video/mp4" />
                </video>
                {/* <img src={img2} /> */}
                <div className="text-container">
                    <h3>  ¡Somos el hogar de algunos de los mejores artistas jasai del mundo!
                        Estamos orgullosos  por su habilidad técnica, creatividad e innovación.
                        ¡Prepárate para descubrir una variedad de técnicas y estilos cada uno con su propio
                        enfoque y técnica única. Desde pinturas al óleo hasta grabados, y desde esculturas tradicionales
                        hasta arte contemporáneo.</h3>
                </div>
            </section>
        </>
    );
}

export default ImgText;