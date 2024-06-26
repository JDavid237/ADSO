<?php
$clienteController = new ClienteController();
    if(isset($_POST["crear"])){
        echo "Se creo el cliente con el boton";

        $numIdentificacion= $_POST["numeroIdentificacion"];
        
        $nombreCompania= $_POST["nombreCompania"];
        $nombreContacto= $_POST["nombreContacto"];
        $direccion= $_POST["direccion"];
        $email= $_POST["email"];
        $telefono= $_POST["telefono"];
        $telefono2= $_POST["telefono2"];
        $clave= $_POST["clave"];
        
        $clienteController->crear($numIdentificacion, $nombreCompania, $nombreContacto, $direccion, $email, $telefono, $telefono2, $clave);

        echo "Se creo el cliente con exito.";
        
        header("location:?vista=cliente/inicio");
    }


      

?>



<div class="row">
    <form class="col s12" method="post">
      <div class="row">
        <div class="input-field col s6">
          <input id="numeroIdentificacion" name="numeroIdentificacion" type="text" class="validate" required>
          <label for="numeroIdentificacion">Numero Identificacion</label>
        </div>
        <div class="input-field col s6">
          <input id="nombreCompania" name="nombreCompania"  type="text" class="validate"required>
          <label for="nombreCompania">Nombre Compañia</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="nombreContacto" name="nombreContacto"  type="text" class="validate"required>
          <label for="nombreContacto">Nombre Contacto</label>
        </div>
        <div class="input-field col s6">
          <input id="direccion" name="direccion"  type="text" class="validate"required>
          <label for="direccion">Direccion</label>
        </div>
      </div> <div class="row">
        <div class="input-field col s6">
          <input  id="email" name="email" type="text" class="validate"required>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="telefono" name="telefono"  type="text" class="validate"required>
          <label for="telefono">Telefono</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="telefono2" name="telefono2" type="text" class="validate"required>
          <label for="telefono2">Telefono 2</label>
        </div>
        <div class="input-field col s6">
          <input id="clave" name="clave" type="text" class="validate"required>
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
        