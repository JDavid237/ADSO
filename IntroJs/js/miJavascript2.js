//incremento
let numero = 5;
document.write(numero);
console.log(numero);

document.write("<br>", ++numero); //primero suma luego imprime
console.log(numero++); //primero imprime luego suma

//Decremento
numero = numero - 1;
document.write("<br>", --numero);

// operadores de comparacion
let edad = 18;

document.write("<br>", 10 > edad);
console.log(10 > edad);

document.write("<br>", 10 == edad);
console.log(10 == edad);

document.write("<br>", 10 < edad);
console.log(10 < edad);

//Libreria math
let redon = 18.63;
redon = Math.round(redon);

console.log(redon);

let miCadena = "Hola, como estan";
// Contar cantidad de caracteres
document.write("<br>", miCadena.length);
// Seleciona entre un rango de caracteres
document.write("<br>", miCadena.slice(5, 10));
// Quita dos caracteres desde el inicio
document.write("<br>", miCadena.substring(2));
// separa un string con una coma y crea un objeto independiente en un arreglo
document.write("<br>", miCadena.split(","));
console.log(miCadena.split(","));

//array

let miArray = [];
miArray[0] = "Ana";
miArray[1] = "Maria";
miArray[2] = "Luis";
miArray[3] = "Pepe";

console.log(miArray);

let miArray2 = [1, "Maria", 25.5, true];

console.log(miArray2);
console.log(miArray[1], miArray[2]);

// cantidad de elementos
console.log(miArray.length);
// coonvertir objeto a string
let miArrayString = miArray.toString();
console.log(miArrayString);

// borrar ultimo elemento
miArray.pop(); //shift praa eliminar el primero
console.log(miArray);

// agregar ultimo elemento
miArray.push("Carlos"); //unshift para agregar de primero
console.log(miArray);

//Otros
// miArray.splice();
// miArray.sort();
// miArray.reverse();`

// comparadores

let age = 18;
let sex = "m";

console.log(15 < 28 && sex == "f");

console.log(19 < 28 || sex == "f");

console.log(!(sex == "f"));

//Estructura condicional

let edad2 = 18;
let miEdad = 20;
let sexo = "m";

if (miEdad > edad2 && sexo == "m") {
  console.log("edad es mayor que 18 y es hombre, presta servicio");
} else {
  console.log("edad es menor que 18 no presta servico");
}

miEdad = 17;
sexo = "f";
if (miEdad > edad2 && sexo == "m") {
  console.log("edad es mayor que 18 y es hombre, presta servicio");
} else if (miEdad > edad2 && sexo == "f") {
  console.log("Es de sexo femenino, no presta servicio");
} else if (miEdad < edad2 && sexo == "m") {
  console.log("Debe esperar a cumplir 18 años");
} else {
  console.log("Una mujer menor de edad");
}

// Con switch`

let estrato =prompt("Digite su estrato:");

switch (estrato) {
  case "1":
    console.log("usted pertenece al estrato 1");
    break;

  case "2":
    console.log("usted pertenece al estrato 2");
    break;

  case "3":
    console.log("usted pertenece al estrato 2");
    break;

  default:
    console.log("no pertenece a ninguno");
    break;
};

// Esto tambien se puede convitar con if
