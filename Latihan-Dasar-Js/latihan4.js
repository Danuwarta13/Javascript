let noAngkot = 1;
const angkotBeroperasi = 6;
const jmlhAngkot = 10;

for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("angkot No " + noAngkot + " sedang beroprasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("angkot No " + noAngkot + " sedang Lembur");
  } else {
    console.log("angkot No " + noAngkot + " sedang di Bengkel");
  }
}
