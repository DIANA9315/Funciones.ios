//primero declaramos la funciones en este caso utilizando  parametros
function saludar(a,b) {
    let x
    console.log("Hola estas dentro de la funcion saludar")
    x=a+b
    console.log("El valor de x es : ", x)
}

function producto (a,b){
        console.log("Hola estas dentro de la funcion saludar")
        let p 
        console.log("Producto a*b = ", a*b)
}

//Llamado a las funciones utilizando argumentos 
const x=Number(prompt("Ingresa un valor de x"))
const y=Number(prompt("Ingresa un valor de y"))
const w=Number(prompt("Ingresa un valor de w"))
const z=Number(prompt("Ingresa un valor de z"))
saludar(x,y)
producto(w,z)