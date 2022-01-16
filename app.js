const modal = document.querySelector("#modalNav");
const modalClose = document.querySelector("#modalClose");
const modalOpen = document.querySelector("#modalOpen");

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modalOpen.addEventListener("click", () => {
  modal.style.display = "grid";
});
