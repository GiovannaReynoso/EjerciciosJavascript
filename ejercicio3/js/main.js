//Escribir una función que permita saber si un número se repite dentro de un arreglo.
//Blockquote Casos de prueba:
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]


let caso1 = [1, 22, 5, 17, 10, 5, 40, 5]; 
let caso2 = [7, 41, 5, 7, 10, 13, 2];
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105]

console.log("En el caso 1 se repite: " + repetidos(caso1));
console.log("En el caso 2 se repite: " + repetidos(caso2));
console.log("En el caso 3 se repite: " + repetidos(caso3));

function repetidos(lista) 
{
    let repetido = 0;
    let resultado = false;
    
    for (let index1 = lista.length-1; index1 >= 0 ; index1--) {
        //console.log ("index1 " + lista[index1])
        for (let index2 = index1-1; index2 >= 0; index2--) {
           // console.log ("index2 " + lista[index2])
            
            if (lista [index1] == lista[index2]) {
                repetido = lista[index1]
                resultado = true
                console.log("El número "+ repetido + " se repite en el arreglo")           
            }  
            
        }        
            
    }
    if (resultado == false) {
              console.log("No se repite ninguno")}
    return resultado;
};


