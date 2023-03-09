import '../../assets/styles/PreciosLandingPage.css'

function PreciosLandingPage() {
    return (
        <div className="row-contenedor">
            <nav className='contenedor-nav'>
                <ul className='contenedor-ul'>
                <button className='btn-precio1'>HASTA $100.00</button>
                <button className='btn-precio2'>$100.00 - $200.00</button>
                <button className='btn-precio3'>$200.00 - $300.00</button>
                <button className='btn-precio4'>$300.00 - $500.00</button>
                <button className='btn-precio5'>DESDE $500.00</button>
                </ul>
            </nav>
        </div>
    );
}

export default PreciosLandingPage;