// Pwmbuatab Object

// Menggunakan Literal
var mhs1 = {
  nama: "danu",
  kelas: "21A3",
  lulus: false,
  IpSmester: [4.0, 4.0, 3.9, 3.9, 3.9],
  alamt: {
    jalan: "bagindas. ask no 2131",
    kota: "sukrakarta",
    prow: "Jatengs",
  },
  IPK: function () {
    var total = 0;
    var ips = this.IpSmester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

var mhs2 = {
  nama: "jono",
  kelas: "223A5",
  email: "jono@gmail.com",
  juruan: "TI dongs",
};

// function Declaration
function buatObjectMahasiswa(nama, kelas, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.kelas = kelas;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("dnasx", "22A9", "danjad@adkjn290", "TIBos");

// Constructor
function Mahasiswa(nama, kelas, email, jurusan) {
  this.nama = nama;
  this.kelas = kelas;
  this.email = email;
  this.juruan = jurusan;
}
var mhs4 = new Mahasiswa("kukun", "131A4", "kukun@gmail.com", "TIIIII");
var mhs5 = new Mahasiswa("jena", "222A33", "jena@gmail.com", "OITS");
