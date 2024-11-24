//import test from "./test.js";

let wheel = document.querySelector(".wheel");
let title = document.querySelector(".title");
let output = document.querySelector(".output");
let result = document.querySelector(".result");
let spinBtn = document.querySelector(".spinBtn");
let value = 0;

/* Arrray works NEEDS to have at least 6 items */
let objectplacholder = {
  title: "Placeholder Title",
  array: [
    "ArrayItem1",
    "ArrayItem2",
    "ArrayItem3",
    "ArrayItem4",
    "ArrayItem5",
    "ArrayItem6",
    "ArrayItem7",
  ],
  output: "Here is the placeholder output tag",
};

/* This will change based off what object we are inputting */
let selectionObject = objectplacholder;
//let selectionObject = test;

let colorArray = [
  "#db7093",
  "#20b2aa",
  "#d63e92",
  "#daa520",
  "#ff7f50",
  "#3cb371",
  "#ff340f",
  "#4169e1",
];

createWheel(selectionObject);
spinBtn.addEventListener("click", () => {
  spinTheWheel();
});

function createWheel(object) {
  title.innerHTML = `<p>${object.title}</p>`;
  output.innerHTML = object.output;
  let result = document.createElement("p");
  output.appendChild(result);
  result.className = "result";
  for (let i = 0; i < object.array.length; i++) {
    let wedge = document.createElement("div");
    let colorChoice = colorArray[i % 8];
    wedge.className = "wedge";
    // The transform rotate style below had to be in negetive degrees to the array would match the positioning and direction of the wheel.
    wedge.style = `transform: rotate(calc((360/${
      object.array.length
    })*${-i}deg)); clip-path: polygon(
    0 0,
    ${360 / object.array.length + (360 - object.array.length) * 0.025}% 0,
    100% 100%,
    0 ${360 / object.array.length + (360 - object.array.length) * 0.025}%
  ); --clr: ${colorChoice}`;
    wheel.appendChild(wedge);
    let wedgeContent = document.createElement("span");
    wedgeContent.className = "value";
    wedgeContent.innerText = object.array[i];
    wedge.appendChild(wedgeContent);
  }
}

function spinTheWheel() {
  spinBtn.style = `color: var(--primary)`;
  spinBtn.disabled = true;
  result.innerHTML = "";
  console.log("Button Clicked", value);
  value += Math.ceil(Math.random() * 3600);
  console.log("Total Value", value);
  console.log("New Value", value % 360);
  wheel.style.transform = `rotate(${value}deg)`;
  let position = (value - 15) % 360; //The roulet is about 15 degrees off center so this centers it
  setTimeout(resultReveal, 5500, position); //Function will run after 5.5 seconds
}

function resultReveal(rotation) {
  spinBtn.style = `color: var(--background)`;
  spinBtn.disabled = false;
  console.log("rotation", rotation);
  let wedgeSize = 360 / selectionObject.array.length;
  console.log("wedgeSize", wedgeSize);

  for (let i = 0; i < selectionObject.array.length; i++) {
    console.log(
      "Index:",
      i,
      ", rotation:",
      rotation,
      ", wedgeSize:",
      wedgeSize
    );
    if (rotation >= i * wedgeSize && rotation < (i + 1) * wedgeSize) {
      result.innerHTML = selectionObject.array[i];
      break;
    } else if (rotation < 0) {
      result.innerHTML = selectionObject.array[0];
      break;
    } else {
      console.log("Next Loop");
    }
  }
}
