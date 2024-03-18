<?php 
$user_tel = htmlspecialchars($_POST['usertel']);

$token = "7014377967:AAHkC7zMPbGnL8Vj8Q4yrXnatuBme_GirPI";
$chat_id = "-4121775222";

$formData = array(
	"Телефон: " => $user_tel
);

foreach($formData as $key => $value) {
	$text .= $key . urlencode($value) . "%0A" ;
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}", "r");

if ($sendToTelegram) {
	echo "Success";
} else {
	echo "Error";
}
?>
