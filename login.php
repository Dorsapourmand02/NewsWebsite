<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$port = 8889; // پورت MAMP برای MySQL
$host = "localhost"; // نام هاست
$user = "root"; // نام کاربری پایگاه داده
$password = "root"; // رمز عبور پایگاه داده
$database = "News-web"; // نام پایگاه داده

// اتصال به پایگاه داده
$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// دریافت داده‌ها از درخواست POST
$email = $_POST['email'];
$password = $_POST['password'];

// چک کردن اینکه ایمیل وارد شده در دیتابیس وجود دارد یا نه
$sql_check = "SELECT * FROM users WHERE email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$result = $stmt_check->get_result();

if ($result->num_rows > 0) {
    // ایمیل وجود دارد، حالا پسورد را چک می‌کنیم
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo "Login successful";
    } else {
        echo "Incorrect password";
    }
} else {
    echo "You should sign up first";
}

$stmt_check->close();
$conn->close();
?>
