<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");

if(isset($_POST['naziv']) && isset($_POST['podneblje']) && isset($_POST['adresa']) && isset($_POST['telefon'])){
	
$naziv = $_POST['naziv'];
$podneblje = ($_POST['podneblje']);
$adresa = ($_POST['adresa']);
$telefon = ($_POST['telefon']);

dodajFarmu($naziv,$podneblje,$adresa,$telefon);
}
?>