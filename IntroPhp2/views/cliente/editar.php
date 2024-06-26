<?php

require_once("./controllers/clienteController.php");
$clienteController= new ClienteController();
$url=explode("/",$_GET['vista']);
$clienteController->listarPorId($url[2]);

if (isset($_POST["editar"])){
        echo "Preciono el boton editar";
        $id=$url[2];
        $numIdentificacion= $_POST["numeroIdentificacion"];
        $nombreCompania= $_POST["nombreCompania"];
        $nombreContacto= $_POST["nombreContacto"];
        $direccion= $_POST["direccion"];
        $email= $_POST["email"];
        $telefono= $_POST["telefono"];
        $telefono2= $_POST["telefono2"];
        $clave= $_POST["clave"];
        
        $clienteController->editar($id,$numIdentificacion, $nombreCompania, $nombreContacto, $direccion, $email, $telefono, $telefono2, $clave);

        header("location:?vista=cliente/inicio");
    }
    
    $datos = $clienteController->listarPorId($url[2]);

?>

<div class="row">
    <h2>Editar cliente</h2>
    <form class="col s12" method="post">
      <div class="row">
        <div class="input-field col s6">
          <input id="numeroIdentificacion" value="<?php echo $datos["numIdentificacion"]?>" name="numeroIdentificacion" type="text" class="validate" required>
          <label for="numeroIdentificacion">Numero Identificacion</label>
        </div>
        <div class="input-field col s6">
          <input id="nombreCompania" value="<?php echo $datos["nombreCompania"]?>" name="nombreCompania"  type="text" class="validate"required>
          <label for="nombreCompania">Nombre Compañia</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="nombreContacto" value="<?php echo $datos["nombreContacto"]?>" name="nombreContacto"  type="text" class="validate"required>
          <label for="nombreContacto">Nombre Contacto</label>
        </div>
        <div class="input-field col s6">
          <input id="direccion" value="<?php echo $datos["direccion"]?>"  name="direccion"  type="text" class="validate"required>
          <label for="direccion">Direccion</label>
        </div>
      </div> <div class="row">
        <div class="input-field col s6">
          <input  id="email" name="email" value="<?php echo $datos["email"]?>" type="text" class="validate"required>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="telefono" value="<?php echo $datos["telefono"]?>"  name="telefono"  type="text" class="validate"required>
          <label for="telefono">Telefono</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="telefono2" value="<?php echo $datos["telefono2"]?>"  name="telefono2" type="text" class="validate"required>
          <label for="telefono2">Telefono 2</label>
        </div>
        <div class="input-field col s6">
          <input id="clave" value="<?php echo $datos["clave"]?>" name="clave" type="text" class="validate"required>
          <label for="clave">Clave</label>
        </div>
      </div>
     
      <div class="row">
        <div class="col s6">
            <button type="submit" class="btn green" name="crear">Crear</button>
        </div>
      </div>
    </form>
  </div>