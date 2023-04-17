//algoritmo con condicional...
let edad;
edad = parseInt(prompt('Para ingresar tiene que ser mayor de edad. Escriba su edad'));
if (edad >= 18){
  console.log('Puede ingresar a la pagina')
}else{
  console.log('No puedes ingresar')
  alert('no tiene la edad suficiente')
}

//Algoritmo utilizando ciclo...
let continuar = true;
let productos = [];

while (continuar) {
  let producto = prompt("Ingrese el nombre del producto:");

  productos.push(producto);

  let pregunta = prompt("¿Quieres agregar más productos? (Sí/No)");
  if (pregunta.toLowerCase() !== "si") {
    continuar = false;
  }
}

console.log("Productos agregados:");
console.log(productos);
alert("¡Gracias por usar nuestro servicio!");

