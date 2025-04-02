// Manipulasi Array

// 1. Menambah Array
var arr = [];

arr[0] = "Kucing";
arr[1] = "sapi";
arr[2] = "kuda";
arr[3] = "badak";

console.log(); // arr

////////////////////////////////////////////////////

// 2. Menghapus Array

// var arr = ["kucing", "sapi", "kuda", "badak"];
arr[3] = undefined;

console.log(); // arr

////////////////////////////////////////////////////

// 3. Menampilkan isi Array menggunakan loop

// var arr = ["kucing", "sapi", "kuda", "Badak"];

for (let i = 0; i < arr.length; i++) {
  // console.log("Hewan Peliharaan ke " + (i + 1) + " : " + arr[i]);
}

////////////////////////////////////////////////////

//  Method pada array

var arr = ["kucing", "sapi", "badak"];

// 1. JOIN = Menggabungkan Array
console.log(`Join untuk menggabungkan Array \n ${arr.join(" - ")}`);
console.log("\n");

// 2. Push & Pop = menambah dan menghapus dari belakang
// menambah
arr.push("kambing");
console.log(`Push untuk menambah dari belakang \n ${arr.join(" - ")}`);
console.log("\n");

// Menghapus
arr.pop();
console.log(`Pop untuk menghapus dari belakang \n ${arr.join(" - ")}`);
console.log("\n");

// 3. Unshift & Shift = menambah dan menghapus dari depan
// Menambah
arr.unshift("kuda", "paus");
console.log(`Unshift untuk menambah dari depan \n ${arr.join(" - ")}`);
console.log("\n");

// Menghapus
arr.shift();
console.log(`Shit untuk menghapus dari depan \n ${arr.join(" - ")}`);
console.log("\n");

// 4. Splice
// Splice(indexAwal, mauDihapusBerapa, tambahElemenBaru1, tambahElementBaru2, ....)
arr.splice(1, 0, "kuda", "balap", "burung");
console.log(`Splice untuk hapus, tambah atau ganti (posisi, jummlahHapus, itemBaru1, itemBaru2, ...) \n ${arr.join(" - ")}`);
console.log("\n");

// 5. Slice
// Slice(Awal,Akhir)
const kue = ["kue Cokelat", "Donat", "Biskuit", "Cupcake", "Kue Tart"];
const diambil = kue.slice(2, 4);
console.log(`Kue = ${kue.join(" - ")}`);
console.log(`Slice(awal, akhir) untuk mengambil dari awal sampai sebelum akhir \n ${diambil.join(" - ")} (awal = 2 akhir = 4)`);
console.log("\n");

// 6.Foreach
const angka = [1, 2, 3, 4, 5, 6, 7, 8];
const binatang = ["badak", "singa", "kudanil"];

// Loop menggunakan For
for (let i = 0; i < angka.length; i++) {
  // console.log(angka[i]);
}

// Loop menggunakan ForEach
angka.forEach(function (e) {
  // console.log(e);
});

console.log(`forEach untuk Perulangan (element, index) \n`);
binatang.forEach(function (e, i) {
  console.log(`Hewan Peliharan ke ${i + 1} adalah : ${e}`);
});
console.log("\n");

// 7.Map
const angka2 = angka.map(function (e) {
  return e + 2;
});

console.log(`Map untuk menambahkan sesuatu ke setiap item \n 
  Item ${angka.join(" - ")} \n 
  menjadi ${angka2.join(" - ")}`);
console.log("\n");

// 8.Sort
const angkaAcak = [2, 3, 1, 5, 21, 4, 8, 6, 7, 9];
console.log(`Sort untuk mengurutkan angka \n 
  dari ${angkaAcak.join(" - ")} \n 
  menjadi ${angkaAcak.sort((a, b) => a - b).join(" - ")}`);
console.log("\n");

// 9.Filter &  find
// Filter / Find untuk mencari atau memFilter
const cari = angkaAcak.find(function (a) {
  return a == 5;
});

console.log(`Filter & Find untuk memFilter atau Mencari \n 
  dari ${angkaAcak.join(" - ")} \n 
  mencari angka 5 \n 
  Hasil = ${cari}`);
console.log("\n");
