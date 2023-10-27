<?php  
$nombre = "Pedro";
$subtitulo = "<h2 style='color: #f00'>Subtitulo</h2>";
$a = 5;
$b = 2;
if($b > $a){
    $respuesta = "Es mayor";
}else{
    $respuesta = "Es menor";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>HOLA <?php echo $nombre; ?></h1>
    <?php echo $subtitulo; ?>
    <h2><?php echo $respuesta; ?></h2>

    <?php include 'aaa.php'; ?>
</body>
</html>