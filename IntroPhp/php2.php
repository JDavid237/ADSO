<?php

$miArray1 = [];

//agregar
$miArray1[] = "Aprendiz";
$miArray1[] = "Adso";
$miArray1[] = 2620031;
$miArray1[10] = "sena";

//borrar elemento
unset($miArray1[10]);

//modificar
$miArray1[1] = "Analisis y Desarrollo";
var_dump($miArray1);

$miArray = ["aprendiz", "adso", 2620031, "php", "javascript"];
var_dump($miArray);
$miArray2 = [1, 2, 3];

//cuenta los elemntos
echo '<br>Cantidad ' . count($miArray);
echo '<br>Cantidad ' . sizeof($miArray);//2 forma
//ordena el arreglo
echo '<br>ordena ';
sort($miArray);//rsort forma descendente
print_r($miArray);
//true o flase si existe o no
echo in_array('aprendiz', $miArray) . '<br>';

array_pop($miArray);//quita al final
array_push($miArray, 'html');//pone al final
array_unshift($miArray, 'primer elemento');//pone al inicio
array_shift($miArray);//quira al inicio
//combina do arreglos
print_r(array_merge($miArray, $miArray2));

for ($contador = 0; $contador < count($miArray); $contador++) {
    echo '<br>' . $miArray[$contador];
}

foreach ($miArray as $recorrido) {
    echo '<br>' . $recorrido;
}

//arreglos multidimencionales

$miMatriz = array(
    array("aprendiz", "adso", 2620031, "php", "javascript", "python"),
    array(1, 4, 5, 6, 78, 5),
    array(10, 20, 30, 40, 50, 60),

);

echo '<br>' . $miMatriz[1][3];

for ($contador = 0; $contador < count($miMatriz); $contador++) {
    for ($contador2 = 0; $contador2 < count($miMatriz[$contador]); $contador2++) {
        echo '<br>' . $miMatriz[$contador][$contador2];
    }
}

//arreglos asociativos

$miArray = array("nombre" => "Ana", "edad" => 15, "apellido" => "Perez");
echo '<br>' . $miArray["nombre"];

foreach ($miArray as $clave => $valor) {
    echo '<br>' . $clave . ": " . $valor;
}

$miArray = array("nombre" => array(10, 20, 30), "edad" => array(15, 16, 17), "apellido" => array("Perez", "Lopez", "Nose"));
echo '<br>';
//clase

class Persona
{
    //propiedades con modificador
    public $nombre;
    public $edad;
    public $apellido;
    private $clave;

    protected $direccion;
    //metodo magico constructor
    /*
    public function __construct(){
        $this->nombre="nombre clase con constructor <br>";
        $this->edad=10;
        $this->apellido= "Apellido Clase";
    }*/
    function __construct($nombres, $apellidos, $edades, $clave, $direccion)
    {
        $this->nombre = $nombres;
        $this->apellido = $apellidos;
        $this->edad = $edades;
        $this->clave = $clave;
        $this->direccion = $direccion;
    }

    //metodos creados por default public
    function correr()
    {
        echo 'estoy corriendo';
    }

    function cocinar($alimento)
    {
        echo 'estoy cocinando: ' . $alimento;
    }

    //metodos getter y setter para modificador privado
    function getCLave()
    {
        return $this->clave;
    }

    function setCLave($pass)
    {
        return $this->clave = $pass;
    }

    function getDireccion()
    {
        return $this->direccion;
    }
}

//instanciar clase con constructor

$objetoPersona = new Persona("tecnologo", "adso", 2620031, 123, "calle5");

echo $objetoPersona->nombre . '<br>';
echo $objetoPersona->edad . '<br>';
echo $objetoPersona->apellido . '<br>';

$objetoPersona2 = new Persona('pepe', 'Ruiz', 15, 234, "calle 3");
echo $objetoPersona2->nombre . '<br>';

$persona1 = new Persona('juan', 'perez', 12, 2311, "carrera 3");
$persona1->correr();
echo '<br>';
$persona2 = new Persona('Ana', 'Ramirez', 20, 023, "carrera 2");
$persona2->cocinar("arroz");
echo "<br>";

//modificar
var_dump($persona1);
$persona1->edad = 18;
var_dump($persona1);

//encaosulacion de modificador private no se puede cambiar tampoco acceder o imprimir
/*$persona1->clave=10;
   ehcho $persoba1->clave; */

//modificar el valor con set de la propiedad privada
$persona1->setClave(2304);
//Se acceder meidante get a la propiedad privada
echo '<br>' . $persona1->getCLave();

//propiedad protegida no se puede llamar fuera de la clase pero si usando get o set
/* echo $persona1->direccion */

echo '<br>' . $persona1->getDireccion();


class Persona2
{
    //propiedades
    private $nombre;
    protected $apellido;

    function saludar(){
        echo "hola clase";
        echo $this->apellido;
    }


} //esta es la clase padre o superclase

//clase hija o subclase
class Empleado extends Persona2
{



}

$empleado = new Empleado();

var_dump($empleado);



