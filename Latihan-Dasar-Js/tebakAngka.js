var lagi = true;
while (lagi) {
  alert("Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.");
  //   tebakan
  var angka = prompt("masukan angka");
  //   angka 1-10
  var comp = Math.round(Math.random() * 10);
  console.log(comp);
  //   Nyawa
  for (let nyawa = 3; nyawa >= 0; nyawa--) {
    if (angka == comp) {
      alert("Anda benar");
      nyawa = 0;
    } else if (angka < comp) {
      if (nyawa === 0) {
        alert("angka yang harus di tebak adalah " + comp + " NT");
      } else {
        angka = prompt("terlalu rendahan blok, nyawa tinggal " + nyawa);
      }
    } else if (angka > comp) {
      if (nyawa === 0) {
        alert("angka yang harus di tebak adalah " + comp + " NT");
      } else {
        angka = prompt("terlalu ketinggian blok, nyawa tinggal " + nyawa);
      }
    } else {
      alert(" anda tau angka?");
      nyawa = 0;
    }
  }
  lagi = confirm("lagi ?");
}
alert("TYTY Cuy");
