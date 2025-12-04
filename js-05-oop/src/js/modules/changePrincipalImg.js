// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"

/** Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Ruta relativa, considerar como inicio la ubicación de este modulo
 */
const changePrincipal = (imageRoute) => {
    if ( imageRoute !== null ) {
        document.getElementById("logo").src = `/assets/img/${imageRoute}`;
    } else {
        console.warn( `Element with route "${ titleId }" not found.`);
    }
}


export {changePrincipal}; 