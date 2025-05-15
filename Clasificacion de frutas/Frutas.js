//Se pone el arreglo de frutas
 const frutas= ["mango","mango", "manzana","fresa","pepino","sandia"]
let conteoFrutasfor={};

//ciclo for
console.log("Conteo de frutas: ", Object.keys(conteoFrutasfor).length);
for (let i=0; i < frutas.length; i++){
    console.log (`Posición ${i}: ${frutas[i]}`);
    //declarar variable
let fruta=frutas [i];
if (conteoFrutasfor[fruta]){
    conteoFrutasfor[fruta]++;
}else{
    conteoFrutasfor[fruta] =1;
}
}      

//Imprimimos la cantidad de cada tipo de fruta
for (const fruta in conteoFrutasfor){
    if (conteoFrutasfor.hasOwnProperty(fruta)) {
    console.log(`${fruta}: ${conteoFrutasfor[fruta]}`);
    } 
}
