
import LogoJasaiWhite from '../../assets/img/JasaiArtWhite.png'
import IconoFB from '../../assets/img/IconoFacebook.png'
import IconoTwitter from '../../assets/img/IconoTwitter.png'
import IconoInstagram from '../../assets/img/IconoInstagram.png'
import IconoVisa from '../../assets/img/IconoVisa.png'
import IconoPaypal from '../../assets/img/IconoPayPal.png'
import IconoWhatsapp from '../../assets/img/IconoWhatsApp.png'
import IconoGmail from '../../assets/img/IconoGmail.png'
import '../../assets/styles/FooterLandingPage.css'

function FooterLandingPage() {
    return (
        <div>

            <div>
            <img src={LogoJasaiWhite} className="logoJasai"/>
                <h1 className='txt-contactanos'>CONTÁCTANOS</h1>
            <img src={IconoWhatsapp} className="logoWhatsapp"/>
                <h2 className='txt-NumeroTelefonico'>+52 968 109 6112</h2>
            <img src={IconoGmail} className="LogoGmail"/>
                <h2 className='txt-email'>jasaiart@gmail.com</h2>
            </div>

            <div>
                <h1 className='txt-RedesSociales'>REDES SOCIALES</h1>
                <img src={IconoFB} className="logoFB"/>
                <img src={IconoInstagram} className="logoInstagram"/>
                <img src={IconoTwitter} className="logoTwitter"/>
            </div>

            <div>
                <h1 className='txt-MediosPago'>MEDIOS DE PAGO</h1>
                <img src={IconoPaypal} className="logoPayPal"/>
                <img src={IconoVisa} className="logoVisa"/>
            </div>
        </div>

    );
}

export default FooterLandingPage;