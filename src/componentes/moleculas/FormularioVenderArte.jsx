import Cancelar from '../../assets/images/Cancel.png'
import '../../assets/styles/FormularioVenderArte.css'


function FormularioVenderArte() {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevenir que se envíe el formulario de manera convencional

        const formData = new FormData(form); // Crear un objeto FormData con los datos del formulario

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("La imagen se ha subido correctamente.");
                // Aquí puedes hacer cualquier otra cosa que necesites después de subir la imagen
            } else {
                console.log("Ha ocurrido un error al subir la imagen.");
            }
        } catch (error) {
            console.log(error);
            console.log("Ha ocurrido un error al subir la imagen.");
        }
    });
    return (
        <div className="containerVenderArte">
            <form className='formulariovenderArter'>
                <label className="mensaje">NOTA:</label>
                <textarea id="mensaje" name="mensaje" className='textAreaMensaje' required></textarea>

                <label className="Archivos">ARCHIVOS:</label>
                <input type="file" id="imagen" name="imagen" className='InputArchivo' />

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