import React from "react";

function TareaForm (props) {
    const manejadorDeSubmit = (event) => { 
        event.preventDefault()
        /*Aca se usa formData para extraer los valores que tienen los inputs en el form*/
        const formData = new FormData(event.target);
        props.agregarTarea(formData.get("texto"))
    }
    return (
        <form className="tarea-formulario" onSubmit={manejadorDeSubmit}>
            <input 
            className="tarea-input" 
            type= "text" 
            placeholder="Nueva tarea"
            name="texto"
            />
        </form>
    );
}

export default TareaForm;

