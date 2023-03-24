import CarlosVivar from '../../assets/images/FotoPerfilCarlosVivar.jpeg'
import HugoVazquez from '../../assets/images/FotoHugoVazquez.jpeg'
import JaimeJose from '../../assets/images/FotoJaimeJose.jpeg'
import '../../assets/styles/CardPintores.css'

function CardPintores() {
    return (
        <div className="containerTarjetas">
            <div className="cardContainer">
                <figure>
                    <img src={CarlosVivar} />
                </figure>
                <div className="infoArtista">
                    <h1>Carlos vivar</h1>
                    <p>
                        El artista concentra sus esfuerzos en la creación de espacios no
                        concretos, tratando de aislar la objetividad de sus temas, mostrando
                        al sujeto-objeto en todo su esplendor.
                    </p>
                    <a href="/InformacionDeContacto">Ver Arte</a>
                </div>
            </div>

            <div className="cardContainer">
                <figure>
                    <img src={HugoVazquez} />
                </figure>
                <div className="infoArtista">
                    <h1>Hugo Vázquez</h1>
                    <p>
                        El artista concentra sus esfuerzos en la creación de espacios no
                        concretos, tratando de aislar la objetividad de sus temas, mostrando
                        al sujeto-objeto en todo su esplendor.
                    </p>
                    <a href="/InformacionDeContacto">Ver Arte</a>
                </div>
            </div>

            <div className="cardContainer">
                <figure>
                    <img src={JaimeJose} />
                </figure>
                <div className="infoArtista">
                    <h1>Jaime José</h1>
                    <p>
                        Jaime José ha sido considerado como un artista figurativo que juega
                        con dos manifestaciones la auto-critica y la crítica social haciendo
                        de ésta mezcla un sello muy personal
                    </p>
                    <a href="/InformacionDeContacto">Ver Arte</a>
                </div>
            </div>
        </div>
    );
}

export default CardPintores;