import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../assets/styles/Producto.css"
import start from "../../assets/images/5Estrellas.png" 


function ProductoVista() {

    function handleClick() {
        Swal.fire({
            icon: "success",
            text: "Se agrego al Carrito"
        });
    }
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
                        <p className='title1'>AISTRID BREINTER. OH CHIAPANECA MI AMOR</p>
                    </div>
                    <div>
                        <p className="product-description">21 x 28 CM</p>
                    </div>
                    <p className="product-price">$1,300</p>
                    <img src={start} className="startimg" alt="" srcset="" />
                    <p className="categoria">Óleo</p>
                    <p className="categoria">Medida pintura 16 x 23 cm.</p>
                    <p className="categoria">Medida pintura 16 x 23 cm.</p>
                    <div className='btnproducto'>
                        <Link to="/Carrito">
                            <button className="buy-now-button" onClick={handleClick} >Añadir Carrito</button>
                        </Link>
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