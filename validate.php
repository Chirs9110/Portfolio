<?php
$eredmeny = "";

if(isset($_POST["ok"]))
{
    if(isset($_POST["jelszo"]))
    {
        $jelszo = hash("sha256", $_POST["jelszo"]);
        if($jelszo == "dd84425b72da12c6c828339ce814342daceac705b50d42e377e1acebf8f2320b")
        {
            $eredmeny = "success";
        }
        else
        {
            $eredmeny = "error";
        }
    }
}

echo json_encode(["result" => $eredmeny]); 



?>
