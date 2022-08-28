import React from "react";
import Tarea from "./Tarea.jsx";
import TareaForm from "./TareaForm.jsx";
import ListaDeTareas from "./ListaDeTareas.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="aplicacion-to-do">
            <div className="lista-tareas">
                <h1>To Do List</h1>
				<ListaDeTareas />
            </div>
        </div>
	);
};

export default Home;

