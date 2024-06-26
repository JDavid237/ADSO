//alert("Alertaaaa");

console.log("hola mensaje desde consola");
document.write("mensaje en el documento");

// definir variable
var variable;
variable = 50;

document.write("<br>" + variable);
console.log(variable);

var variable2 = "Segunda variable";
document.write("<br>" + variable2);
console.log(variable2);

let variable3 = "variable con let";
document.write("<br>" + variable3);
console.log(variable3);

const constante = "Soy una constante";
document.write("<br>" + constante);
console.log(constante);

//diferencias

// Se puede volver a crear variables con el mismo nombre
var edad = 18;
console.log(edad);
var edad = 100;
console.log(edad);

// no se puede volver a crear pero si cambiar su valor
let edad1 = 20;
console.log(edad1);
edad1 = 200;
console.log(edad1);

// No se puede cambiar su valor
const edad2 = 30;
console.log(edad2);

// tipos de datos
let nombre = "Adso"; //string
let ficha = 2620031; //number o int
let activo = true; //boolean
let year = "2024"; //string
let variableNull; //undefined
let miArray = {}; //object

// ver el tipo de variable
document.write(typeof ficha);
console.log(typeof nombre);

// concatenacion
document.write("<br>", nombre + ` ${ficha} <br>`);

document.write(nombre.concat(" ", ficha));

// sumar dos numeros

// let num1=parseInt(prompt("Ingresa primer numero"));
// let num2=parseInt(prompt("Ingresa segundo numero"));

// let resultado=num1+num2
// document.write("<br>El resultado es: ",resultado);
// console.log("El resultado es: ",resultado);

// login simple
let user = prompt("Ingesa tu nombre de usuario");
let pass = prompt("Ingresa tu contraseña");

document.write("<br><h3 style='color:blue;'>Bienvenido ", user, "</h3>");
console.log("Bienvenido ", user, " tu contraseña es: ", pass);
