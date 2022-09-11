//María llega a su entrevista de trabajo para el rol de Desarrollador Junior 
//y se le pide que resuelva este problema: Dada una lista de números 
//[-1, 3, 4, 2, 6], escribe una función en javascript para calcular 
//el número más pequeño.
//console.log(Math.min(-1, 3, 4, 2, 6))


let cifras = [-1, 3, 4, 2, 6]
let otras = [-1, 3, 4, 2, 6, -10]

console.log("El número menor del cifras es: " + minimo(cifras))
console.log("El número menor del otras es: " + minimo(otras))
//console.log(minimo(cifras));

function minimo(numeros) 
{
    let temporal = numeros[0];

    for (let index = 0; index < numeros.length; index++) 
    {
        if (numeros[index]< temporal) 
        {
            temporal = numeros[index]
        }
    }
    return temporal;
}