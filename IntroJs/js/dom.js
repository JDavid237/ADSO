console.log(document);

let mih1 = document.getElementById("miH1"); //1forma
let h1 = document.querySelector("#miH1"); //2forma
let h1_2 = document.querySelector(".claseTitulo");
let h1_3 = document.getElementsByClassName("clasetitulo"); //por lcase

console.log(mih1, h1, h1_2, h1_3);

//propiedades
console.log(mih1.textContent); //solo el contenido textual del elemento
console.log(mih1.style); //solo los estilos del elemento
console.log(mih1.id); //extraer el id
console.log(mih1.className); //extraer la clase
console.log(mih1.classList); //extrater la clase como si fuera objeto, arreglo

//manipulacion
mih1.textContent = "texto modificado desde js"; //modificar el texto que aparece en el NAVEGADOR
mih1.style.background = "blue"; //modificar los estilos css del documento dek navegador
mih1.classList.add("mifuente"); // añadir una clase que ya existia en el elemento del documento del nav

// mas selectores
mih1 = document.querySelector("h1"); //buscara los h1 del documento y seleccionara el primero
let mish1 = document.querySelectorAll("h1"); // este si selecciona todos los elementos
console.log(mih1);
console.log(mish1);

// eventos

document.addEventListener("click", () => {
  console.log("has dado click");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("has dado click");
}); // el dommloaded es para que cargue todos los documentos del script

let miboton = document.querySelector(".btn");
let miparrafo = document.querySelector(".parrafo");
miboton.addEventListener("click", function () {
  miparrafo.textContent = "texto desde js";
});
