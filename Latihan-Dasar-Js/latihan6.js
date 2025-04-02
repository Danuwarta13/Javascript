var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlhAngkot = 10;

for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("angkot No " + noAngkot + " sedang beroprasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("angkot No " + noAngkot + " sedang Lembur");
  } else {
    console.log("angkot No " + noAngkot + " sedang di Bengkel");
  }
}
