//primero declaramos la funciones en este caso utilizando  parametros
function saludar(a,b) {
    let x
    console.log("Hola estas dentro de la funcion saludar")
    x=a+b
    console.log("El valor de x es : ", x)
}

function producto (a,b){
        console.log("Hola estas dentro de la funcion saludar")
        let p //solo la variable
        console.log("Producto a*b = ", a*b)
}

//Llamado a las funciones utilizando argumentos 
const x=5, y=10
const w=15,z=30
saludar(x,y)
producto(w,z)