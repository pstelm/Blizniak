<?php

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$subject = "Wiadomość ze strony blizniak-szklo.com";
// $to = "marcin@blizniak.com";
$to = "plnstlmch@gmail.com";

$txt = "Wiadomość od:  " . $name . "\r\n" . "Firma:  " . $company . "\r\n" . "Numer telefonu:  " . $phone . "\r\n" . "Email:  " . $email . "\r\n" . "\r\n" . "Treść wiadomości:  " . $message;

$txt_with_styling = '<html><body>';
$txt_with_styling .= '<table rules="all" style="border: 1px solid; border-color: #ddd;" cellpadding="10">';
$txt_with_styling .= '<tr><td style="background: #f2f2f2;"><strong>Wiadomość od:</strong> </td><td>' . $name . '</td></tr>';
$txt_with_styling .= '<tr><td style="background: #f2f2f2;"><strong>Firma:</strong> </td><td>' . $company . '</td></tr>';
$txt_with_styling .= '<tr><td style="background: #f2f2f2;"><strong>Email:</strong> </td><td>' . $email . '</td></tr>';
$txt_with_styling .= '<tr><td style="background: #f2f2f2;"><strong>Numer telefonu:</strong> </td><td>' . $phone . '</td></tr>';
$txt_with_styling .= '<tr><td style="background: #f2f2f2;"><strong>Treść wiadomości:</strong> </td><td>' . $message . '</td></tr>';
$txt_with_styling .= '</table>';
$txt_with_styling .= '</body></html>';

$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$mail_status = mail($to, $subject, $txt_with_styling, $headers);

if ($mail_status) {
  header("Location: /index.html?mail_status=sent");
} else {
  header("Location: /index.html?mail_status=error");
}