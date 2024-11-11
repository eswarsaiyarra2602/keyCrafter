<?php

require_once 'vendor/autoload.php';

class User {
    private static function connect() {
        $dsn = 'mysql:host=127.0.0.1;dbname=KeyCrafterDB';
        $username = $_ENV['DB_USER'];
        $password = $_ENV['DB_PASSWORD'];
        
        try {
            $pdo = new PDO($dsn, $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            die("DB Connection failed: " . $e->getMessage());
        }
    }

    public static function findByEmail($email) {
        $pdo = self::connect();
        $stmt = $pdo->prepare("SELECT * FROM User WHERE email = :email LIMIT 1");
        $stmt->execute(['email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function create($data) {
        $pdo = self::connect();

        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
        
        $stmt = $pdo->prepare("INSERT INTO User (userId, username, email, password) VALUES (:userId, :username, :email, :password)");
        $stmt->execute([
            'userId' => $data['userId'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $hashedPassword
        ]);

        return $pdo->lastInsertId();
    }

    public static function register($data) {
        // Check if email already exists
        if (self::findByEmail($data['email'])) {
            return ['success' => false, 'message' => 'Email already exists'];
        }

        // Create new user
        $userId = self::create($data);
        return ['success' => true, 'userId' => $userId];
    }

    public static function login($email, $password) {
        $user = self::findByEmail($email);

        if (!$user) {
            return ['success' => false, 'message' => 'User not found'];
        }

        // Verify password
        if (password_verify($password, $user['password'])) {
            return ['success' => true, 'user' => $user];
        } else {
            return ['success' => false, 'message' => 'Incorrect password'];
        }
    }
}