import myVideo from "../../assets/images/myvideo.mp4"
import img from "../../assets/images/img1.png";
import "../../assets/styles/img1.css";
function ImgText() {



    return (
        <>


            <div class="image-container">
                <div class="text-container">
                    <h3>Estamos emocionados de presentarles el trabajo de algunos
                        de los mejores pintores de nuestra comunidad. Estos artistas
                        han dedicado su vida a crear obras impresionantes que reflejan
                        su creatividad y habilidad técnica. Cada uno de ellos tiene un estilo
                        único y una historia interesante detrás de su trabajo. Esperamos que disfruten
                        y se inspiren para seguir apreciando el arte de la pintura.</h3>
                </div>
                <div className="Container-imge">
                    <img src={img} class="responsive-image" />
                </div>
            </div>

            <div class="image-with-text">

                <div className="container-video">
                    <video autoPlay muted loop className="responsive-video" >
                        <source src={myVideo} type="video/mp4" />
                    </video>
                </div>

                <div class="text-container-video">
                    <h3>  ¡Somos el hogar de algunos de los mejores artistas jasai del mundo!
                        Estamos orgullosos  por su habilidad técnica, creatividad e innovación.
                        ¡Prepárate para descubrir una variedad de técnicas y estilos cada uno con su propio
                        enfoque y técnica única. Desde pinturas al óleo hasta grabados, y desde esculturas tradicionales
                        hasta arte contemporáneo.</h3>
                </div>
            </div>
        </>
    );
}

export default ImgText;