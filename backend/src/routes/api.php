<?php

require_once __DIR__ . '/../controllers/PasswordController.php';
require_once __DIR__ . '/../controllers/AuthController.php';
header("Content-Type: application/json");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($uri === '/api/generate-password' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    try {
        $password = PasswordController::generatePassword($data);
        echo json_encode($password);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["error" => $e->getMessage()]);
    }
}

else if($uri === '/api/auth/login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    try {
        $token = AuthController::login($data);
        echo json_encode($token);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["message" => $e->getMessage()]);
    }
}
else if($uri === '/api/auth/register' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    error_log("Input Data: " . print_r($data, true));
    try {
        $token = AuthController::register($data);
        echo json_encode($token);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["message" => $e->getMessage()]);
    }
}
else {
    http_response_code(404);
    echo json_encode(["error" => "Route not found"]);
}