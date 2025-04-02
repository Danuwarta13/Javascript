// Event Handling
// const cls = document.querySelector(".close");
// const card = document.querySelector(".card");
// cls.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
const cls = document.querySelectorAll(".close");

// For
// for (let i = 0; i < cls.length; i++) {
//   cls[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

// ForEach
cls.forEach(function (e) {
  e.addEventListener("click", function () {
    // console.log("ini index ke " + e);
    e.parentElement.style.display = "none";
  });
});

//
const nama = document.querySelector(".nama");
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling.previousElementSibling);
