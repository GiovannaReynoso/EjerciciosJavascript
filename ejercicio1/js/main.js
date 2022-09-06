//Escribir una función que tome un arreglo de números 
//y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

// console.log(Math.max(3, 5, 7, 1, 6))

let numeros = [3, 5, 7, 1, 6]
let resultado = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > resultado){
    
    resultado = numeros[i]};
    
}

console.log(resultado);


