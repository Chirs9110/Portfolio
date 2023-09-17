<?php
$eredmeny = "";

if (isset($_POST["jelszo"])) {
    $submittedPassword = $_POST["jelszo"];
    $helyesJelszo = "dd84425b72da12c6c828339ce814342daceac705b50d42e377e1acebf8f2320b";

    if ($submittedPassword === $helyesJelszo) {
        $eredmeny = "success";
    } else {
        $eredmeny = "error";
    }
}

echo json_encode(["result" => $eredmeny]);
?>