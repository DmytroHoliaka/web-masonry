<?php

$data = json_decode(file_get_contents('php://input'), true);

if (!empty($data)) {
    $jsonFilePath = 'website-data.json';
    file_put_contents($jsonFilePath, json_encode($data, JSON_PRETTY_PRINT));
    echo "Data received and saved in JSON file.";
} else {
    echo "No data received.";
}
?>
