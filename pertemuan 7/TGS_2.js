function kalkulator(num1, num2, operator) {
    let hasil;

    switch (operator) {
        case "penjumlahan":
            hasil = num1 + num2;
            break;
        case "pengurangan":
            hasil = num1 - num2;
            break;
        case "perkalian":
            hasil = num1 * num2;
            break;
        case "pembagian":
            hasil = num1 / num2;
            break;
        default:
            return "Operator tidak valid";
    }

    let pesan;
    if (hasil <= 9) {
        pesan = "Hasil Satuan";
    } else if (hasil >= 10 && hasil <= 99) {
        pesan = "Hasil Puluhan";
    } else if (hasil >= 100 && hasil <= 999) {
        pesan = "Hasil Ratusan";
    } else {
        pesan = "Hasil Lebih dari Ratusan";
    }

    return { hasil: hasil, pesan: pesan };
}

// Contoh penggunaan:
const hasilPenjumlahan = kalkulator(19, 14, "pengurangan");
console.log(`Hasil penjumlahan: ${hasilPenjumlahan.hasil}, ${hasilPenjumlahan.pesan}`);

const hasilPerkalian = kalkulator(8, 5, "perkalian");
console.log(`Hasil perkalian: ${hasilPerkalian.hasil}, ${hasilPerkalian.pesan}`);

const hasilPembagian = kalkulator(1000, 4, "pembagian");
console.log(`Hasil pembagian: ${hasilPembagian.hasil}, ${hasilPembagian.pesan}`);
