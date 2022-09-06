//Escribir una función que permita saber si un número se repite dentro de un arreglo.
//Blockquote Casos de prueba:
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]


let caso1 = [1, 22, 5, 17, 10, 5, 40, 5]; 
let caso2 = [7, 41, 5, 7, 10, 13, 2];
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105]
let repetidos = [];
let repetidos2 = [];
let repetidos3 =[];


const compara =  [1, 22, 5, 17, 10, 5, 40, 5].sort();//Empieza caso1
for (let index = 0; index < caso1.length; index++) {
    if (compara[index+1] == compara[index]){
        repetidos.push (compara[index]);
    }
    
}
console.log("Caso 1:" + repetidos);//Finaliza caso 1


const compara2 = [7, 41, 5, 7, 10, 13, 2].sort();
for (let index = 0; index < caso2.length; index++) {
    if (compara2[index+1] == compara2[index]){
        repetidos2.push (compara2[index]);
    }
    
}
console.log("Caso 2: "+ repetidos2);//Finaliza caso 2

const compara3 = [1, 22, 5, 14, 24, 31, 27, 15, 105].sort();
for (let index = 0; index < caso3.length; index++) {
    if (compara3[index+1] == compara3[index]){
        repetidos3.push (compara3[index]);
    } 
    
}
console.log("Caso 3: "+ repetidos3);//Finaliza caso 3


