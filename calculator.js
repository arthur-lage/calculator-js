const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const actions = document.querySelectorAll(".action");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (display.innerHTML == "Error") {
      display.innerHTML = "";
      display.innerHTML += e.target.dataset["number"];
    } else {
      display.innerHTML += e.target.dataset["number"];
    }
  });
});

actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    switch (e.target.dataset["action"]) {
      case "equal":
        try {
          display.innerHTML = eval(display.innerHTML);
        } catch {
          display.innerHTML = "Error";
        }
        break;
      case "reset":
        display.innerHTML = "";
        break;
      case "del":
        display.innerHTML = display.innerHTML.slice(0, -1);
        break;
      default:
        if (display.innerHTML == "Error") {
          display.innerHTML = "";
          display.innerHTML += e.target.dataset["action"];
        } else {
          display.innerHTML += e.target.dataset["action"];
        }
        break;
    }
  });
});
