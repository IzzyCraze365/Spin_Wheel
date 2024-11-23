let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = 0;

function spinTheWheel() {
  console.log("Button Clicked", value);
  value += Math.ceil(Math.random() * 3600);
  console.log("New Value", value);
  wheel.style.transform = `rotate(${value}deg)`;
}

spinBtn.addEventListener("click", () => {
  spinTheWheel();
});
