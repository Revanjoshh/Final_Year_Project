<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cine_crew";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$role = $_GET['role'] ?? 'all'; // Default to 'all' if no role is specified
$search = $_GET['search'] ?? ''; // Search keyword

$sql = "SELECT * FROM profiles WHERE (role LIKE ?) AND (name LIKE ?)";
$stmt = $conn->prepare($sql);
$searchTerm = "%" . $search . "%";
$roleTerm = ($role === 'all') ? '%' : $role;

$stmt->bind_param("ss", $roleTerm, $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

$profiles = [];
while ($row = $result->fetch_assoc()) {
    $profiles[] = $row;
}

echo json_encode($profiles); // Return profiles as JSON

$stmt->close();
$conn->close();
?>
