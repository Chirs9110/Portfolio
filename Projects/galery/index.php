<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <?php
    if (isset($_GET["gal"])) {
        $gallery = htmlspecialchars($_GET["gal"]);
        if (is_dir("galleries/$gallery")) {
            $images = scandir("galleries/$gallery");
            if (count($images) - 2 > 0) {
                echo '<div class="row container mx-auto mt-5">';
                $i = 0;
                foreach ($images as $image) {
                    if ($image != "." && $image != "..") {
                        $i++;
                        echo '<div class="col-4 m-3 mx-auto text-center">';
                        echo '<a href="galleries/' . $gallery . '/' . $image . '" target="_blank">';
                        echo '<img class="img-fluid images mt-4" src="galleries/' . $gallery . '/' . $image . '" alt="' . $image . '">';
                        echo '</a>';
                        echo '</div>';
                    }
                }
                echo '</div>';
                echo '<a href="index.php" class="btn custom-button mt-3 d-block mx-auto col-2">Back to Gallery</a>';
            } else {
                echo '<h1 class="mt-5">There are no images in this gallery!</h1>';
                echo '<a href="index.php" class="btn custom-button mt-3 d-block mx-auto col-2">Back to Gallery</a>';
            }
        } else {
            echo '<h1 class="mt-5">Gallery does not exist!</h1>';
        }
    } else {
        $galleries = scandir("galleries");
        if (count($galleries) - 2 > 0) {
            echo '<div class="container galcontainer">';
            echo '<div class="row">';
            foreach ($galleries as $gal) {
                if ($gal != "." && $gal != "..") {
                    echo '<div class="col-6 col-md-4 col-lg-3 mt-5 text-center">';
                    echo '<a href="?gal=' . $gal . '">';
                    echo '<img class="img-fluid icons" src="icon.png" alt="' . $gal . '">';
                    echo '<br><div class="text-center">' . $gal . '</div>';
                    echo '</a>';
                    echo '</div>';
                }
            }
            echo '</div>';
            echo '</div>';
            echo '<a href="upload.php" class="btn custom-button mt-5 d-block mx-auto col-4">Create Gallery - Upload Images</a>';
        } else {
            echo '<h1 class="mt-5">No galleries have been created yet!</h1>';
        }
    }
    ?>
</body>
</html>
