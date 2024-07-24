
    function kalkulator (num1, num2, operator){

    }
    const hasil = kalkulator (5, 2, "perkalian")

function tambah() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var hasil = num1 + num2;
    document.getElementById('hasil').textContent = hasil;

    setKategori(hasil);
}

function kurang() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var hasil = num1 - num2;
    document.getElementById('hasil').textContent = hasil;

    setKategori(hasil);
}

function kali() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var hasil = num1 * num2;
    document.getElementById('hasil').textContent = hasil;

    setKategori(hasil);
}

function bagi() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (num2 === 0) {
        document.getElementById('hasil').textContent = "Tidak bisa dibagi dengan 0";
        document.getElementById('kategori').textContent = "";
    } else {
        var hasil = num1 / num2;
        document.getElementById('hasil').textContent = hasil;

        setKategori(hasil);
    }
}

function setKategori(hasil) {
    if (hasil <= 9) {
        document.getElementById('kategori').textContent = "Hasil Satuan";
    } else if (hasil >= 10 && hasil <= 99) {
        document.getElementById('kategori').textContent = "Hasil Puluhan";
    } else if (hasil >= 100 && hasil <= 999) {
        document.getElementById('kategori').textContent = "Hasil Ratusan";
    } else {
        document.getElementById('kategori').textContent = "Hasil lebih dari ratusan";
    }
}
