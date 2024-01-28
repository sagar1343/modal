const closebtn = document.querySelector(".closebtn");
const modalbtn = document.querySelector(".modalbtn");
const modal = document.querySelector(".modal");

closebtn.addEventListener("click", function () {
  modal.style.top = "-100%";
  document.body.style.overflow = "auto";
});
modalbtn.addEventListener("click", function () {
  modal.style.top = "0";
  document.body.style.overflow = "hidden";
});
modal.addEventListener("click", function (e) {
  if (e.target.className === "modal") modal.style.top = "-100%";
});
