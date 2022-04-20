console.log('Strings');

console.log('EXERCISE 2.a');
/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase). */
var stringA = 'This was a lowercase string.';
console.log(stringA.toUpperCase());

console.log('EXERCISE 2.b');
/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var stringB = "First five characters are shown"
var newStringB = stringB.substring(0,5);
console.log(newStringB);

console.log('EXERCISE 2.c');
/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var stringC = "Last 3 characters shown";
var newStringC = stringC.substring(stringC.length - 3);
console.log(newStringC);

console.log('EXERCISE 2.d');
/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
toUpperCase, toLowerCase y el operador +). */
var stringD = "the first letter should be Uppercase"
var newStringD = stringD.substring(0,1).toUpperCase() + stringD.substring(1);
console.log(newStringD);

console.log('EXERCISE 2.e');
/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var stringE = "Blank space.";
var firstBlankSpace = stringE.indexOf(" ");
console.log(firstBlankSpace);

console.log('EXERCISE 2.f');
/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera 
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +). */
var stringF = "software developer"
var indexBlankSpace = stringF.indexOf(' ');
var newStringF = stringF.substring(0,1).toUpperCase() + stringF.substring(1,indexBlankSpace + 1) + 
stringF.substring(indexBlankSpace + 1,indexBlankSpace + 2).toUpperCase() + stringF.substring(indexBlankSpace + 2);
console.log(newStringF);