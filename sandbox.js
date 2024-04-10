const close = document.querySelectorAll("#close");
const poppupEl = document.querySelector(".popup");
const poppupEl1 = document.querySelector(".popup1");

window.addEventListener("load", () => {
  setTimeout(function open(event) {
    poppupEl1.style.display = "block";
  }, 8000);
});

window.addEventListener("load", () => {
  setTimeout(function open(event) {
    poppupEl1.style.display = "block";
  }, 32000);
});

window.addEventListener("load", () => {
  setTimeout(function open(event) {
    poppupEl.style.display = "block";
  }, 12000);
});

window.addEventListener("load", () => {
  setTimeout(function open(event) {
    poppupEl1.style.display = "block";
  }, 46000);
});

close.forEach((clo) => {
  clo.addEventListener("click", () => {
    poppupEl1.style.display = "none";
    poppupEl.style.display = "none";
  });
});
