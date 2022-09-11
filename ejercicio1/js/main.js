//Escribir una función que tome un arreglo de números 
//y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

// console.log(Math.max(3, 5, 7, 1, 6))

let numeros = [3, 5, 7, 1, 6];
let resultado = 0;
    console.log("resultado final= "+ mayor(numeros));

function mayor(datos) {
    

for (let i = 0; i < datos.length; i++) 
{
    if (datos[i] > resultado)
    {
        resultado = datos[i]
        console.log(resultado);
        
    }
    console.log("Número de i igual a: " + resultado);
}
    return resultado;
} 
    
  
    
