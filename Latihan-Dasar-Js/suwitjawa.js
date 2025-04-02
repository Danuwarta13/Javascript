var tanya = true;

while (tanya) {
  // menangkkap pilihan player
  var p = prompt("pilih : gajah, semut, orang");

  // menampilkan pilihan komputer
  // membangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menetukan rulse
  var hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "semut" ? "Kalah" : " Menang";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "kalah" : "Mengang";
  } else if (p == "orang") {
    if (comp == "gajah") {
      hasil = "kalah";
    } else {
      hasil = "Menang";
    }
  } else {
    hasil = "Anda Memasukan Pilihan yang salah";
  }

  // tampilkan hasil
  alert("Kamu memilih : " + p + "\nkomputer memilih : " + comp + " \nMakaa Hasilnya Kamu " + hasil);

  tanya = confirm("lagi?");
}

alert("terimakasih bos");
