<?php

    $name = $_POST["name"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    $body = "Nombre: " . $name . "<br>Apellido" . $lastname . "<br>Correo: " .  $email . "<br>Teléfono" . $phone;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    $mail = new PHPMailer(true);

    try{
        //server settings
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'avtrz.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@avtrz.io';
        $mail->Password = 'Cholula1234';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        //recipients
        $mail->setFrom('steelco_84@hotmail.com',$name);
        $mail->addAddress('diego1@avtrz.io');

        //content
        $mail->isHTML(true);
        $mail->Subject = 'AVTRZ Contact';
        $mail->Body = $body;

        $mail->send();
        echo '<script>
                alert("El mensaje se envió correctamente");
                window.history.go(-1);
                </script>';
    } catch (Exception $e){
        echo 'Hubo un error al enviar el mensaje',$mail->ErrorInfo;
    }
?>