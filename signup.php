<?php
include 'db.php';  // اتصال به دیتابیس

// دریافت داده‌های POST از فرانت‌اند
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);  // رمزنگاری رمز عبور
$name = $_POST['name'];

// انجام کوئری برای وارد کردن داده‌ها به جدول users
$sql = "INSERT INTO users (email, password, name) VALUES ('$email', '$password', '$name')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
