let q = 3;
let r = (100 + 50) * a;
console.log(x);

//operator logika
function hitung() {
    let bilangan1 = parseInt(document.getElementById("bilangan1").value);
    let bilangan2 = parseInt(document.getElementById("bilangan2").value);

    if (bilangan1 > 0 && bilangan2 > 0) {
        document.getElementById("hasil").innerHTML = "Keduanya positif";
    } else if (bilangan1 < 0 && bilangan2 < 0) {
        document.getElementById("hasil").innerHTML = "Keduanya negatif";
    } else if (bilangan1 > 0 && bilangan2 < 0) {
        document.getElementById("hasil").innerHTML = "Bilangan pertama positif, bilangan kedua negatif";
    } else if (bilangan1 < 0 && bilangan2 > 0) {
        document.getElementById("hasil").innerHTML = "Bilangan pertama negatif, bilangan kedua positif";
    } else {
        document.getElementById("hasil").innerHTML = "Tidak ada kondisi yang terpenuhi";
    }
}
