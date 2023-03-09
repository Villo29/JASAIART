
import LogoJasaiWhite from '../../assets/images/JasaiArtWhite.png'
import IconoFB from '../../assets/images/IconoFacebook.png'
import IconoTwitter from '../../assets/images/IconoTwitter.png'
import IconoInstagram from '../../assets/images/IconoInstagram.png'
import IconoVisa from '../../assets/images/IconoVisa.png'
import IconoPaypal from '../../assets/images/IconoPayPal.png'
import IconoWhatsapp from '../../assets/images/IconoWhatsApp.png'
import IconoGmail from '../../assets/images/IconoGmail.png'
import '../../assets/styles/FooterCarrito.css'

function FooterCarrito() {
    return (
        <div id='footer'>
            <div>
                <img src={LogoJasaiWhite} className="logoJasaiF" />
                <h1 className='txt-contactanosF'>CONTÁCTANOS</h1>
                <img src={IconoWhatsapp} className="logoWhatsappF" />
                <h2 className='txt-NumeroTelefonicoF'>+52 968 109 6112</h2>
                <img src={IconoGmail} className="LogoGmailF" />
                <h2 className='txt-emailF'>jasaiart@gmail.com</h2>
            </div>

            <div>
                <h1 className='txt-RedesSocialesF'>REDES SOCIALES</h1>
                <img src={IconoFB} className="logoFBF" />
                <img src={IconoInstagram} className="logoInstagramF" />
                <img src={IconoTwitter} className="logoTwitterF" />
            </div>

            <div>
                <h1 className='txt-MediosPagoF'>MEDIOS DE PAGO</h1>
                <img src={IconoPaypal} className="logoPayPalF" />
                <img src={IconoVisa} className="logoVisaF" />
            </div>
        </div>

    );
}

export default FooterCarrito; 