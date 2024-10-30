<?php

class PasswordController
{
    public static function generatePassword($data)
    {
        // Validate required parameters
        if (empty($data['length']) || !is_int($data['length']) || $data['length'] <= 0) {
            throw new Exception("Invalid or missing password length.");
        }

        // Character sets
        $lowercase = 'abcdefghijklmnopqrstuvwxyz';
        $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        $specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

        // Assemble the character pool based on user selection
        $characterPool = '';
        if (!empty($data['lowercase'])) $characterPool .= $lowercase;
        if (!empty($data['uppercase'])) $characterPool .= $uppercase;
        if (!empty($data['numbers'])) $characterPool .= $numbers;
        if (!empty($data['specialChars'])) $characterPool .= $specialChars;

        // Ensure there's at least one character pool selected
        if (empty($characterPool)) {
            throw new Exception("At least one character type must be selected.");
        }

        // Generate the password
        $password = '';
        $maxIndex = strlen($characterPool) - 1;
        for ($i = 0; $i < $data['length']; $i++) {
            $password .= $characterPool[random_int(0, $maxIndex)];
        }

        return $password;
    }
}