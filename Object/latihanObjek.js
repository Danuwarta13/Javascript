// Membuat objek Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.gantiSopir = function (namaBaru) {
    this.sopir = namaBaru;
    alert("sopir telah di ganti dengan " + namaBaru);
    return {
      sopir: this.sopir,
      trayek: this.trayek,
      penumpang: this.penumpang,
      kas: this.kas,
    };
  };

  this.penumpangNaik = function (namaPenumpang) {
    // jika angkot masih 0
    if (this.penumpang.length === 0) {
      // tambahkan penumpang dari belakang menggunakan push
      this.penumpang.push(namaPenumpang);
      // kembalikan isi array & keluar dari function
      return this.penumpang;
      // jika angkot tidak kosong / > 0
    } else {
      // cek isi angkot mengguanakan for
      for (let i = 0; i < this.penumpang.length; i++) {
        // jika di dalam angkot ada undefined
        if (this.penumpang[i] == undefined) {
          // isi undefined dengan nama penumpang
          this.penumpang[i] = namaPenumpang;
          // kembalikan isi array & keluar dari function
          return this.penumpang;
          // jika di dalam angkot sama dengan nama penumpang
        } else if (this.penumpang[i] == namaPenumpang) {
          // tampilkan pesan
          alert("penumpang dengan nama " + namaPenumpang + " sudah ada di dalam angkot");
          // kembalikan array & keluar dari function
          return this.penumpang;
          // jika di dalam angkot sudah di cek semua
        } else if (i == this.penumpang.length - 1) {
          // tambah penumpang
          this.penumpang.push(namaPenumpang);
          //   kembalikan isi array & keluar dari function
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    // jika penumpang 0
    if (this.penumpang.length === 0) {
      // tampilkan pesan
      alert("Angkot masih Kosong!");
      // kembalikan isi array & keluar dari function
      return this.penumpang;
      // jika ada penumpang / > 0
    } else {
      // cek penumpang di dalam angkot menggunakan for
      for (let i = 0; i < this.penumpang.length; i++) {
        // jika penumpang di dalam angkot sama dengan nama penumpang yang mau turun
        if (this.penumpang[i] === namaPenumpang) {
          // maka rubah kursi penumpang nya menjadi undefined
          this.penumpang[i] = undefined;
          // tambahkan kas dengan bayar
          this.kas += bayar;
          // kembailkan isi array & keluar dari function
          return this.penumpang;
          // jika sudah di cek semua di dalam angkot
        } else if (i == this.penumpang.length - 1) {
          // tampilkan pesan
          alert("penumpang dengan nama " + namaPenumpang + " tidak ada dalam angkot");
          // kembalikan isi array & keluar dari function
          return this.penumpang;
        }
      }
    }
  };
}

var angkot1 = new Angkot("jojon", ["semarang", "solo"], [], 0);
var angkot2 = new Angkot("jaenab", ["narogong", "bantargebang"], [], 0);
