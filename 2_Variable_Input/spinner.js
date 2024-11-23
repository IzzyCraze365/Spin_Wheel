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
  array: ["ArrayItem1", "ArrayItem2", "ArrayItem3", "ArrayItem4"],
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
    wedge.style = `transform: rotate(calc((360/${
      object.array.length
    })*${i}deg)); clip-path: polygon(
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
  console.log("Button Clicked", value);
  value += Math.ceil(Math.random() * 3600);
  console.log("Total Value", value);
  console.log("New Value", value % 360);
  wheel.style.transform = `rotate(${value}deg)`;
  let position = value % 360;
  resultReveal(position); //! This logic will break the site until its fixed
}

//TODO I need to finx the logic here
function resultReveal(rotation) {
  console.log("Position", rotation);
  //Im gonna need a dumb if statement in here that loops through 360 numbers
  for (let i = 0; i < 360; i++) {
    if ((i = rotation)) {
      for (let j = 0; selectionObject.array.length; j++) {
        if (Math.floor(j * selectionObject.array.length) === 360)
          result.innerHTML = selectionObject.array[j];
      }
    }
  }
}
