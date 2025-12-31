/**
 * Modulo para manejar el formulario de tareas
 * @returns {Object} objeto con los nputs del form
 */

const formHandler = (formReference) => {
   /*
    const tasktitle = document.getElementById("taskTitle").value; //para checkboxes y selects usar .checked y .selectedOptions 
    const assignedTo = document.getElementById("assignedTo").value;
    return {
        tasktitle: tasktitle,
        assignedTo: assignedTo
    }; */ 

    /* FormData: Una forma más eficiente de manejar formularios
    en JS. Permite recopilar y gestionar los datos de un formulario */

    const formData = new FormData (formReference); //pasamos la referencia del formulario
    const data = Object.fromEntries(formData.entries()); //convertimos a objeto
    return data; //retornamos el objeto
}

export {formHandler}; //exportacion nombrada