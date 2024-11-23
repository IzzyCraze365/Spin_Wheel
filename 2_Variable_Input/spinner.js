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
  ],
  output: "Here is the placeholder output tag",
};


/* This will change based off what object we are inputting */
let selectionObject = objectplacholder;

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
title.innerHTML = `<p>${object.title}</p>`
output.innerHTML = object.output
let result = document.createElement("p");
output.appendChild(result);
result.className = "result";
  for (let i = 0; i < object.array.length; i++) {
    let wedge = document.createElement("div");
    let colorChoice = colorArray[i%8];
    wedge.className = "wedge";
    wedge.style = `transform: rotate(calc((360/${object.array.length})*${i}deg)); clip-path: polygon(
    0 0,
    ${(360/object.array.length)+((360-object.array.length)*.025)}% 0,
    100% 100%,
    0 ${(360/object.array.length)+((360-object.array.length)*.025)}%
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
  let RNG = Math.random();
  let value1 = Math.ceil(RNG * 3600);
  value += Math.ceil(Math.random() * 3600);
  console.log("New Value", value);
  wheel.style.transform = `rotate(${value}deg)`;
  resultReveal(RNG,value);
}

//TODO I need to finx the logic here
function resultReveal(rotaionValue, currentPosition){
  let position = currentPosition%360
  console.log("Position", position);
  let finalResult = Math.floor(rotaionValue * (selectionObject.array.length))
  console.log("Final Result", finalResult);
  //TODO I need code in here to output the correct result
  result.innerHTML= selectionObject.array[finalResult]

}

