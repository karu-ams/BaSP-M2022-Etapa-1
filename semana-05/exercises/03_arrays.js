console.log('Arrays');

console.log('EXERCISE 3.a');
/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar 
console.log). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months[4], months[10]);

console.log('EXERCISE 3.b');
/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(months.sort());

console.log('EXERCISE 3.c');
/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
months.unshift('Alfa');
months.push('Omega');
console.log(months);


console.log('EXERCISE 3.d');
/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
months.pop();
months.shift();
console.log(months)


console.log('EXERCISE 3.e');
/* Invertir el orden del array (utilizar reverse). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months.reverse());


console.log('EXERCISE 3.f');
/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
(utilizar join). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months.join('-'));

console.log('EXERCISE 3.g');
/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(months.slice(4,11));