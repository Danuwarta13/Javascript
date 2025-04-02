var item = prompt("Masukan nama makanan / minuman : \n (contoh : nasi, daging, es teh, anggur, intis");

switch (item) {
  case "nasi":
  case "daging":
    alert("makanan / minuman SEHAT");
    break;
  case "es teh":
    alert("makanan / minuman  kurang SEHAT");
    break;
  case "anggur":
  case "intis":
    alert("makanan / minuman  TIDAK SEHAT");
    break;
  default:
    alert("nama makanan / minuman Tidak Tersedia!");
    break;
}
