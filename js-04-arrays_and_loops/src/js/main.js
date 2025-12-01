// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Accediendo al segundo elemento
console.log (`Accediendo al segundo elemento:  ${ techStack[1] }`); // "CSS"

// Acceder al último elemento (longitud - 1)
console.log (`Accediendo al ultimo elemento:  ${ techStack[ techStack.length-1] }` ); // "JavaScipt"
