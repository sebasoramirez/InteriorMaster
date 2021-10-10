const noCross = document.querySelector("nav");
const input = document.querySelector("input");

noCross.children[1].classList.remove("fa-times");

input.addEventListener("input", Cross);

function Cross() {
  if (input.checked === false) {
    noCross.children[1].classList.remove("fa-times");
  } else {
    noCross.children[1].classList.add("fa-times");
  }
}
