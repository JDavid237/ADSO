<?php
$data = $_GET["data"];
$data2 = $_GET["data2"];
$data3 = $_GET["data3"];
$data4 = $_GET["data4"];
$data5 = $_GET["data5"];


//realizar programa que calcule el indice de cosecha de un cultivo en funcion de los frutos recolectados y la cantidad

/*
$indice= ($data/$data2)*1.0*100;
    
echo "El indice de cosecha es $indice%"; */

//Solicitar notas y en base a distintos tipos de notas dar su calificacion de 1 a 10

/*
$prom= ($data+$data2+$data3)/3;

$calificacion= ($prom*0.55)+($data2*0.30)+($data3*0.15);
$calificacion= round($calificacion,1);

echo "su calificacion es: $calificacion"; */

//escribir frase y devolver numero de letras

/*
$letra= strlen($data);

echo "El numero de letras es: $letra"; */

//escribir frase y transformarla a mayusculas

$mayus=strtoupper($data);

echo "Estas letras ahora son mayusculas: $mayus";
 



