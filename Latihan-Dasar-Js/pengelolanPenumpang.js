var penumpang = [];
var tambahPengumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  }
  // else
  else {
    // telusuri seluruh kursi dari awal
    for (let t = 0; t < penumpang.length; t++) {
      // jika ada kuri kosong
      if (penumpang[t] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[t] = namaPenumpang;
        // kemnalikan isi array & keluar dari funtion
        return penumpang;
        // jika sudah ada nama yang sama
      } else if (namaPenumpang == penumpang[t]) {
        // tampilkan pesan kesalahannya
        console.log("Penumpang bernama " + namaPenumpang + " sudah ada di dalam angkot");
        // kembalikan isi array & keluar dari funtion
        return penumpang;
        // jika seluruh kursi terisi
      } else if (t == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & dan keluar dari function
        return penumpang;
      }
    }
  }
};

var turunPenumpang = function (namaPenumpang, penumpang) {
  // jika penumpang madih kodong
  if (penumpang.length == 0) {
    // pesan kesalahan
    console.log("Penumpang Masih kosong");
    // kembalikan array & keluar dari function
    return penumpang;
    // else
  } else {
    //   telusuri penumang yang ada di angkot
    for (let t = 0; t < penumpang.length; t++) {
      //   jika namaPenumpang ada di dalam angkot
      if (namaPenumpang == penumpang[t]) {
        // menurunkan penumpang dengan merubah menjadi undefined
        penumpang[t] = undefined;
        // pesan penumpang berhasil turun
        console.log("penumpang bernama " + namaPenumpang + " berhasil turun");
        // kembalikan array & keluar dari function
        return penumpang;
        // jika di kursi tidak ada namaPenumpang
      } else if (t == penumpang.length - 1) {
        // pesan tidak ada penumpang
        console.log("nama penumpang " + namaPenumpang + " tidak ada ");
        // kembalikan array & keluar dari function
        return penumpang;
      }
    }
  }
};
