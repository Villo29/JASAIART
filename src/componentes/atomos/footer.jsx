import { Link } from "react-router-dom";
import Logo from "../../assets/images/jasaiArtwhite.png";
import LFace from "../../assets/images/IconoFacebook.png";
import LTwiter from "../../assets/images/IconoTwitter.png";
import LInsta from "../../assets/images/IconoInstagram.png";
import "../../assets/styles/footer.css";



function Footer() {
    return (

        <>
            <footer className="footer">
                <div class="container">
                    <div class="logo">
                        <img src={Logo} alt="Logo de mi página web" />
                    </div>
                    <div class="redes-sociales">
                        <a href="">
                            <img src={LFace} alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={LTwiter} alt="Twitter"   />
                        </a>
                        <a href="#">
                            <img src={LInsta} alt="Instagram"  />
                        </a>
                    </div>

                </div>
            </footer>

        </>
    );
}

export default Footer;