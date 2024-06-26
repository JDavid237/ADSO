//Programa que imprime los numeros del 1 al 10

/*
contador = 1;
while (contador <= 10) {
  console.log("Numero: ", contador);
  contador++;
}*/

//Programa que imprima los numeros pares del 2 al 100

/*
contador = 1;
while (contador <= 100) {
  par = contador % 2;
  if (par == 0) {
    console.log("Par: ", contador);
  }
  contador++;
}; */

// programa que imprima los numeros multiplos de 3 del 3 al 100`

/*
contador = 1;
while (contador <= 100) {
  tres = contador % 3;
  if (tres == 0) {
    console.log("Numero: ", contador);
  }
  contador++;
}; */

// Programa que imprima los numeros de la serie fibonacci dado un limite por el usuario`

/*
let limite = parseInt(prompt("Ingresa un numero limite"));
let numero1=0;
let numero2=1;
let suma;

while(numero1<=limite){
    console.log(numero1);
    suma=numero1+numero2;
    numero2 = numero1;
    numero1 = suma;
}; */

//Programa que lee nota de un estudiante y repite la lectura mientras la nota no se valida, se valoda entre 0 y 5

/*
let nota=parseInt(prompt("Ingresa una nota entre 1 y 5"));

while(nota>5 || nota<1){
    nota=parseInt(prompt("Por favor ingresa nota entre 1 y 5 no otros numeros"));
};

console.log("Bienvenido, tu nota es: ",nota); */

//Leer un numero y presejtar la tabla de multiplicar de ese numero entre 1 y 10

/*
let num=parseInt(prompt("Ingresa un numero"));
tabla=1;
while(tabla<=10){
    console.log(num,"*",tabla,"=",num*tabla);
    tabla++;
}; */

//Imprime numeros 1 al 10

/*
for(num=1;num<=10;num++){
    console.log("Numero: ",num);
} */

// Imprimir numeros pares del 2 al 100

/*
for(num=1;num<=100;num++){
    par = num % 2;
    if (par == 0) {
      console.log("Par: ", num);
    }
}; */

// Imprimir numeros divisibles por 3 hasta el 100

/*
for(num=1;num<=100;num++){
    par = num % 3;
    if (par == 0) {
      console.log("Par: ", num);
    }
}; */

//Imprimir numeros serie de fibonacci. dando un limite por el usuario

/*
let limite = parseInt(prompt("Ingresa un numero limite"));
let numero1;
let numero2=1;
let suma;

for(numero1=0;numero1<=limite;numero1++){
    console.log(numero1);
    suma=numero1+numero2;
    numero2 = numero1;
    numero1 = suma-1;
}; */

// Leer nota y repetir mientras la nota no sea valida`

/*
let nota;

for (;;) {
  nota = parseInt(prompt("Ingresa una nota entre 1 y 5"));
  if (nota >= 1 && nota <= 5) {
    break;
  } else {
    console.log("Por favor ingresa una nota entre 1 y 5.");
  }
}; 

console.log("Bienvenido, tu nota es:", nota);  */

//Leer un numero y presentar la tabla de multiplicar del 1 al 10

/*
let num = parseInt(prompt("Ingresa un numero"));
for (tabla = 1; tabla <= 10; tabla++) {
    console.log(num,"*",tabla,"=",num*tabla);
}; */


//Leer un password de ingreso y mostrar mensaje con maximo 3 intentos

/*
let pass=prompt("Ingresa una contraseña");
let pass2=prompt("vuelve a ingresar la contraseña")

for(contador=3;contador>0;contador--){
    if(pass==pass2){
      console.log("Bienvenido");
      break;
    }else{
      pass2=prompt(`Incorrecto, vuelve a intentarlo. Intentos restantes: ${contador}`);
    };
};

if(contador==0){
  console.log("No tienes mas intendos")
}; */


//Juego de piedra papel y tijera

/*
let num=parseInt(prompt("Ingresa un numero entre 1 y 3, siendo 1:piedra, 2:papel y 3:tijeras"))

while(num<1 || num>3){
  num=parseInt(prompt("Ingresa un numero entre 1 y 3, siendo 1:piedra, 2:papel y 3:tijeras"));
};

let bot= Math.floor(Math.random()*4);

if(num==bot){
  console.log("Empate");
}else if(num==2 && bot==3){//papel y tijeras
  console.log("Perdiste, tu sacaste papel y el bot tijera", );
}else if(num==1 && bot==2){ //piedra y papel
  console.log("Perdiste, tu sacaste piedra y el bot papel");
}else if(num==3 && bot==1){ //tijeras y piedra
  console.log("Perdiste tu sacaste tijeras y el bot piedra")
}else if(num==2 && bot==1 ){ //papel y piedra
  console.log("Ganaste, tu sacaste papel y el bot piedra");
}else if(num==3 && bot==2){//tijeras y papel
  console.log("Ganaste, tu sacaste tijeras y el bot papel");
}else if(num==1 && bot==3){//piedra y tijeras
  console.log("Ganaste, tu sacaste piedra y el bot tijeras");
}; */

//Carrito de compras

let elemento=[];
let confirmar=false;

for(contador=0;confirmar==false;contador++){
  elemento[contador]=prompt("Ingresa una lista de compras");
    if(contador==0){
      console.log("Esta es tu lista de compras")
    };
    while(elemento[contador]==""){
      elemento[contador]=prompt("El articulo no puede estar vacio, ingresa uno valido");
    };

    console.log(elemento[contador]);
    confirmar=confirm("Deseas terminar tu compra?");
     
};

console.log("Gracias por su compra, compraste un total de: ",contador," articulos")



