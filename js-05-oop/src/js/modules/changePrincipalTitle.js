
/*
 Ventajas de trabajar con ED Modules:
    1. Modularidad: Puedes dividir tu código en módulos más pequeños y manejables, 
    lo que facilita la organización y el mantenimiento del código.
    2. Reutilización: Puedes reutilizar módulos en diferentes partes de
     tu aplicación o incluso en diferentes proyectos, lo que ahorra tiempo y esfuerzo.
    3. Dependencias explícitas: Puedes declarar las dependencias de un módulo 
    de manera clara, lo que facilita la comprensión de cómo interactúan los diferentes módulos entre sí.
    4. Mejora del rendimiento: Los navegadores pueden cargar y ejecutar módulos 
    de manera más eficiente, ya que solo cargan los módulos necesarios cuando se requieren.    
*/


/** 
 * Modifica el titulo principal de la página.
 * @param {string} titleId - El ID del elemento del título a modificar.
*/ 

const changePrincipalTitle = ( titleId ) => {
    const titleElement = document.getElementById( titleId );
    if ( titleElement !== null ) {
        titleElement.innerText = "OOP in JavaScript, Cohorte 62";
    } else {
        console.warn( `Element with id "${ titleId }" not found.` );
    }
}

//Exporta la funcion para que pueda ser utilizada en otros módulos
// Exportacion nombrada, si son varios se separa con , y con {}
   export { changePrincipalTitle }; 
// o puedes tambien ponerlo antes de export en la funcion 