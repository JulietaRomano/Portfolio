<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0  \r\n";
$header .= "Content-type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su email es " . $mail . " \r\n";
$message .= "Su numero de contacto es " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'romanojulietacarolina@gmail.com';
$asunto = 'Portfolio';

header("Location:index.html");
?>
