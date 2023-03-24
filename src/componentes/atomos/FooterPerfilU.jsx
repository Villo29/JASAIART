import Twitter from '../../assets/images/IconoTwitter.png'
import WhatsApp from '../../assets/images/IconoWhatsApp.png'
import Gmail from '../../assets/images/IconoGmail.png'
import Facebook from '../../assets/images/IconoFacebook.png'
import Instagram from '../../assets/images/IconoInstagram.png'
import PayPal from '../../assets/images/IconoPayPal.png'
import Visa from '../../assets/images/IconoVisa.png'
import LogoFooter from '../../assets/images/JasaiArtWhite.png'
import '../../assets/styles/FooterLandingPage.css'

function FooterPerfilU() {
    return (
        <footer>
            <div className="container-footer">
                <div className="logo-footer">
                    <img src={LogoFooter} className="LogoFooter" />
                </div>
                <div className="footer-titles">
                    <h4>CONTÁCTANOS</h4>
                    <h4><img src={WhatsApp} className="logosIconos" /> +52 968 109 6112</h4>
                    <h4><img src={Gmail} className="logosIconos" /> jasaiart@gmail.com</h4>
                </div>

                <div className="footer-titles">
                    <h4>REDES SOCIALES</h4>
                    <h4>
                        <img src={Facebook} className="logosRedesIconos" />
                        <img src={Instagram} className="logosRedesIconos" />
                        <img src={Twitter} className="logosRedesIconos" />
                    </h4>
                </div>
                <div className="footer-titles">
                    <h4>MEDIOS DE PAGO</h4>
                    <h4>
                        <img src={PayPal} className="logosRedesIconos" />
                        <img src={Visa} className="logosRedesIconos" />
                    </h4>
                </div>
            </div>
        </footer>


    );
}

export default FooterPerfilU; 