<?php
$host = "localhost";  // آدرس سرور دیتابیس
$username = "root";   // نام کاربری MySQL (در لوکال‌هاست معمولاً 'root' است)
$password = "";       // رمز عبور MySQL
$database = "News-web";  // نام دیتابیس

// اتصال به دیتابیس
$conn = new mysqli($host, $username, $password, $database);

// بررسی اتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
