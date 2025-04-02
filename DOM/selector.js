// DOM Selection
// document.getElementById() -> mengembalikan Element <-
//
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "blue";
judul.innerHTML = "haloww Cuyy ";

// document.getElementsByTagName() -> mengembalikan HTMLCollections <-
//
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "blue";
}
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> mengembalikan HTMLCollections <-
//
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini di ubah dari JS";

// document.querySelector() -> menghasilkan Element < -
//
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "2rem";

const li2 = document.querySelector("#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> menghasilkan NodeList <-
//
const pppp = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  pppp[i].style.backgroundColor = "red";
}

// const sectionb = document.getElementById("b");
// const p = sectionb.querySelector("p");
// p.style.backgroundColor = "lightblue";
