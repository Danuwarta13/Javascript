// Event
// Menggunakan Handler
//
// InerHTML
const p3 = document.querySelector(".p3");
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

// Element Method
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightgreen";
}
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// Menggunakan addEventListener()
//
const p4 = document.querySelector("#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("#b ul");
  const li = document.createElement("li");
  const textLi = document.createTextNode("Item Tambahan");

  li.appendChild(textLi);
  ul.appendChild(li);
});

// const p3 = document.querySelector(".p3");
// Event Handler
// p3.onclick = function () {
//   p3.style.backgroundColor = "red";
//   p3.style.fontSize = "30px";
// };

// Event addEventListener
// p3.addEventListener("click", function () {
//   p3.style.backgroundColor = "red";
// });
// p3.addEventListener("click", function () {
//   p3.style.fontSize = "30px";
// });
