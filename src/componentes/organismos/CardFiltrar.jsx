import { Link } from 'react-router-dom';
import React from 'react';
import '../../assets/styles/CardsFiltrarPrecio.css'

import IconoPerfil from '../../assets/images/IconoPerfil.png'
import Estrellas from '../../assets/images/5Estrellas.png'
import Favoritos from '../../assets/images/FavoritosCard.png'

import ImagenCard1 from '../../assets/images/ChiapanecaMiAmor.png'
import ImagenCard2 from '../../assets/images/JaguarEspiritual.png'
import ImagenCard3 from '../../assets/images/LaOracionDelCapitan.png'
import ImagenCard4 from '../../assets/images/ElGalopeo.png'
import ImagenCard5 from '../../assets/images/MiCieloMiCultura.png'
import ImagenCard6 from '../../assets/images/tsajalIxm.png'

function CardFiltrar() {
    return (
        <>

            <div className='containercardrow'>
                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$1300.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard1} className="imagenCard" />
                    <p className="TituloCard">Oh, Chiapaneca mi amor</p>
                    <p className="NombrePintorCard">De Astrid Breinter</p>
                    <Link to="/Producto">
                    <button className="btnComprarCard">COMPRAR</button>
                    </Link>
                </div>


                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$93.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard2} className="imagenCard" />
                    <p className="TituloCard">Jaguar Espiritual</p>
                    <p className="NombrePintorCard">De Rigoberto Santiz</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$84.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard3} className="imagenCard" />
                    <p className="TituloCard">La oración del capitán</p>
                    <p className="NombrePintorCard">De Raymundo López</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$99.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard4} className="imagenCard" />
                    <p className="TituloCard">El galopeo</p>
                    <p className="NombrePintorCard">De Celene Ozuna</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

            </div>

            <div className='containercardrow'>
                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$76.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard5} className="imagenCard" />
                    <p className="TituloCard">Mi cielo, mi cultura</p>
                    <p className="NombrePintorCard">De Franz Perzú</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$92.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={ImagenCard6} className="imagenCard" />
                    <p className="TituloCard">Ch´utel tsajal ixm</p>
                    <p className="NombrePintorCard">De Anxel</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

            </div>

        </>
    );
}

export default CardFiltrar;