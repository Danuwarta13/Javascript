// const cls = document.querySelectorAll(".close");
// cls.forEach(function (e) {
//   e.addEventListener("click", function (c) {
//     c.target.parentElement.style.display = "none";
//     c.preventDefault();
//     c.stopPropagation();
//   });
// });

// const textCard = "oke brow ini card";
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (d) {
//     alert(textCard);
//     d.stopPropagation();
//   });
// });

const textContainer = "oke brow ini text container";
const container = document.querySelector(".container");
container.addEventListener("click", function (d) {
  if (d.target.className == "close") {
    d.target.parentElement.style.display = "none";
  } else if (d.target.className == "nama") {
    alert("ini nama");
  } else {
    alert(textContainer);
  }
});
