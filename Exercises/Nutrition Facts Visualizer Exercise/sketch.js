let data;
let url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSBPrE-wdPj8Oc1DU9wp_IrWyYEZwvEiIW6mV0oQRwe6hK00Ihja--5kPoarDCuf6eUXSdlgUWU0iu5/pub?gid=0&single=true&output=csv";

let headerID = 0;

function preload() {
  data = loadTable(url, "csv", "header");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 20, 20);

  if (data) {
    let numRows = data.getRowCount(); //this grabs how many rows in the spreadsheet

    let rowData = data.getRow(headerID); //this grabs a specific row within the dataset thanks to the headerID

    textAlign(CENTER);
    text(rowData.getString(0), width / 2, 50);

    for (let i = 0; i < numRows; i++) {
      //we create some variables to help display our visuals
      let x = 100 + i * 50;
      let y = 200; //fancy math to space out shapes
      // let w = rowData.getString(i + 1); //this is the width of our shape grabbing the data within the row using .getString()
      let h = rowData.getString(i + 1);

      rect(x, y, 10, h);

      // ellipse(x, y, w); //this draws the shape. Don't forget fill() can be used!

      //this displays the callouts for the shapes and data associated with it.
      textAlign(RIGHT);
      let textX = 100 + i * 65;
      fill(520, 300, 50, 75);
      textSize(14);
      text(data.columns[i + 1], textX, y - 15);
      textAlign(CENTER);
      text(rowData.getString(i + 1), x, int(y) + int(h) + 25);
      console.log();
    }
  }
}

//this function basically pushes the headerID to parse through the different rows in the spreadsheet
// function keyPressed() {
//   headerID++;
// }
