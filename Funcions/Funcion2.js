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
saludar(1,3)
producto(10,20)