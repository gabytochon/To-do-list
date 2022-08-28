import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({ id, texto, eliminarTarea }) {
    const onClick = () => {
        eliminarTarea(id, texto)
    }
    return (
        <div className="contenedor-tarea">
             <div className="tarea-texto">
                {texto}
            </div>
            <div className="contenedor-iconos" onClick={onClick}>
                <AiOutlineCloseCircle className="eliminar-icono" />
            </div>
        </div>
    );
}

export default Tarea;
