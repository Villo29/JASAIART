import ImagenCarrusel from '../../assets/images/imagenCarrusel.jpg'
import ImagenCarrusel2 from '../../assets/images/imagenCarrusel2.jpg'
import ImagenCarrusel3 from '../../assets/images/imagenCarrusel3.jpg'
import '../../assets/styles/CarruselLandingPage.css'

function CarruselLandingPage() {
    return (
        <div className="contenedorCarousel">

            <div className="container-all">
                <input type="radio" id='1' name='image-slide' hidden />
                <input type="radio" id='2' name='image-slide' hidden />
                <input type="radio" id='3' name='image-slide' hidden />

                <div className="slide">
                    <div className="item-slide">
                        <img src={ImagenCarrusel} />
                    </div>
                    <div className="item-slide">
                        <img src={ImagenCarrusel2} />
                    </div>
                    <div className="item-slide">
                        <img src={ImagenCarrusel3} />
                    </div>
                </div>

                <div className="pagination">
                    <label className='pagination-item' htmlFor="1">
                        <img src={ImagenCarrusel} />
                    </label>
                    <label className='pagination-item' htmlFor="2">
                        <img src={ImagenCarrusel2} />
                    </label>
                    <label className='pagination-item' htmlFor="3">
                        <img src={ImagenCarrusel3} />
                    </label>
                </div>
            </div>
        </div>

    );
}

export default CarruselLandingPage;