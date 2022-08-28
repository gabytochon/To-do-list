import React, { useState } from "react";
import Tarea from "./Tarea.jsx";
import TareaForm from "./TareaForm.jsx";

function ListaDeTareas () {

    const [ tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        console.log("Tarea agragada");
        console.log(tarea);
       /* const listaAuxiliar = [...tareas]
        listaAuxiliar.push(tarea)*/
        setTareas([...tareas, tarea])
    }
    
    const eliminarTarea =(position, texto) => {
          console.log(position, texto)
         /* setTareas(tareas.filter((texto2)=>{
            return texto2 != texto
          })) */

          setTareas(tareas.filter((texto2, index)=>{
            return index != position
          }))
          
    }

    return (
        <>
            <TareaForm agregarTarea={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                tareas.map ((tarea, index) => 
                <Tarea eliminarTarea={eliminarTarea} key={index}
                    texto = {tarea} id={index} />
                )
                }
            </div>
        </>

    );
}

export default ListaDeTareas;