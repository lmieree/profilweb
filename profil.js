var xmlString = `<?xml version="1.0" encoding="UTF-8"?>
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
    <div class="profil">
        <h2>Profil</h2>
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
        <p>Facebook : DimasIan</p>
    </div>
</section>
<footer>
    <p>Tugas Individu II</p>
</footer>
</body>
</html>`;

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Contoh penggunaan data XML
console.log("Nama: " + xmlDoc.getElementsByTagName("h1")[0].childNodes[0].nodeValue);
console.log("Jurusan: " + xmlDoc.getElementsByTagName("p")[2].childNodes[0].nodeValue);
console.log("SD: " + xmlDoc.getElementsByTagName("p")[3].childNodes[0].nodeValue);
console.log("Whatsapp: " + xmlDoc.getElementsByTagName("p")[7].childNodes[0].nodeValue);
