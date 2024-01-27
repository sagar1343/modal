const closebtn = document.querySelector(".closebtn");
const modalbtn = document.querySelector(".modalbtn");
const modalContent = document.querySelector(".modalContent");
closebtn.addEventListener("click", function () {
  modalContent.style.top = "-100%";
});
modalbtn.addEventListener("click", function () {
  modalContent.style.top = "2%";
});
