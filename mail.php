<?php

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$subject = "Wiadomość ze strony blizniak-szklo.com";
$to = "marcin@blizniak.com";

$txt = "Wiadomość od:  " . $name . "\r\n" . "Firma:  " . $company . "\r\n" . "Numer telefonu:  " . $phone . "\r\n" . "Email:  " . $email . "\r\n" . "\r\n" . "Treść wiadomości:  " . $message;

// $txt = "<html>
//         <head>
//         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
//             <title></title>
//         </head>
//         <body>";
// $txt .= "<p><span>Wiadomość od: </span style='color: #232561;>" . $name . "</p><br>";
// $txt .= "<p><span>Firma: </span style='color: #232561;>" . $company . "</p><br>";
// $txt .= "<p><span>Telefon: </span style='color: #232561;>" . $phone . "</p><br>";
// $txt .= "<p><span>Wiadomość od: </span style='color: #232561;>" . $email . "</p><br>";
// $txt .= "<p><span>Treść wiadomości: </span style='color: #232561;>" . $message . "</p><br>";

// $txt .= "</body>";
// $txt .= "</html>";

// $headers = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
  header("Location: /index.html?mail_status=sent");
} else {
  header("Location: /index.html?mail_status=error");
}

