<?php

class PasswordController
{
    public static function generatePassword($data)
    {
        if (empty($data['length']) || !is_int($data['length']) || $data['length'] <= 0) {
            throw new Exception("Invalid or missing password length.");
        }

        $lowercase = 'abcdefghijklmnopqrstuvwxyz';
        $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        $specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    
        $characterPool = '';
        if (!empty($data['lowercase'])) $characterPool .= $lowercase;
        if (!empty($data['uppercase'])) $characterPool .= $uppercase;
        if (!empty($data['numbers'])) $characterPool .= $numbers;
        if (!empty($data['specialChars'])) $characterPool .= $specialChars;

        if (empty($characterPool)) {
            throw new Exception("At least one character type must be selected.");
        }

        // Generate the password
        $password = '';
        $maxIndex = strlen($characterPool) - 1;
        for ($i = 0; $i < $data['length']; $i++) {
            $password .= $characterPool[random_int(0, $maxIndex)];
        }

        $strength = self::getPasswordStrength($password);

        return [
            'password' => $password,
            'strength' => $strength
        ];
    }


    private static function getPasswordStrength($password)
    {
        $length = strlen($password);
        $hasLowercase = preg_match('/[a-z]/', $password);
        $hasUppercase = preg_match('/[A-Z]/', $password);
        $hasNumbers = preg_match('/[0-9]/', $password);
        $hasSpecialChars = preg_match('/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/', $password);

        $score = 0;
        if ($length >= 8) $score += 1;
        if ($length >= 12) $score += 1;
        if ($hasLowercase) $score += 1;
        if ($hasUppercase) $score += 1;
        if ($hasNumbers) $score += 1;
        if ($hasSpecialChars) $score += 1;

        if ($score <= 2) {
            return 'very weak';
        } elseif ($score <= 3) {
            return 'weak';
        } elseif ($score <= 4) {
            return 'medium';
        } elseif ($score <= 5) {
            return 'strong';
        } else {
            return 'very strong';
        }
    }
}