const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");
let mode = localStorage.getItem("mode");

if (mode === "") {
  mode = "dark";
}
container.setAttribute("class", mode);

function modeAssign() {
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

themeSwitcher.addEventListener("click", modeAssign);
