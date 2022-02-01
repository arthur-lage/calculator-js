const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const actions = document.querySelectorAll(".action");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    display.innerHTML += e.target.dataset["number"];
  });
});

actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    switch (e.target.dataset["action"]) {
      case "equal":
        display.innerHTML = eval(display.innerHTML);
        break;
      case "reset":
        display.innerHTML = "";
        break;
      case "del":
        display.innerHTML = display.innerHTML.slice(0, -1);
        break;
      default:
        display.innerHTML += e.target.dataset["action"];
    }
  });
});
