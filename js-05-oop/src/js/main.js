import { User } from "../models/User.js";
import { changePrincipalTitle } from './modules/changePrincipalTitle.js';
import { changePrincipal} from './modules/changePrincipalImg.js';
import { aliceUser } from './modules/literalObject.js';


changePrincipalTitle ("title"); 
changePrincipal ("cat.jpg");
console.log (aliceUser.getFullName());
console.log( aliceUser );
console.log( aliceUser.stringify() );

const fatima = new User("Fatima", "Orozco", 25, "fatima@gmail.com");
const juan = new User("Juan", "Perez", 28, "juan@gmail.com");
const luis = new User("Luis", "Ramirez", 32, "luis@gmail.com");

console.log( luis.greet() ); // Hello, I'm Luis Ramirez, 32 years old. luis@gmail.com
console.log( juan.greet() ); // Hello, I'm Juan Perez, 28 years old. juan@gmail.com
console.log( fatima.greet() ); // Hello, I'm Fatima Orozco, 25 years old. fatima@gmail.com.

