<?php 

$nombre = "Pedro";
$apellido = "Messi";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <?php include "menu.php"; ?>
    <h1>PHP</h1>
    <h2><?php echo $nombre . " " . $apellido; ?></h2>
    <?php 
        include "home/sec1.php"; 
        include "home/sec2.php";
        
    ?>
</body>
</html>