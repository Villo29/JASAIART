import Cancelar from '../../assets/images/Cancel.png'
import '../../assets/styles/FormularioVenderArte.css'

function FormularioVenderArte() {
    return (
        <div className="containerVenderArte">
            <form className='formularioVenderArte'>
                <label className="mensaje">NOTA:</label>
                <textarea id="mensaje" name="mensaje" className='textAreaMensaje' required></textarea>

                <label className="Archivos">ARCHIVOS:</label>
                <input type="file" id="imagen" name="imagen" className='InputArchivo'/>

                <label className="tipoArchivo" >TIPO DE ARCHIVO:</label>
                <select id="categoria" name="categoria" className='selectTipoArchivo'>
                    <option value="" className='optionTipoArchivo'>Seleccione una opción</option>
                    <option value="opcion1" className='optionTipoArchivo'>Opción 1</option>
                    <option value="opcion2" className='optionTipoArchivo'>Opción 2</option>
                    <option value="opcion3" className='optionTipoArchivo'>Opción 3</option>
                </select>

                <button type="submit" className='btn-Publicar'>PUBLICAR</button>
            </form>
        </div>
    );
}

export default FormularioVenderArte;