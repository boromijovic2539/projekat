<?php
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Origin: *');
include("functions.php");
if(isset($_GET['id'])){
	echo deleteFarma(intval($_GET['id']));
}
?>