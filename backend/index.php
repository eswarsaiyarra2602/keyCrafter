<?php
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$requestUri = $_SERVER['REQUEST_URI'];

// Forward all `/api/*` requests to `api.php`
if (preg_match('/^\/api\//', $requestUri)) {
    require_once __DIR__ . '/src/routes/api.php';
    exit();
}
else {
    // Handle non-existent routes with a 404 response
    http_response_code(404);
    header("Content-Type: application/json");
    echo json_encode(["error" => "Not Found"]);
}

//