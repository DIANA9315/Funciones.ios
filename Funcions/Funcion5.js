//primero declaramos la funciones en este caso utilizando  parametros
function saludar(a,b) {
    let r
    console.log("Hola estas dentro de la funcion saludar")
    r=a+b
    return r
    console.log("El valor de r es : ", r)
}

function producto (a,b){
        console.log("Hola estas dentro de la funcion saludar")
        let p = a*b 
        return p 
       console.log("Producto a*b = ", p )
}

//Llamado a las funciones utilizando argumentos 
const x=Number(prompt("Ingresa un valor de x"))
const y=Number(prompt("Ingresa un valor de y"))
const w=Number(prompt("Ingresa un valor de w"))
const z=Number(prompt("Ingresa un valor de z"))
const resultado= saludar(x,y)
const resultado1 = producto(w,z)

//Imprimir los valores resultantes
    console.log("El valor de r es : ", resultado)
        console.log("Producto p = ", resultado1)
