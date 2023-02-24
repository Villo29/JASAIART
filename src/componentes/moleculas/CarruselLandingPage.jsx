import ImagenCarrusel from '../../assets/images/imagenCarrusel.jpg'
import btnArrow1 from '../../assets/images/btnArrow.png'
import btnArrow2 from '../../assets/images/btnArrow2.png'
import btnCarrusel1 from '../../assets/images/btn-carrusel0.png'
import btnCarrusel2 from '../../assets/images/btn-carrusel1.png'
import '../../assets/styles/CarruselLandingPage.css'

function CarruselLandingPage() {
    return (
        <div className='contenedor-carrusel'>
        <img src={ImagenCarrusel} className="img-carrusel"/>
        <div>
            <img src={btnArrow1} className="btn-arrow-1"/>
            <img src={btnArrow2} className="btn-arrow-2"/>

            <img src={btnCarrusel1} className="btn-carrusel-1"/>
            <img src={btnCarrusel2} className="btn-carrusel-2"/>
            <img src={btnCarrusel1} className="btn-carrusel-3"/>
            <img src={btnCarrusel1} className="btn-carrusel-4"/>

        </div>
    </div>
    );
}

export default CarruselLandingPage;