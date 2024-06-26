// Realizar programa, donde se ungrese un par y nos muestre resultado de las 4 operaciones basicas

/*
function op(num1,num2){
    let result=num1+num2;
    console.log(result);
    result=num1-num2;
    console.log(result);
    result=num1*num2;
    console.log(result);
    result=num1/num2;
    console.log(result);
    
};

//op(parseInt(prompt("Ingresa primer numero")),parseInt(prompt("Ingresa segundo numero")));

function suma(num1,num2){
    return num1+num2;
};

function resta(num1,num2){
    return num1-num2;
};

function division(num1, num2){
    return num1/num2;
};

function multiplicar (num1,num2){
    return num1*num2;
};

let num1= parseInt(prompt("Ingresa primer numero"));
let num2= parseInt(prompt("Ingresa segundo numero"));

console.log("suma",num1,"+",num2,"=",suma(num1, num2));
console.log("resta",num1,"-",num2,"=",resta(num1, num2));
console.log("multiplicacion",num1,"*",num2,"=",multiplicar(num1, num2));
console.log("division",num1,"/",num2,"=",division(num1, num2)); */

//Calcular sueldos dependiendo del empleo, pedir que se iongrese nombre, tipo de empleo y dias trabajados y al final mostrar el salario

/*
let nombre;
do {
    nombre=prompt("Ingresa tus nombres");
}while(!isNaN(nombres) && nombre!="");

let tipo = prompt(
  "Selecciona tu tipo de empleo: 'repartidor', 'cajero' o 'supervisor'"
);

while (tipo != "repartidor" && tipo != "cajero" && tipo != "supervisor") {
  tipo = prompt(
    "Selecciona un empleo valido: 'repartidor', 'cajero' o 'supervisor'"
  );
}

let dia = parseInt(prompt("Ingresa los dias trabajados"));

while (dia==0){
    dia = parseInt(prompt("Debes trabajar almenos 1 dia"));
};

let minimo = 40000;

let repartidor = function () {
  return minimo * dia + (minimo * dia * 12) / 100;
};

let cajero = function () {
  return minimo * dia + 115000;
};

let supervisor = function () {
  return 1800000 - (1800000 * 5) / 100;
};

console.log(nombre, "tu salario comocris", tipo, "es: ");

if (tipo == "repartidor") {
  console.log(repartidor());
} else if (tipo == "cajero") {
  console.log(cajero());
} else if (tipo == "supervisor") {
  console.log(supervisor());
}; */

//Incripciones mediante edad y mostrar en poantalla los datos del inscrito y en que categoria quedo

let nombres;

do {
  nombres = prompt("Ingresa tus nombres");
} while (!isNaN(nombres) && nombres != "");

let documento = parseInt(prompt("Ingresa tu documento de identidad"));

while (documento != Number(documento)) {
  documento = parseInt(prompt("Ingresa un documento valido"));
}

let edad = parseInt(prompt("Ingresa tu edad"));

if (edad < 6 || edad > 50) {
  console.log("Por tu edad no puedes participar");
} else {
  console.log(nombres, "con documento N°", documento, "tu categoria es:");
  if (edad >= 6 && edad <= 10) {
    console.log("Categoria Infantil A");
  } else if (edad >= 11 && edad <= 17) {
    console.log("Categoria Infantil B");
  } else if (edad >= 18 && edad <= 30) {
    console.log("Categoria Juvenil");
  } else if (edad >= 31 && edad <= 50) {
    console.log("Categoria Adultos");
  }
}

let salir = prompt("Ingresa la palabra salir o 0 para poder salirte");

while (salir != "salir" && salir != "0") {
  salir = prompt("Por favor ingresa la palabra salir o 0 para poder salirte");
}
