import { formHandler } from "./form-hander";

const setupEventListener = () => {
    console.log("Event listener set up"); 

    //Manejo del formulario, agregamos id del elemento
    //const taskForm = document.getElementById("task-form");

    //Otra forma de seleccionar el formulario, query selector nos ayuda a seleccionarlo con # como selector, se identifica como css. 
    // Funciona como cascada de selectores css si varios tienen ese id
    const taskForm = document.querySelector("#task-form");

    taskForm.addEventListener("submit", (event) => { //submit por el tipo de boton o poner onclick
        
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        console.log("Formulario enviado");
        //formHandler(); //llamamos a la funcion que maneja el formulario
        const data = formHandler(taskForm); //capturamos el objeto retornado por formHandler
        consttable (data); //mostramos en consola el objeto con los datos del formulario
        //Sirve para objetos y arrays
    });
}; 

export {setupEventListener};
    