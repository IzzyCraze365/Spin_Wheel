import testArray from "../Spinner-Data/test.js";
import octStudents from "../Spinner-Data/ptsb-oct-2024-cohort.js";
import pokemon151 from "../Spinner-Data/pokemon.js";

let wheel = document.querySelector(".wheel");
let title = document.querySelector(".title");
let optionalSelection = document.querySelector(".optionalSelection");
let output = document.querySelector(".output");
let result = document.querySelector(".result");
let spinBtn = document.querySelector(".spinBtn");
let value = 0;

/* Arrray works NEEDS to have at least 4 items */
let objectplacholder = {
  title: "Placeholder Title",
  array: [
    "Array Item 1",
    "Array Item 2",
    "Array Item3 ",
    "Array Item 4",
    "Array Item 5",
    "Array Item 6",
    "Array Item 7",
    "Array Item 8",
    "Array Item 9",
  ],
  output: "Here is the placeholder output tag",
};

//! This will change based off what object we are inputting
let selectionObject = objectplacholder; // Default Data
selectionObject = octStudents;
//selectionObject = pokemon151;
//selectionObject = testArray;

// This is the Color Wheel for the Spinner
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

// Function Calls
createWheel(selectionObject);
spinBtn.addEventListener("click", () => {
  spinTheWheel();
});

//The following function Builds out the Spinner Wheel based on the object it is provided
function createWheel(object) {
  title.innerHTML = `<p>${object.title}</p>`;
  output.innerHTML = object.output;
  let result = document.createElement("p");
  output.appendChild(result);
  result.className = "result";
  for (let i = 0; i < object.array.length; i++) {
    let wedge = document.createElement("div");
    let colorChoice = colorArray[i % 8];
    //The following IF statelemnt will only trigger sot he first and last items do not match in color
    if (object.array.length % 8 === 1 && i + 1 === object.array.length) {
      colorChoice = "#e80909";
    }
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
  if (object.array.length > 25) {
    optionalSelection.style = `display: block;`;
  }
}

// After the button is pressed the wheel is spun.
// Most of the TESTS are in this function
function spinTheWheel() {
  spinBtn.style = `color: var(--primary)`;
  spinBtn.disabled = true;
  result.innerHTML = "";
  /* console.log("Button Clicked", value); //! TEST */
  value += Math.ceil(Math.random() * 3600);
  /*console.log("Total Value", value); //! TEST */
  /* console.log("New Value", value % 360); //! TEST */
  wheel.style.transform = `rotate(${value}deg)`;
    let position = (value) % 360; //The roulet is about 15 degrees off center so this centers it
  setTimeout(resultReveal, 5500, position); //Function will run after 5.5 seconds
}

// The reveal is delayed by 5.5 seconds
function resultReveal(rotation) {
  spinBtn.style = `color: var(--background)`;
  spinBtn.disabled = false;
  /* console.log("rotation", rotation); //! TEST */
  let wedgeSize = 360 / selectionObject.array.length;
  /* console.log("wedgeSize", wedgeSize); //! TEST */

  for (let i = 0; i < selectionObject.array.length; i++) {
    /* console.log("Index:",i,", rotation:",rotation,", wedgeSize:",wedgeSize); //! TEST */
    if (rotation >= i * wedgeSize && rotation < (i + 1) * wedgeSize) {
      result.innerHTML = selectionObject.array[i];
      console.log("Result =", result.innerHTML); // prints the result
      break;
    } else if (rotation < 0) {
      result.innerHTML = selectionObject.array[0];
      console.log("Result =", result.innerHTML); // prints the result
      break;
    } /* else {
      console.log("Next Loop"); //! TEST
    } */
  }
}
