function jumlahVolumeDuaKubus(a, b) {
  var total, volumeA, volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

function klmn(p, l) {
  var total, tambah, kali;

  tambah = p + l;
  // kali = tambah * 2;

  total = tambah * 2;
  return total;
}

// Fungsi pertama
// console.log(jumlahVolumeDuaKubus(5, 3));
// Fungsi kedua
// console.log(klmn(10, 5));

function tambah(a, b) {
  return a + b;
}

var ulangi = true;
while (ulangi) {
  var input1 = parseInt(prompt("masukan nilai 1 :"));
  var input2 = parseInt(prompt("masukan nilai 2 :"));

  var hasil = tambah(input1 * 2, input2 * 2);
  // console.log(hasil);
  alert("hasil nya adalah " + hasil);
  ulangi = confirm("lagi?");
}
