import React, { useState } from 'react';
import FotoPerfil from '../../assets/images/FotoPerfilCarlosVivar.png';
import Arte1 from "../../assets/images/arte1Vivar.png"
import Arte2 from '../../assets/images/arte2Vivar.png';
import '../../assets/styles/InfoContacto.css';

function InfoContacto() {
    const [showText, setShowText] = useState(false);

    function MasInformacion() {
        setShowText(!showText);
    }

    return (
        <div>
            <div className='contenedorInfoContacto'>
                <div className='div-1-InfoContacto'>
                    <img src={FotoPerfil} className='FotoPerfilInfoContacto' alt='' />
                    <div>
                        <h1 className='H'>
                            Carlos Vivar es un artista visual conocido por su estilo distintivo y su capacidad para capturar la esencia
                            de sus temas en cada una de sus obras.
                        </h1>
                        <span className={showText ? 'showText' : 'hideText'}>
                            <h1 className='H'>
                                En 2013 presentó en la ciudad de Nueva York, su libro titulado “Carlos Vivar, El pintor mexicano”.
                            </h1>
                        </span>
                        <button onClick={MasInformacion} className='read-more-btn'>
                            Mas Informacion
                        </button>
                    </div>
                </div>
                <div className='div-2-infoContacto'>
                    <img src={Arte1} alt='' />
                </div>
            </div>
            <div className='contenedor2InfoContacto'>
                <div className='div-3-InfoContacto'>
                    <img src={Arte2} alt='' />
                </div>
                <div className='div-4-InfoContacto'>
                    <div className='RedesContacto'></div>
                    <div className='wrapper'>
                        <div className='icon facebook'>
                            <div className='tooltip'>Facebook</div>
                            <span>
                                <i className='fab fa-facebook-f'></i>
                            </span>
                        </div>
                        <div className='icon twitter'>
                            <div className='tooltip'>Twitter</div>
                            <span>
                                <i className='fab fa-twitter'></i>
                            </span>
                        </div>
                        <div className='icon instagram'>
                            <div className='tooltip'>Instagram</div>
                            <span>
                                <i className='fab fa-instagram'></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoContacto;