import '../../assets/styles/formcon.css';
import imagen from '../../assets/images/img_contacto.png'
import imagen1 from '../../assets/images/jasaiART.png'


function Formcontacto() {
    return (
        <div className="contacto-padre">
            <div>
                <img src={imagen}></img>
            </div>

            <div className='formDiv'>
                <form>
                    <div><img src={imagen1} id="jasaiIMG"></img></div>
                    <div className='contacto-hijo'>
                        <div>
                            <label >Nombre: </label>
                            <input className='input' type="text" id="nombre" name="nombre" />
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input className='input' type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label className="nombre">Telefono: </label>
                            <input className='input' type="tel" id="telefono" name="telefono" />
                        </div>
                        <div>
                            <label for="mensaje">Mensaje: </label>
                            <input className='input' type="men" id='mensaje' name='mensaje' />

                        </div>
                        <input type="submit" value="Enviar mensaje" />
                    </div>

                </form>
            </div>
        </div>

    );
}

export default Formcontacto;