// Programa para calcular el indice de cosecha de un cultivo en funcion de frutos colectados y la cantidad de frutos producidos en total


/*
let recolecta= parseInt(prompt("Ingresa la cantidad de frutos recolectados"));

let produccion= parseInt(prompt("Ingresa la cantidad de frutos producidos"));

let cosecha= (recolecta/produccion)*1.0*100;

console.log("El indice de cosecha es: ",cosecha, "%") */


// Solicitar al usuario informacion de sus notas


/*
let notas = parseInt(prompt("Ingresa primera nota"));

notas = notas + parseInt(prompt("Ingresa segunda nota"));
notas = notas + parseInt(prompt("Ingresa tercera nota nota"));

let examen = parseInt(prompt("Ingresa nota examen final"));

let trabajo = parseInt(prompt("Ingresa nota trabajo final"));

let calificacion= (notas/3*0.55)+(examen*0.30)+(trabajo*0.15);

console.log("su calificacion es: ",calificacion); */


// Recibir una frase y devolver el numero de letras


/*
let frase=prompt("Ingresa una frase para contar caracteres");

console.log("La cantidad de caracteres que tiene su frase es: ",frase.length); */


// Recibir frase y transformarla a mayuscula`


/*
let mayus= prompt("Ingresa frase para transformala a mayuscula");

console.log(mayus.toUpperCase()); */

//Solicita el usuario y clave de inicio y realizar comparacion, si es correcta mostrar mensaje de bienvenido, de lo contrario error


/*
let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");
let contraseña2 = prompt("Vuelva a escribir su contraseña");

if (contraseña==contraseña2){
    console.log("Bienvenido ",usuario)
}else{
    console.log("Error contraseña incorrecta")
}; */


// Solicitar nota e informar si el estudiante aprobo o no la materia`

/*
let nota= parseInt(prompt("Ingresa una nota"));

if(nota>70){
    console.log("APROBO")
}else{
    console.log("REPROBO")
}; */


// Solicita tres notas y calcula definitiva y si aprobo o no`


/*
let notes = parseInt(prompt("Ingresa primera nota"));

notes = notes + parseInt(prompt("Ingresa segunda nota"));
notes = notes + parseInt(prompt("Ingresa tercera nota"));

prom= notes/3;

if(prom>=70){
    console.log("Has aprobado")
}else{
    if(prom>=40 && prom<70){
    console.log("Puedes recuperar")
    }else{
        console.log("Has reprobado")
    }
}; */


// En un sistema de automatizacion industrial, si la temperatura es mayor a 80 GeolocationCoordinates, el motor se apaga`


apagarse=80;


for(i=0;i<apagarse;i++){
    console.log("Motor funcionando a temperatura normal")
    document.write("Motor funcionando a temperatura normal, temperatura: ",i,"°<br>")
};

console.log("El motor se apago")
document.write("Temperatura maxima alcanzada se apagara el motor")


