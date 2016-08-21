<?php
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Origin: *');
include("functions.php");
if(isset($_GET['id'])){
	echo deleteProizvod(intval($_GET['id']));
}
?>