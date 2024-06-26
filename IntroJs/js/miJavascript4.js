//Funcion
//No parametros no retorno
function sumar() {
  let num1 = 5;
  let num2 = 2;
  console.log(num1 + num2);
}

//llamarla

//Valor indefinido
let rta = sumar();
console.log(rta);

//funcion con retorno y sin parametros

function sumar2() {
  let num1 = 5;
  let num2 = 2;
  return num1 + num2;
}

console.log(sumar2());
rta = sumar2();
console.log(rta);

//funcion con parametros

function sumar3(num1, num2) {
  let rta = num1 + num2;
  return rta;
}

console.log(sumar3(2, 3));

//funciones Expresada - anonima

let respuesta = function () {
  return 8 + 3;
};

console.log(respuesta());

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(numeroAleatorio(1, 8));

//arrow function

let numero2 = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(numero2(5, 10));

//simplifica el codigo

let numero3 = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(numero3(100, 300));

//objetos

let aprendiz = {
  nombre: "pepe",
  edad: 15,
  activo: true,
  deportes: ["futbol", "baseball", "basket"],
  otros: {
    cursos: ["php", "javascript", "java"],
    favoritos: {
      comida: ["pollo", "pizza", "hotdog"],
      hibbies: "leer",
    },
  },
};

//Read
console.log(aprendiz.nombre);
console.log(aprendiz["nombre"]);
console.log(aprendiz.otros.cursos[1]);

//Create
aprendiz.apellido = "Diaz";

//Update
aprendiz.edad = 18;

//Delete
delete aprendiz.activo;
console.log(aprendiz);

console.log(aprendiz.hasOwnProperty("nombre"));
console.log(aprendiz.nombres2?.materias);

//Objetos y metodos
let aprendiz2 = {
  nombre: "Juan",
  edad: 20,
  activo: true,

  saludar: function () {
    console.log("Hola y Adios");
  },

  saludar2() {
    console.log("Saludando aprendiz");
  },

  //getter y setter
  get obtenerNombre() {
    return this.nombre;
  },

  set asignarNombre(name) {
    this.nombre = name;
  },
};

console.log(aprendiz2);
aprendiz2.saludar();
aprendiz2.saludar2();

console.log(aprendiz2.obtenerNombre);
aprendiz2.asignarNombre="Ana";
console.log(aprendiz2.obtenerNombre);

for(item in aprendiz2){
  console.log(item);
  console.log(aprendiz2[item])
}
