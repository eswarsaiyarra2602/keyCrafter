<?php

require_once __DIR__ . '/../controllers/PasswordController.php';
header("Content-Type: application/json");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/api/generate-password' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    error_log("Input Data: " . print_r($data, true));
    try {
        $password = PasswordController::generatePassword($data);
        echo json_encode(["password" => $password]);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["error" => $e->getMessage()]);
    }
} else {
    http_response_code(404);
    echo json_encode(["error" => "Route not found"]);
}