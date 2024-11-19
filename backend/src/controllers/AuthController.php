<?php

require_once __DIR__ . '/../models/User.php';
use Firebase\JWT\JWT;

class AuthController {
    private static $secretKey = 'your-secret-key'; 
    private static $algorithm = 'HS256'; // Algorithm for JWT encoding

    public static function login($data) {
        if (empty($data['email']) || empty($data['password'])) {
            throw new Exception("Missing Required Field Details");
        }
        
        $user = User::findByEmail($data['email']);
        if (!$user || !password_verify($data['password'], $user['password'])) {
            throw new Exception("Invalid email or password.");
        }

        $payload = [
            "iss" => "your-domain.com", 
            "iat" => time(),
            "exp" => time() + 3600, 
            "userId" => $user['userId']
        ];
        
        return ["token" => JWT::encode($payload, self::$secretKey, self::$algorithm)];
    }

    public static function register($data) {
        if (empty($data['username']) || empty($data['userId']) || empty($data['password']) || empty($data['email'])) {
            throw new Exception("Username, email, and password are required.");
        }

        if (User::findByEmail($data['email']) || User::findByUserId($data['userId'])) {
            throw new Exception("User already exists.");
        }

        $userId = User::create($data);

        $payload = [
            "iss" => "your-domain.com",
            "iat" => time(),
            "exp" => time() + 3600,
            "userId" => $userId
        ];
        
        return ["token" => JWT::encode($payload, self::$secretKey, self::$algorithm)];
    }
}