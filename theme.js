const themeToggler = document.querySelector(".theme-toggler");
const ball = document.querySelector(".ball");

let currentTheme = 1;

if (localStorage.getItem("calculator-js-al:theme")) {
  currentTheme = localStorage.getItem("calculator-js-al:theme");
} else {
  currentTheme = 1;
  localStorage.setItem("calculator-js-al:theme", currentTheme);
}

window.addEventListener("load", () => {
  clearBallClasses();
  handleBallPosition();
  handleThemeClass();
});

themeToggler.addEventListener("click", () => {
  clearBallClasses();
  clearThemeClasses();
  handleChangeTheme();
  handleThemeClass();
  handleBallPosition();
  saveThemeToLocalStorage();
});

function clearBallClasses() {
  ball.classList.remove("left");
  ball.classList.remove("center");
  ball.classList.remove("right");
}

function clearThemeClasses() {
  document.body.classList.remove("theme-2");
  document.body.classList.remove("theme-3");
}

function handleChangeTheme() {
  if (currentTheme < 3) {
    currentTheme++;
  } else {
    currentTheme = 1;
  }
}

function handleBallPosition() {
  if (currentTheme == 1) {
    ball.classList.add("left");
  }
  if (currentTheme == 2) {
    ball.classList.add("center");
  }
  if (currentTheme == 3) {
    ball.classList.add("right");
  }
}

function handleThemeClass() {
  if (currentTheme == 1) {
    clearThemeClasses();
  }
  if (currentTheme == 2) {
    document.body.classList.add("theme-2");
  }
  if (currentTheme == 3) {
    document.body.classList.add("theme-3");
  }
}

function saveThemeToLocalStorage() {
  localStorage.setItem("calculator-js-al:theme", currentTheme);
}
