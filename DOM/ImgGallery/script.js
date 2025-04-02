const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (d) {
  if (d.target.className == "thumb") {
    jumbo.src = d.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    d.target.classList.add("active");
  }
});
