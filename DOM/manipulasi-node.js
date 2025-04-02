// Manipulation DOM Node

// Menmabah Element baru menggunakan AppendChilld
// Buat element baru
const pBaru = document.createElement("p");
const textPbaru = document.createTextNode("Paragraf Baru");

// Simpan tulisan ke dalam  paragraf
pBaru.appendChild(textPbaru);

// Simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//////////////////////////////////////////////////

// Menambah Element Baru mengguanakan InsertBefore
// Buat element baru
const itemBaru = document.createElement("li");
const textItemBaru = document.createTextNode("Ini Item Baru");

// Simpan tulisan ke dalam element baru
itemBaru.appendChild(textItemBaru);

// simpan itemBaru di tengah tengah li
const secetionB = document.querySelector("#b ul");
const li2 = document.querySelector("#b ul li:nth-child(2)");
secetionB.insertBefore(itemBaru, li2);

/////////////////////////////////////////////

// menghapus Element menggunakan removeChild
// cari item yang ingin diHapus
const a = document.querySelector("#a a");
// hapus menggunakan removeChild
sectionA.removeChild(a);

// //////////////////////////////////////////

// mengganti Element menggunakan replaceChiled
// Buat Element menggunakan createElement
const h2 = document.createElement("h2");
// Buat Isi Element menggunakan CreateTextNode
const textH2 = document.createTextNode("Judul Baru");
// Simpan Isi Element ke dalam Element yang sudah di Buat menggunakan AppendChild
h2.appendChild(textH2);

// mengambil secition b
const sectB = document.getElementById("b");
// mengambil element yang ingin di replaceChild
const p4 = sectB.getElementsByTagName("p")[0];
sectB.replaceChild(h2, p4);

// const h1 = document.getElementById("judul");
// const body = document.querySelector("body");
// body.replaceChild(h2, h1);

// Memberi style
pBaru.style.backgroundColor = "lightblue";
itemBaru.style.backgroundColor = "lightblue";
h2.style.backgroundColor = "lightblue";
