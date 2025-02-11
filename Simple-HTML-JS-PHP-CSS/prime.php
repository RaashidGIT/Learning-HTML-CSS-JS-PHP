<!DOCTYPE html>
<html lang="en">
<head>
    <title>Prime Number Checker</title>
</head>
<body>
    <h1>Find Prime Numbers</h1>

    <form action="" method="post">
        <label for="limit">Enter the limit: </label>
        <input type="number" name="limit" id="limit" required>
        <br><br>
        <input type="submit" value="Check Prime Numbers">
    </form>

    <?php
    // Check if the form is submitted
    if ($_POST) {
        $limit = $_POST['limit'];

        echo "<h2>Prime numbers upto $limit:</h2>";

        // Function to check if a number is prime
        function isPrime($num) {
            if ($num <= 1) {
                return false;
            }
            for ($i = 2; $i <= sqrt($num); $i++) {
                if ($num % $i == 0) {
                    return false;
                }
            }
            return true;
        }

        // Loop through numbers from 2 to the limit and check if prime
        for ($i = 2; $i <= $limit; $i++) {
            if (isPrime($i)) {
                echo "$i ";
            }
        }
    }
    ?>

</body>
</html>
