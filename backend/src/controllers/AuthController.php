<?php

require_once __DIR__ . '/../models/User.php';
use Firebase\JWT\JWT;

class AuthController {
    private static $secretKey = 'your-secret-key'; // Replace with your secure secret key
    private static $algorithm = 'HS256'; // Algorithm for JWT encoding

    public static function login($data) {
        if (empty($data['email']) || empty($data['password'])) {
            throw new Exception("Missing Required Field Details");
        }
        
        $user = User::findByEmail($data['email']);
        if (!$user) {
            throw new Exception("Invalid email or password");
        }

        if (!password_verify($data['password'], $user['password'])) {
            throw new Exception("Invalid email or password.");
        }

        $payload = [
            "iss" => "your-domain.com", 
            "iat" => time(),
            "exp" => time() + 3600, // Token expiry (1 hour)
            "userId" => $user['userId']
        ];
        
        $token = JWT::encode($payload, self::$secretKey, self::$algorithm);
        return ["token" => $token];
    }

    // Register function
    public static function register($data) {
        // Check if required fields are provided
        if (empty($data['username']) || empty($data['userId']) || empty($data['password']) || empty($data['email'])) {
            throw new Exception("Username, email, and password are required.");
        }

        if (User::findByEmail($data['email'])) {
            throw new Exception("User already exists.");
        }

        // Create new user
        $userId = User::create([
            'userId' => $data['userId'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);

        // Generate JWT token for the new user
        $payload = [
            "iss" => "your-domain.com",
            "iat" => time(),
            "exp" => time() + 3600,
            "userId" => $userId
        ];
        
        $token = JWT::encode($payload, self::$secretKey, self::$algorithm);
        return ["token" => $token];
    }
}