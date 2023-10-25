<?php
if (isset($_POST["newgal"])) {
    if (isset($_POST["galeria"]) && trim($_POST["galeria"]) != "") {
        $gallery = htmlspecialchars($_POST["galeria"]);
        if (!is_dir("galleries/$gallery")) {
            mkdir("galleries/$gallery");
            $res["success"] = true;
            $res["info"] = "Gallery creation successful!";
        } else {
            $res["success"] = false;
            $res["info"] = "A gallery with the same name already exists!";
        }
    } else {
        $res["success"] = false;
        $res["info"] = "No gallery name received!";
    }
}
if (isset($_POST["upload"])) {
    if (isset($_FILES["images"])) {
        $fileCount = count($_FILES["images"]["error"]);
        if ($fileCount > 0) {
            if (isset($_POST["gallery"])) {
                $gallery = htmlspecialchars($_POST["gallery"]);
                if (is_dir("galleries/$gallery")) {
                    for ($i = 0; $i < $fileCount; $i++) {
                        if ($_FILES["images"]["error"][$i] == 0) {
                            $mime = finfo_file(finfo_open(FILEINFO_MIME_TYPE), $_FILES["images"]["tmp_name"][$i]);
                            if ($mime == "image/jpeg" || $mime == "image/png" || $mime == "image/webp") {
                                move_uploaded_file($_FILES["images"]["tmp_name"][$i], "galleries/$gallery/" . basename($_FILES["images"]["name"][$i]));
                                if (file_exists("galleries/$gallery/" . basename($_FILES["images"]["name"][$i]))) {
                                    $res["files"][$i]["success"] = true;
                                    $res["files"][$i]["info"] = "Uploading the image " . basename($_FILES["images"]["name"][$i]) . " was successful!";
                                } else {
                                    $res["files"][$i]["success"] = false;
                                    $res["files"][$i]["info"] = "Uploading the image " . basename($_FILES["images"]["name"][$i]) . " failed!";
                                }
                            } else {
                                $res["files"][$i]["success"] = false;
                                $res["files"][$i]["info"] = "Image format of " . basename($_FILES["images"]["name"][$i]) . " is not suitable!";
                            }
                        } else {
                            $res["files"][$i]["success"] = false;
                            $res["files"][$i]["info"] = "Uploading the image " . basename($_FILES["images"]["name"][$i]) . " failed!";
                        }
                    }
                } else {
                    $res["success"] = false;
                    $res["info"] = "Gallery does not exist!";
                }
            } else {
                $res["success"] = false;
                $res["info"] = "No gallery name received!";
            }
        } else {
            $res["success"] = false;
            $res["info"] = "No files were received!";
        }
    } else {
        $res["success"] = false;
        $res["info"] = "No files were uploaded!";
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="container uploadcontainer justify-content-center mt-5 col-md-8 col-lg-6 col-xl-4">
            <h1 class="mb-5">Create Gallery</h1> 
            <form method="post">
                <div class="form-group mb-3">
                    <label for="gallery" class="d-block text-center text-light"><h5>Gallery Name</h5></label>
                    <input type="text" class="form-control w-50 mx-auto" id="gallery" name="galeria" placeholder="Enter gallery name" required>       
                </div>
                <button type="submit" name="newgal" class="btn custom-button mb-3 d-block mx-auto">Create</button> 
                <?php
                if (isset($res)) {
                    if (isset($res["success"])) {
                        $alertClass = $res["success"] ? "alert-success" : "alert-danger";
                        $message = $res["info"];
                        echo "<div class='text-center col-6 mx-auto alert $alertClass'>$message</div>";
                    } elseif (is_array($res["files"])) {
                        echo "<div class='text-center col-6 mx-auto'>";
                        foreach ($res["files"] as $file) {
                            $alertClass = $file["success"] ? "alert-success" : "alert-danger";
                            $message = $file["info"];
                            echo "<div class='alert $alertClass'>$message</div>";
                        }
                        echo "</div>";
                    }
                }
                ?>
            </form>
            <h3 class="mt-5">Upload Images to Gallery</h3> 
            <form method="post" enctype="multipart/form-data">
                <div class="form-group mt-4">
                    <label for="images" class="d-block text-center text-light"><h5>Image Upload</h5></label>
                    <input type="file"  name="images[]" class="form-control w-75  mx-auto" id="images" accept="image/jpeg image/png image/webp image/heic" multiple>
                </div>
                <label for="selected" class="d-block text-center text-light"> <h3 class="mt-5 ">Selected Gallery:</h3></label>
                <select name="gallery" id="selected" class="form-select w-50 mx-auto">
                    <?php
                    $galleries = scandir("galleries");
                    foreach ($galleries as $gallery) {
                        if (is_dir("galleries/" . $gallery) && $gallery != "." && $gallery != "..") {
                            print("<option value=\"$gallery\">$gallery</option>");
                        }
                    }
                    ?>
                </select><br>
                <button type="submit" name="upload" class="btn custom-button m-3 d-block mx-auto">Upload</button>
            </form>
            <a href="index.php" class="btn custom-button m-5 d-block mx-auto col-6">View Gallery</a>
        </div>
    </body>
</html>
