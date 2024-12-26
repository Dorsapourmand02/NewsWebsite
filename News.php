<?php
header("Access-Control-Allow-Origin: http://localhost:5173"); // Allow requests from React app
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow these methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow these headers
$host = "localhost"; // Your database host
$user = "News-web"; // Database username
$password = ""; // Database password
$dbname = "News-web"; // Database name

// Connect to the database
$conn = new mysqli($host, $user, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['name'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password

// Insert data into the database
$sql = "INSERT INTO users (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo json_encode(array("success" => true, "message" => "User added successfully"));
} else {
    echo json_encode(array("success" => false, "message" => "Error: " . $conn->error));
}

$stmt->close();
$conn->close();
?>