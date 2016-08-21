<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
header('Access-Control-Allow-Methods: POST');  
include("functions.php");

if(isset($_POST['tip'])){
	
$tip = $_POST['tip'];
echo getProizvodi($tip);

}

?>