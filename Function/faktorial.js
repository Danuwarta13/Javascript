function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

hasil = faktorial(3);
console.log(hasil);
