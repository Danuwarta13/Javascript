const btn = document.getElementById("tombolUbahWarna");
btn.addEventListener("click", function () {
  // function Button 1
  document.body.classList.toggle("biru-muda");
});

// Buat Button
const tAcarkWarna = document.createElement("button");
const textBtn = document.createTextNode("Acak Warna");
tAcarkWarna.append(textBtn);
tAcarkWarna.setAttribute("type", "button");
btn.after(tAcarkWarna);
// document.body.appendChild(tAcarkWarna);

tAcarkWarna.addEventListener("click", function () {
  // function Button 2
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

///////////////////////////////////////////
// Slider
const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;
    console.log(r, g, b);
    document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  });
}

///////////////////////////////////////////////////
// moseMove
document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(xPos, yPos);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
