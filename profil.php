<?php
$xmlString = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Website Saya</title>
</head>
<body>
<header>
    <h1>Dimas Ian I</h1>
</header>
<section>
    <div class="Profile">
        <h2>profile</h2>
        <p>Nama: Dimas Ian Ibrahim</p>
        <p>NBI: 1462200232</p>
        <p>Jurusan: Teknik Informatika</p>
    </div>
    <div class="pendidikan">
        <h2>Pendidikan</h2>
        <p>SD   :SD Negeri Pacar Kelling</p>
        <p>SMP  :SMP Negeri 29 Surabaya</p>
        <p>SMA  :SMA Negeri 4 Surabaya</p>
    </div>
    <div class="contact">
        <h2>Kontak</h2>
        <p>Whatsapp : 081228284802</p>
        <p>Email    : dimasibrahim10@gmail.com</p>
        <p>Facebook : dimasIan</p>
    </div>
</section>
<footer>
    <p>Tugas Individu II</p>
</footer>
</body>
</html>
XML;

$xml = simplexml_load_string($xmlString);

// Contoh penggunaan data XML
echo "Nama: " . $xml->header->h1 . "<br>";
echo "Jurusan: " . $xml->section->div[0]->p[2] . "<br>";
echo "SD: " . $xml->section->div[1]->p[0] . "<br>";
echo "Whatsapp: " . $xml->section->div[2]->p[0];
?>
