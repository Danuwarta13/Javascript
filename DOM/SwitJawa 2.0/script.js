function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.35) {
    return "gajah";
  } else if (comp >= 0.35 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}

// function getPilihanComputer(player) {
//   if (player === "gajah") {
//     return "semut";
//   } else if (player === "semut") {
//     return "orang";
//   } else {
//     return "gajah";
//   }
// }

function getHasil(comp, player) {
  //   if (player == comp) return "SERI";
  //   if ((player = "gajah")) return comp == "orang" ? "Menang" : "Kalah";
  //   if ((player = "orang")) return comp == "semut" ? "Kalah" : "menang";
  //   if ((player = "semut")) return comp == "gajah" ? "Menang" : "Kalah";

  if (player == comp) {
    return "SERI";
  } else if (player == "gajah") {
    return comp == "semut" ? "Kalah" : " Menang";
  } else if (player == "semut") {
    return comp == "orang" ? "kalah" : "Menang";
  } else if (player == "orang") {
    if (comp == "gajah") {
      return "kalah";
    } else {
      return "Menang";
    }
  }
}

//
function putar() {
  const info = document.querySelector(".info");
  const text = ["SERI", "Menang", "Kalah"];
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
    info.innerHTML = text[i++];
    if (i == text.length) {
      i = 0;
    }
  }, 100);
}

//
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanPlayer = pil.className;
    const pilihanComputer = getPilihanComputer();
    // const pilihanComputer = getPilihanComputer(pilihanPlayer);
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // console.log(pilihanComputer);
    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const jempol = document.querySelector(".gajah");
// const telunjuk = document.querySelector(".orang");
// const kelingking = document.querySelector(".semut");

// jempol.addEventListener("click", function () {
//   //
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = jempol.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // Gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   //
//   console.log("ini pilhan computer = ", pilihanComputer);
//   console.log("ini pilhan player = ", pilihanPlayer);
//   console.log("Hasil = ", hasil);
// });
// telunjuk.addEventListener("click", function () {
//   //
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = telunjuk.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // Gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   //
//   console.log("ini pilhan computer = ", pilihanComputer);
//   console.log("ini pilhan player = ", pilihanPlayer);
//   console.log("Hasil = ", hasil);
// });
// kelingking.addEventListener("click", function () {
//   //
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = kelingking.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // Gambar
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   // info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;

//   //
//   console.log("ini pilhan computer = ", pilihanComputer);
//   console.log("ini pilhan player = ", pilihanPlayer);
//   console.log("Hasil = ", hasil);
// });
