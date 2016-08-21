<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");

if(isset($_POST['naziv']) && isset($_POST['tip']) && isset($_POST['cena']) && isset($_POST['glikemijski_indeks']) && isset($_POST['slika']) && isset($_POST['farma'])){
	
$naziv = $_POST['naziv'];
$tip = ($_POST['tip']);
$cena = ($_POST['cena']);
$glikemijski_indeks = ($_POST['glikemijski_indeks']);
$slika = ($_POST['slika']);
$farma = ($_POST['farma']);

dodajProizvod($naziv,$tip,$cena,$glikemijski_indeks,$farma,$slika);
}
?>