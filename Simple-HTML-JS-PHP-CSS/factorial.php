<!DOCTYPE html>
<html lang="en">
<head>
    <title>Factorial Calculator</title>
</head>
<body>
    <h1>Factorial Calculator</h1>

    <form action="" method="post">
        <label for="number">Enter a number: </label>
        <input type="number" name="number" id="number" required>
        <br><br>
        <input type="submit" value="Calculate Factorial">
    </form>

    <?php
    // Check if the form is submitted
    if ($_POST) {
        $number = $_POST['number'];

        // Function to calculate factorial
        function factorial($num) {
            if ($num < 0) {
                return "Factorial is not defined for negative numbers";
            } else if ($num == 0) {
                return 1;
            } else {
                $fact = 1;
                for ($i = 1; $i <= $num; $i++) {
                    $fact = $fact * $i;
                }
                return $fact;
            }
        }

        $result = factorial($number);
        echo "<h2>Factorial of $number is: $result</h2>";
    }
    ?>

</body>
</html>
