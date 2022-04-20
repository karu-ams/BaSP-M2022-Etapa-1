console.log('Functions');

console.log('EXERCISE 6.a');
/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
function sumaA(a,b) {
	return a + b;
}
var result = sumaA(4,5);
console.log(result);

console.log('EXERCISE 6.b');
/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es 
un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado. */
function sumaB(a,b) {
	if (typeof(a) !== "number"||typeof(b) !== "number") {
		alert('ERROR: One of the parameters is not a number');
		return NaN;
	}
	return a + b;
}
var resultB = sumaB('hi',7);
console.log(resultB);

console.log('EXERCISE 6.c');
/* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero. */
function validateInteger(a) {
    if (a % 1 === 0) {
        outcome = 'true';
    } else {
        outcome = 'false';
    }
    return outcome;
}
var valNum1;
console.log(validateInteger(valNum1));

console.log('EXERCISE 6.d');
/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En 
caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */


console.log('EXERCISE 6.e');
/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
probando que todo siga funcionando igual. */
