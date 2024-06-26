<?php

//Crear una clase llamada libro con sus respectivas propiedades y crear un cosntructor que tome parametros poara despues instanciar objetos

class Libro
{

    private $titulo;
    private $autor;
    private $genero;

    function __construct($titulo, $autor, $genero)
    {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->genero = $genero;
    }
    function getTitulo()
    {
        return $this->titulo;
    }
    function getGenero()
    {
        return $this->genero;
    }

    function getAutor()
    {
        return $this->autor;
    }

    function setTitulo($titulo)
    {

        return $this->titulo = $titulo;
    }

    function setGenero($genero)
    {
        return $this->genero = $genero;
    }

    function serAutor($autor)
    {
        return $this->autor = $autor;
    }
}

$libro1 = new libro("El quijote", "Cervantes", "Fantasia");

echo $libro1->getTitulo() . '<br>';
echo $libro1->getAutor() . '<br>';
echo $libro1->getGenero() . '<br>';

echo $libro1->setGenero('Locura');

//Crear una clase calculadora con dos propiedades y con las operaciobes aritmetricas basicas

class Calculadora
{

    public $numero1;
    public $numero2;

    function __construct($numero1, $numero2)
    {
        $this->numero1 = $numero1;
        $this->numero2 = $numero2;

    }
    function resultados()
    {
        $sumar = $this->numero1 + $this->numero2;
        $restar = $this->numero1 - $this->numero2;
        $multiplicar = $this->numero1 * $this->numero2;
        $dividir = ($this->numero2 != 0) ? $this->numero1 / $this->numero2 : "No es posible dividir por cero";

        return array(
            "suma" => $sumar,
            "resta" => $restar,
            "multiplicacion" => $multiplicar,
            "division" => $dividir
        );
    }
}



$calculadora1 = new Calculadora(10, 5);
$resultado = $calculadora1->resultados();

echo '<br>' . $resultado['suma'];
echo '<br>' . $resultado['resta'];
echo '<br>' . $resultado['multiplicacion'];
echo '<br>' . $resultado['division'];

//Crear una clase llamada Automovil con distintas propiedades y un constructor como parametro instanciar objetos

class AutoMovil
{

    private $color;
    private $marca;
    private $cantidadRuedas;
    private $capacidadPasajeros;
    private $tipoCombustible;
    private $capacidadTanque;

    function __construct($color, $marca, $cantidadRuedas, $capacidadPasajeros, $tipoCombustible, $capacidadTanque)
    {
        $this->color = $color;
        $this->marca = $marca;
        $this->cantidadRuedas = $cantidadRuedas;
        $this->capacidadPasajeros = $capacidadPasajeros;
        $this->tipoCombustible = $tipoCombustible;
        $this->capacidadTanque = $capacidadTanque;
    }

    function getColor()
    {
        return $this->color;
    }

    function getMarca()
    {
        return $this->marca;
    }

    function getCantidadRuedas()
    {
        return $this->cantidadRuedas;
    }

    function getCapacidadPasajeros()
    {
        return $this->capacidadPasajeros;
    }

    function getTipoCombustible()
    {
        return $this->tipoCombustible;
    }
    function getCapacidadTanque()
    {
        return $this->capacidadTanque;
    }

    function setColor($color)
    {
        return $this->color = $color;
    }

    function setMarca($marca)
    {
        return $this->marca = $marca;
    }

    function serCantidadRuedas($cantidadRuedas)
    {
        return $this->cantidadRuedas = $cantidadRuedas;
    }

    function setCapacidadPasajeros($capacidadPasajeros)
    {
        return $this->capacidadPasajeros = $capacidadPasajeros;
    }

    function setTipoCombustible($tipoCombustible)
    {
        return $this->tipoCombustible = $tipoCombustible;
    }

    function setCapacidadTanque($capacidadTanque)
    {
        return $this->capacidadTanque = $capacidadTanque;
    }
}

$automovil1 = new AutoMovil('rojo', 'ferrari', 4, 2, "energia nuclear", 500);

echo '<br>' . $automovil1->getColor();
echo '<br>' . $automovil1->getMarca();
echo '<br>' . $automovil1->getCantidadRuedas();
echo '<br>' . $automovil1->getCapacidadPasajeros();
echo '<br>' . $automovil1->getTipoCombustible();
echo '<br>' . $automovil1->getCapacidadTanque();

echo '<br>' . $automovil1->setColor("azul");