//definir funciones con valores por defecto para los parametros 
function numeros(a=1, b=2, c=3) {
    console.log("valor del parametro a: ",a)
    console.log("valor del parametro b: ",b)
    console.log("valor del parametro c: ",c) 
}

//llaadmos multiples a la misma funcion para ver un ejemplo de reutilizacion 
numeros(); // llamadas sin argumentos 
numeros(5,10); //llamados con cargumentos incompletos
numeros(5,null,10); //lamado con argumentos null
numeros(5,5,7,8); //lamado con exceso de argumentos completos
