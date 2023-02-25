import Header from "../componentes/atomos/HeaderVenderArte";
import TarjetaNombreArte from "../componentes/moleculas/TarjetaNombreArte";
import ImagenArte from "../componentes/moleculas/ImagenArte";
import PrecioVenta from "../componentes/moleculas/PrecioVenta";
import TipoTecnica from "../componentes/moleculas/TipoTecnica";
import BtnCancelar from "../componentes/atomos/BtnCancelar";
import BtnPublicar from "../componentes/atomos/BtnPublicar";

function VenderArte() {
    return (
        <>
            <Header></Header>
            <TarjetaNombreArte txtNombreArte="INGRESE EL NOMBRE DEL ARTE"/>
            <ImagenArte txtImagen="ADJUNTE LA IMAGEN"></ImagenArte>
            <PrecioVenta txtPrecio="PRECIO A LA VENTA"></PrecioVenta>
            <TipoTecnica txtTecnica="TIPO DE TÉCNICA"></TipoTecnica>
            <BtnCancelar></BtnCancelar>
            <BtnPublicar></BtnPublicar>
        </>
    );
}

export default VenderArte;