<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST'); 
if(isset($_POST['submit'])){
				$ime = $_POST['tvojeime'];
				
				$to = "anic.org.korisnik@gmail.com";
				$subject = $_POST['naslov'];
				$body = $_POST['poruka'];
				$pass = "diduleorganic";
	$from = "anic.org.korisnik@gmail.com";			
require('class.phpmailer.php');


	$mail = new PHPMailer();
	

	$rarray = array();
	$mail->IsSMTP(); 
	$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
											   // 1 = errors and messages
											   // 2 = messages only
	$mail->SMTPAuth   = true;                  // enable SMTP authentication
	$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
	$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
	$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
	$mail->Username   = $from;  // GMAIL username
	$mail->Password   = $pass;            // GMAIL password

	$mail->SetFrom($to, $ime);

	$mail->Subject = $subject;
	$mail->MsgHTML($body);

	$address = $to;
	$mail->AddAddress($address, "user2");

	if(!$mail->Send()) {
		
	   $rarray['error'] = "Database connection error";
	} else {
	  $rarray['success'] = "Successfully sent";
	}
	return json_encode($rarray);
}


?>

