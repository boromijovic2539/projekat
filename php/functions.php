<?php
include("config.php");


function login($username, $password){
	global $conn;
	$rarray = array();
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = mysqli_query($conn,"UPDATE korisnik SET token='$id' WHERE username='$username'");
		$rarray['token'] = $id;
		$rarray['username'] = $username;
	} else{
		$rarray['error'] = "Invalid username/password";
	}
	return json_encode($rarray);
}


function checkLogin($username, $password){
	global $conn;
	$username = mysqli_real_escape_string($conn,$username);
	$password = md5(mysqli_real_escape_string($conn,$password));
	$result = mysqli_query($conn, "SELECT * FROM korisnik WHERE USERNAME='$username' AND PASSWORD='$password'");
	$num_rows = mysqli_num_rows($result);
	if($num_rows > 0)
	{
		return true;
	}
	else{	
		return false;
	}
}

function register($username, $password, $firstname, $lastname){
	global $conn;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Username already exists\r\n";
	}
	if(strlen($username) < 5){
		$errors .= "Username must have at least 5 characters\r\n";
	}
	if(strlen($password) < 5){
		$errors .= "Password must have at least 5 characters\r\n";
	}
	if(strlen($firstname) < 3){
		$errors .= "First name must have at least 3 characters\r\n";
	}
	if(strlen($password) < 3){
		$errors .= "Last name must have at least 3 characters\r\n";
	}
	if($errors == ""){
		$stmt = $conn->prepare("INSERT INTO korisnik (USERNAME, PASSWORD, firstName, lastName, admin) VALUES (?, ?, ?, ?, ?)");
		$admin="ne";
		$stmt->bind_param("sssss", $username, md5($password),  $firstname, $lastname, $admin);
		if($stmt->execute()){
		$id = sha1(uniqid());
			$result2 = $conn->prepare("UPDATE korisnik SET token=? WHERE USERNAME=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();
			$rarray['token'] = $id;
		}else{
			$rarray['error'] = "Database connection error";
		}
	} else{
		$rarray['error'] = json_encode($errors);
	}
	
	return json_encode($rarray);
}

function checkIfUserExists($username){
	global $conn;
	$result = mysqli_query($conn, "SELECT * FROM korisnik WHERE username='$username'");
	$num_rows = mysqli_num_rows($result);
	if($num_rows > 0)
	{
		return true;
	}
	else{	
		return false;
	}
}


function getProizvodi($tip){
	global $conn;
	$rarray = array();
	
	$result = mysqli_query($conn, "SELECT * FROM prozivod WHERE tip='".$tip."'");
	echo mysqli_error($conn);
	$num_rows = mysqli_num_rows($result);
	$proivodi = array();
		if($num_rows > 0)
		{
			while($row = mysqli_fetch_assoc($result)) {
				$proizvod = array();
				$proizvod['id'] = $row['ID_PROIZVOD'];
				$proizvod['naziv'] = $row['NAZIV'];
				$proizvod['cena'] = $row['CENA'];
				$proizvod['slika'] = $row['slika'];

				array_push($proivodi,$proizvod);
			}
		}
	$rarray['proizvodi'] = $proivodi;
	return json_encode($rarray);
}




function getSviProizvodi(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM prozivod JOIN farma ON prozivod.ID_FARMA = farma.ID_FARMA");
$num_rows = mysqli_num_rows($result);
$proizvodi = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$proizvod = array();
$proizvod['id_proizvod'] = $row['ID_PROIZVOD'];
$proizvod['id_farma'] = $row['NAZIV_FARMA'];
$proizvod['naziv'] = $row['NAZIV'];
$proizvod['tip'] = $row['TIP'];
$proizvod['cena'] = $row['CENA'];
$proizvod['glikemijski_indeks'] = $row['GLIKEMIJSKI_INDEKS'];
$proizvod['slika'] = $row['slika'];
array_push($proizvodi,$proizvod);
}
}
$rarray['proizvodi'] = $proizvodi;
return json_encode($rarray);
} 



function getSveFarme(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM farma");
$num_rows = mysqli_num_rows($result);
$farme = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$farma = array();
$farma['id_farma'] = $row['ID_FARMA'];
$farma['naziv'] = $row['NAZIV_FARMA'];
$farma['podneblje'] = $row['PODNEBLJE'];
array_push($farme,$farma);
}
}
$rarray['farme'] = $farme;
return json_encode($rarray);
} 




function dodajProizvod($naziv, $tip, $cena, $glikemijski_indeks, $farma, $slika){
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("INSERT INTO prozivod (ID_FARMA, NAZIV, TIP, CENA, GLIKEMIJSKI_INDEKS, slika) VALUES (?, ?, ?, ?, ?, ?)");
	$stmt->bind_param("ssssss", $farma, $naziv, $tip, $cena, $glikemijski_indeks, $slika);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
}


function dodajFarmu($naziv,$podneblje,$adresa,$telefon){
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("INSERT INTO farma (NAZIV_FARMA, PODNEBLJE, adresa, kontakt) VALUES (?, ?, ?, ?)");
	$stmt->bind_param("ssss", $naziv, $podneblje, $adresa, $telefon);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
}


function getSviKorisnici(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM korisnik");
$num_rows = mysqli_num_rows($result);
$korisnici = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$korisnik = array();
$korisnik['id_korisnik'] = $row['ID_KORISNIK'];
$korisnik['username'] = $row['USERNAME'];
$korisnik['firstName'] = $row['firstName'];
$korisnik['lastName'] = $row['lastName'];
$korisnik['admin'] = $row['admin'];
array_push($korisnici,$korisnik);
}

$rarray['korisnici'] = $korisnici;
return json_encode($rarray);
} 
}

function deleteProizvod($id){
	global $conn;
	$rarray = array();
	
		$result = $conn->prepare("DELETE FROM prozivod WHERE ID_PROIZVOD=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	
	return json_encode($rarray);
}

function deleteFarma($id){
	global $conn;
	$rarray = array();
	
		$result = $conn->prepare("DELETE FROM farma WHERE ID_FARMA=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	
	return json_encode($rarray);
}

function deleteKorisnik($id){
	global $conn;
	$rarray = array();
	
		$result = $conn->prepare("DELETE FROM korisnik WHERE ID_KORISNIK=?");
		$result->bind_param("i",$id);
		$result->execute();
		$rarray['success'] = "Deleted successfully";
	
	return json_encode($rarray);
}


function getRecepti(){
global $conn;
$rarray = array();

$result = mysqli_query($conn, "SELECT * FROM recept");
$num_rows = mysqli_num_rows($result);
$recepti = array();
if($num_rows > 0)
{
while($row = mysqli_fetch_assoc($result)) {
$recept = array();
$recept['id_recept'] = $row['ID_RECEPT'];
$recept['naziv_recepta'] = $row['NAZIV_RECEPTA'];
$recept['opis_pripreme'] = $row['OPIS_PRIPREME'];
$recept['slika'] = $row['slika'];
array_push($recepti,$recept);
}
}
$rarray['recepti'] = $recepti;
return json_encode($rarray);
} 




?>