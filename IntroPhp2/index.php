<?php require_once ("./config/ConectorBd.php"); require_once ("./models/Cliente.php"); require_once
    ("./config/Enrutador.php"); require_once ("./controllers/CLienteController.php"); ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>Document</title>

    </head>

    <body>
        <main class="container">
            <?php
            $conectarse = new ConectorBd();
            $clientes = new Cliente();

            var_dump($_GET);

            $enrutador = new Enrutador();

            if (isset($_GET["vista"])) {
                $enrutador->CargarVista($_GET["vista"]);
            } else {
                echo "Me carga el index principal <br>";
                ?>
                <a href="index.php?vista=cliente/inicio">Lista de clientes</a>
                <?php
            }
            ?>


            <div class="row">
                <form class="col s12" method="post">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="numeroIdentificacion" name="numeroIdentificacion" type="text" class="validate"
                                required>
                            <label for="numeroIdentificacion">Numero Identificacion</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="nombreCompania" name="nombreCompania" type="text" class="validate" required>
                            <label for="nombreCompania">Nombre Compañia</label>
                        </div>
                    </div>
            </div>
            </form>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>

    </html>