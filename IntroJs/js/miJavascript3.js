// ciclo while

// centinela
estado = true;
while (estado) {
  console.log("Bienvenido ");
  estado = false;
}

// contador

let contador = 1;

while (contador <= 5) {
  console.log("Ciclo while posicion: " + contador);
  contador = contador + 1;
}

contador = 5;
while (contador > 0) {
  console.log("Ciclo while posicion: " + contador);
  contador--;
}

// ciclo do while

contador = 1;
do {
  console.log("entra una vez: ", contador);
  contador++;
} while (contador < 5);


for(contador=1;contador<5;contador++){
  console.log("ciclo for: "+contador);
};

// template string`

console.log(`template string ${contador}`);

// operador ternario`

estado= true;

console.log(`${estado ? "activo" : "inactivo"}`);

// array

let aprendices = ["javier", "gabriel", "yuritza", "mariana"];


console.log(aprendices[1]);

for(contador=0;contador<aprendices.length;contador++){
    console.log(aprendices[contador]);
};

// agregar
aprendices.push("jan carlos");
aprendices.unshift("julian");

// borrar`
aprendices.pop();
aprendices.shift();

console.log(aprendices);

//Recorrer todos los elementos del arreglo

aprendices.forEach(aprendiz=>{
  console.log(aprendiz);
});

//Indice objeto
for(const indice in aprendices){
  console.log(indice);
};

//Valor objeto
for(const valor of aprendices){
  console.log(valor);
};

//break para romper bucles
for(contador=0;contador<aprendices.length;contador++){
  if(contador==1){
  console.log(aprendices[contador]);
  break;
  };
};

//continue para no hacerlo y continuar al siguiente
for(contador=0;contador<aprendices.length;contador++){
  if(contador==2){
  console.log(aprendices[contador]);
  continue;
  };
};
