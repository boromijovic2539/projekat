<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");
function unesi(){
if(isset($_POST['naziv']) && isset($_POST['tip']) && isset($_POST['cena']) && isset($_POST['glikemijskiIndeks'])){
 
$naziv = $_POST['naziv'];
$tip = $_POST['tip'];
$cena =intval( $_POST['cena']);
$glikemijskiIndeks = $_POST['glikemijskiIndeks'];

echo unosProizvoda($naziv, $tip, $cena, $glikemijskiIndeks);
}
}

?>