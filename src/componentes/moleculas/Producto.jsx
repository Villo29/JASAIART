import { useState } from 'react';
import "../../assets/styles/Producto.css"

function ProductoVista() {

    // const [currentIndex, setIndex] = useState(0);

    // const images = [
    //     // "https://revistaq.mx/wp-content/uploads/2021/09/10dc5cea019ce691ecb4edc72914645eba6b11a7w-1024x683.jpg",
    //     // "https://okdiario.com/img/2020/09/11/dua-lipa.jpg",
    //     // "https://los40es00.epimg.net/los40/imagenes/2020/09/10/moda/1599749585_522190_1599750161_rrss_normal.jpg",
    //     // "https://i2-prod.dailystar.co.uk/incoming/article24775599.ece/ALTERNATES/s615b/0_DUP-LIPA.jpg"

    //     "https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NzBfMFJSZmU?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1",
    //     "https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NjhfRjRCMWY?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1",
    //     "https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NjlfWVlITTg?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1"

    // ];

    // const handleMouseMove = (event) => {
    //     const rect = event.currentTarget.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const width = rect.width;
    //     const index = Math.floor((x / width) * images.length);
    //     setIndex(index);
    // };

    return (
        <>

            <div className="product-page">
                <div className="product-image">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5MzhfbXJ6dGM?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="Product Image" />
                    <div className="small-images">
                        <img src="https://www.opendrive.com/s/MjdfMTY4MDA5Mzdfc2Y1dGg?preview=1&folder_id=MjdfMTMwODkzM182djZTRA" alt="Small Product Image 1" className='imgs1' />
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5MzlfYVNXbjA?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="Small Product Image 2" className='imgs2' />
                    </div>
                </div>
                <div className="product-info">
                    <div className='info1'>
                        <h1 className='title1'>AISTRID BREINTER. OH CHIAPANECA MI AMOR</h1>
                    </div>
                    <div>
                        <p className="product-description">21 x 28 CM</p>
                    </div>
                    <p className="product-price">$1,300</p>
                    <p className="categoria">Óleo</p>
                    <p className="categoria">Medida pintura 16 x 23 cm.</p>
                    <p className="categoria">Medida pintura 16 x 23 cm.</p>
                    <div className='btnproducto'>
                        <button className="buy-now-button">Añadir Carrito</button>
                        <button className="w">Pedir por WhatsApp</button>
                    </div>
                </div>
            </div>
            <p className='OtrasI'>OTRAS OBRAS</p>
            {/* <div className="carousel" onMouseMove={handleMouseMove} >
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 40}%)` }}>
                    {images.map((src, index) => (
                            <img key={index} src={src}  alt={`Imagen ${index}`} />
                    ))}
                </div>
            </div> */}
            <div className='carrusel'>
                <div className="element">
                    <img className='imagenCarre' src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NzBfMFJSZmU?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="" />
                    <p className='text1'>Celene Ozuna. El galopeo</p>
                    <p className='text2'>80 x 60 cm</p>
                </div>
                <div className="element">
                    <img className='imagenCarre' src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NjhfRjRCMWY?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="" />
                    <p className='text1'> Marlene Sánchez.
                        Naturalizante palpizante</p>
                    <p className='text2'>80 x 60 cm</p>
                </div>
                <div className="element">
                    <img className='imagenCarre' src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NjlfWVlITTg?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="" />
                    <p className='text1'>Marcela Torres.
                        Reyna</p>
                    <p className='text2'>74 x 54 cm</p></div>
                <div className="element"> <img className='imagenCarre' src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY4MDA5NzBfMFJSZmU?session_id=77419c715cbb09b237d09a13f86accadfcbb369ad4fb46e5989b2814fe91df4a&inline=1&preview=1" alt="" />
                    <p className='text1'>Celene Ozuna. El galopeo</p>
                    <p className='text2'>80 x 60 cm</p>
                </div>
            </div>
        </>
    );
}

export default ProductoVista;