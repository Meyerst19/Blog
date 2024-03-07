const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");
let mode = localStorage.getItem("mode");

if (mode === null) {
  mode = "dark";
}

function modeAssign(event) {
  if (mode === "dark") {
    mode = "light";
    localStorage.setItem("mode", mode);
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    localStorage.setItem("mode", mode);
    container.setAttribute("class", "dark");
  }
}

window.addEventListener("load", modeAssign);

themeSwitcher.addEventListener("click", modeAssign);
