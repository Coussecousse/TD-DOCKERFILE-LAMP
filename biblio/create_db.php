<?php
$servername = "mysql-biblio";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// // Create database
// $sql = "CREATE DATABASE library";
// if ($conn->query($sql) === TRUE) {
//     echo "Database created successfully";
// } else {
//     echo "Error creating database: " . $conn->error;
// }

// Create table
$conn->select_db("library");
$sql = "CREATE TABLE books (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table books created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
