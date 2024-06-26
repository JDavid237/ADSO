<?php

//la clase tiene el mismo nombre del archivo
class ConectorBd
{

    private $host = "localhost";//127.0.0.1
    private $userBd = "root";
    private $passwordBd = "";
    private $database = "producto";
    private $conexion; //guarda conexion

    //metodo
    public function __construct()
    {
        $this->conexion = new mysqli($this->host, $this->userBd, $this->passwordBd, $this->database);
    if ($this->conexion->connect_error) {
            echo $this->conexion->connect_error;
            die();
    }
    //no es necesario solo es para comprobar
    else {
        echo "si hay conexion";
    }
}

//insert delete update
public function consultaSinRetorno($cadenaSql){
    $this->conexion->query($cadenaSql);
}

// select
public function consultaConRetorno($cadenaSql){
    return $this->conexion->query($cadenaSql);
}

//cierra bd
public function desConectarse(){
    $this->conexion->close();
}
}