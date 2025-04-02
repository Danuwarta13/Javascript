const cls = document.querySelectorAll(".close");

cls.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault(); // untuk menghapus fungsi default
  });
});
