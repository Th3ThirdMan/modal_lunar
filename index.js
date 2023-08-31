const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");

openBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
