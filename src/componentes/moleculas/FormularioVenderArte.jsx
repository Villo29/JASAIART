import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cancelar from '../../assets/images/Cancel.png'
import '../../assets/styles/FormularioVenderArte.css'

function FormularioVenderArte() {

    const [stateForm, setStateForm] = useState('')
    const navigateL = useNavigate();
    const formDataF = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        navigateL("/JasaiArt")
        const formData = new FormData(formDataF.current);
        let URI = "https://jasaiart-api.iothings.com.mx/Usuarios";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nota: formData.get("Nota"),
                categoria: formData.get("categoria"),
                image: formData.get("image"),
            }),
        };
        console.log(options.body);
        fetch(URI, options)
            .then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    timer: 9000,
                    icon: 'success',
                    timerProgressBar: true,
                    text: JSON.stringify(" IMAGEN GUARDADA EXITOSA")
                })
            });
    };
    

    Swal.fire({
        icon:
    });

    return (
        <div className="containerVenderArte">
            <form className='formularioVenderArte' ref={formDataF}>
                <label className="mensaje">NOTA:</label>
                <textarea id="mensaje" name="Nota" value={stateForm.Nota} className='textAreaMensaje' required></textarea>

                <label className="Archivos">ARCHIVOS:</label>
                <input type="file" id="imagen" value={stateForm.image} name="image" className='InputArchivo' />

                <label className="tipoArchivo" >TIPO DE ARCHIVO:</label>
                <select id="categoria" name="categoria" className='selectTipoArchivo'>
                    <option value="" className='optionTipoArchivo'>Seleccione una opción</option>
                    <option value="opcion1" className='optionTipoArchivo'>Opción 1</option>
                    <option value="opcion2" className='optionTipoArchivo'>Opción 2</option>
                    <option value="opcion3" className='optionTipoArchivo'>Opción 3</option>
                </select>

                <button type="submit" onClick={handlerClick} className='btn-Publicar'>PUBLICAR</button>
            </form>
        </div>
    );
}

export default FormularioVenderArte;