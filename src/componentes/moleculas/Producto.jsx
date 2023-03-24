import { useState } from 'react';
import "../../assets/styles/Producto.css"

function ProductoVista() {

    const [currentIndex, setIndex] = useState(0);

    const images = [
        // "https://revistaq.mx/wp-content/uploads/2021/09/10dc5cea019ce691ecb4edc72914645eba6b11a7w-1024x683.jpg",
        // "https://okdiario.com/img/2020/09/11/dua-lipa.jpg",
        // "https://los40es00.epimg.net/los40/imagenes/2020/09/10/moda/1599749585_522190_1599750161_rrss_normal.jpg",
        // "https://i2-prod.dailystar.co.uk/incoming/article24775599.ece/ALTERNATES/s615b/0_DUP-LIPA.jpg"

        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/500x301",
        "https://via.placeholder.com/500x302",
        "https://via.placeholder.com/500x303"

    ];

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const width = rect.width;
        const index = Math.floor((x / width) * images.length);
        setIndex(index);
    };

    return (
        <>

            {/* <div className="carousel" onMouseMove={handleMouseMove} >
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Imagen ${index}`} />
                    ))}
                </div>
            </div> */}

            <div className="product-page">
                <div className="product-image">
                    <img src="https://via.placeholder.com/300x300" alt="Product Image" />
                    <div className="small-images">
                        <img src="https://via.placeholder.com/80x80" alt="Small Product Image 1" />
                        <img src="https://via.placeholder.com/80x80" alt="Small Product Image 2" />
                    </div>
                </div>
                <div className="product-info">
                    <h1>Product Name</h1>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id est magna.</p>
                    <p className="product-price">$19.99</p>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>

        </>
    );
}

export default ProductoVista;