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

/* 
TODO
I need to create the wheel by looping through an array.
So I will need to utilize NODE ElementInternals

https://www.w3schools.com/js/js_htmldom_nodes.asp
https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_elementcreate
 */

/* 
Im going to use PW Table Creation as a template

//create a table
function addTable() {
  let myTableDiv = document.getElementById("myDynamicTable");
  let table = document.createElement("TABLE");
  table.border = "1";
  let tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  // we declare how many rows and columns there are via the following "for" statements
  for (let i = 0; i < 6; i++) {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    // populate the cells based on how those cells correspond to the table of questions
    for (let j = 0; j < 6; j++) {
      let td = document.createElement("TD");
      let th = document.createElement("TH");
      if (i == 0) {
        //i == 0 is the first row, it gets the categories
        th.appendChild(
          document.createTextNode(placeholderQuestions[i + j * 10].category)
        );
        tr.appendChild(th);
        th.style.backgroundColor = "rgb(152, 37, 156)";
      } else {
        //points based on row placement
        let points = i * 100;
        //for each cell with points in it created, determine how many "plays" in the game
        playCount++;
        //populate the questions
        td.appendChild(
          document.createTextNode(
            placeholderQuestions[i - 1 + roundMultiplier + j * 10].category +
              "\n" +
              points
          )
        );
        //set the attributes to kick off the game
        td.setAttribute("class", "playable");
        td.setAttribute("id", `cell${i}${j}`);
        //the whitespaces will be kept as is and the text only wraps when line breaks are in the content
        document.body.style = "white-space: pre";
        tr.appendChild(td);
        //the event listener handles when the player clicks in the cell:
        //with a series of if statements that search for conditions of the game
        td.addEventListener("click", () => {
          if (
            td.className == "playable" &&
            lock == false &&
            playCount > 0 &&
            score1 < 15000 * round &&
            score2 < 15000 * round
          ) {
            //calls upon cellclick function defined below, get the cell the points and populate it
            cellClick(
              points,
              td,
              placeholderQuestions[i - 1 + roundMultiplier + j * 10].question,
              placeholderQuestions[i - 1 + roundMultiplier + j * 10].answer
            );
          } else if (lock == true) {
            alert(
              "You must finish the current question. Take a guess, or pass to the next player."
            );
          } else if (playCount == 0) {
            nextRound.disabled = false;
            alert("Click Next Round for Round 2.");
          }
        });
      }
    }
  }
  myTableDiv.appendChild(table);
}
 */