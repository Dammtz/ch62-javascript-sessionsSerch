/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/*Realizar funcion que reciba un numero como valor de temperatura,
si la temperatura es mayor a 25 grados, retornar [hace calor], 
en caso contrario, retornar hace frio;
Imprimir el valor de retorno por consola.
*/

/*
Ejercicios Dam 
const clima = temperatura => {
    let message = ("");
    
    if  (temperatura > 25) {message ("Hace calorcito");
    } else {
        message ("Hace frio");
    }
    return message; 
};
   console.log (clima (30));
*/ 

// Swith 
/* 
Ejercicios Dam 
const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("editor") ); // Acceso para editar contenido
/* 

/*Refactorizar :
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
} 
*/ 

/* 
Swith early return
const getWeather = (codigo) => {
    switch (codigo) {
          case 0: 
          return "Clear Sky";
          case 1:
          case 2:
          case 3: 
          return "Mainly clear, partly cloudy, and overcast";
          case 45:
          case 48: 
          return "Fog and depositing rime fog";
          default: 
          return "no definido";
    }
};

console.log (getWeather(0));

Ejercicio con break;
const getWeather = (codigo) => {
    let message; 
    switch (codigo) {
          case 0: 
          message = "Clear Sky";
          break;
          case 1:
          case 2:
          case 3: 
          message = "Mainly clear, partly cloudy, and overcast";
          break;
          case 45:
          case 48: 
          message = "Fog and depositing rime fog";
          break; 
          default: 
          message = "no definido";
    }
    return message;
};

console.log (getWeather(0));
*/ 
