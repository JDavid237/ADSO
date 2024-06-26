<?php

//Imprimir
echo "Hola ADSO <br>";
print "hola con funcion print <br>";

$miVariable = "hola adso";
$miVariable2 = 2620031;
$miVariable3 = 3.14;
$miVariable4 = true; // 1 verdadero 0 o nada falso

echo "$miVariable <br>";
echo getType($miVariable2);//tipo de variable
echo getType($miVariable3);

//primera forma de constante
define("MICONSTANTE2", 0.15);
echo "<br" . MICONSTANTE2;

//segunda forma de constante
const MICONSTANTE = 0.19;
echo "<br>" . MICONSTANTE . "<br>";

$ficha = 2620031;
//mostrar comillas
echo "hola \"aprendices\" de adso $ficha<br>";
echo 'hola "aprendices" de adso $ficha <br>';

$num1 = 10;
$clave = null;
$numero = rand(1, 10);

print_r($num1 . "<br>");
echo is_numeric($num1) . "<br>";//si es numero
echo isset($clave);//si esta vacio
echo $numero . "<br>";

//longitud de caracteres
$cadena = "hola aprendices";
echo strlen($cadena) . "<br>";

//extraer desde una posicion
$cadena = "jaguar you fine";
echo substr($cadena, 2, 7) . "<br>";
echo strpos($cadena, "you") . "<br>";//caracteres antes del string
echo strrev($cadena) . "<br>"; //reversa
echo trim($cadena) . "<br>"; // sin espacios
echo strtoupper($cadena) . "<br>";//mayusculas
echo strtolower($cadena) . "<br>";//minusculas

$cadena = "jaguar,you,fain,tenkiu";
print_r(explode(",", $cadena));//separa mediante un caracter creando array

$numb = (int) "15"; //casteo cambiar string a int

$num1 = 3;
$num2 = 5;

if ($num1 < $num2) {
    echo "<br>es menor <br>";
} else {
    echo "es mayor";
}

//Operador ternario

echo ($num1 > 2 ? "mayor<br>" : "menor");
switch ($num1) {
    case 1:
        echo "Es lunes <br>";
        break;
    case 2:
        echo "Es martes <br>";
        break;
    case 3:
        echo "Es miercoles <br>";
        break;
    default:
        echo "No es un valor valido <br>";
        break;
}

$contador = 0;
while ($contador <= 5) {
    echo "ciclo while vuelta: " . $contador . "<br>";
    $contador++;
}

do {
    echo "ciclo do while vuelta: " . $contador . "<br>";
    $contador--;
} while ($contador >= 1);

for ($i = 0; $i < 5; $i++) {
    echo "ciclo for vuelta: $i<br>";
}

//funciones
function sumar()
{
    return 2 + 4;
}

$numero = sumar();
echo "variable numero: $numero";

//con parametros
function multiplicar($numero, $numero2)
{
    return $numero * $numero2;
}

echo '<br>' . multiplicar(10, 2);

function division($num, $num2)
{
    $resultado = $num / $num2;
    return $resultado;
}

echo '<br>' . division(9, 3);

//fundion dentro de otra funcion

function descuento(){
    $numSuma=sumar();
    return $numSuma-1;

}

echo '<br>Descuento: '.descuento();

