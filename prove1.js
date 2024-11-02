let colors = ["EB5D5D", "FF8282", "CD786F", 
  "CA6C6C", "E7866C", "D28A42",
  "F0C56F", "F0F0F0", "DDD06E",
  "FFED4B"];

function setup() {
  createCanvas(505, 535);
}

function draw() {
  background(0);

  let startX = 30; // Coordinate X di partenza per il primo rettangolo
  let startY = 30; // Coordinate Y di partenza per tutti i rettangoli
  let rectWidth = 10;
  let rectHeight = 25;

  // Disegna 4 rettangoli adiacenti sul lato lungo
  for (let i = 0; i < 4; i++) {
    rect(startX + i * rectWidth, startY, rectWidth, rectHeight);
  }
}


/*
FUNZIONE PER GRIGLIA CHE SI RIDIMENSIONA

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);

  let margin = constrain(map(width, 200, 800, 50, 10), 10, 50); // Margine dinamico tra 10 e 50 pixel
  let spacing = 5; // Spaziatura tra i rettangoli grandi
  let bigRectWidth = 4 * 10; // Larghezza del rettangolo grande (4 piccoli rettangoli da 10 px l'uno)
  let bigRectHeight = 25; // Altezza del rettangolo grande (altezza dei rettangoli piccoli)
  let stepX = bigRectWidth + spacing; // Passo tra i rettangoli in X
  let stepY = bigRectHeight + spacing; // Passo tra i rettangoli in Y

  // Calcola numero di rettangoli in orizzontale e verticale per riempire la griglia
  let cols = floor((width - 2 * margin) / stepX);
  let rows = floor((height - 2 * margin) / stepY);

  // Disegna la griglia di rettangoli grandi
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = margin + x * stepX;
      let posY = margin + y * stepY;
      drawBigRectangle(posX, posY);
    }
  }
}

// Funzione per disegnare il rettangolo grande formato da 4 rettangoli piccoli
function drawBigRectangle(x, y) {
  let rectWidth = 10;
  let rectHeight = 25;
  for (let i = 0; i < 4; i++) {
    rect(x + i * rectWidth, y, rectWidth, rectHeight);
  }
}

// Ridisegna quando la finestra viene ridimensionata
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

*/

/*
FUNZIONE PER RETTANGOLO GRANDE 

function setup() {
  createCanvas(500, 500);

  background(200);

  // Create p5.Color objects to interpolate between.
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);

  // Create intermediate colors.
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

  // Draw the left rectangle.
  noStroke();
  fill(from);
  rect(10, 20, 20, 60);

  // Draw the left-center rectangle.
  fill(interA);
  rect(30, 20, 20, 60);

  // Draw the right-center rectangle.
  fill(interB);
  rect(50, 20, 20, 60);

  // Draw the right rectangle.
  fill(to);
  rect(70, 20, 20, 60);

  describe(
    'Four rectangles. From left to right, the rectangles are tan, brown, brownish purple, and purple.'
  );
}
*/



/*
FUNZIONE PER GRIGLIA DI RETTANGOLI GRANDE 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);

  let margin = constrain(map(width, 200, 800, 50, 10), 10, 50); // Margine dinamico tra 10 e 50 pixel
  let spacing = 5; // Spaziatura tra i rettangoli grandi
  let bigRectWidth = 4 * 10; // Larghezza del rettangolo grande (4 piccoli rettangoli da 10 px l'uno)
  let bigRectHeight = 25; // Altezza del rettangolo grande (altezza dei rettangoli piccoli)
  let stepX = bigRectWidth + spacing; // Passo tra i rettangoli in X
  let stepY = bigRectHeight + spacing; // Passo tra i rettangoli in Y

  // Calcola numero di rettangoli in orizzontale e verticale per riempire la griglia
  let cols = floor((width - 2 * margin) / stepX);
  let rows = floor((height - 2 * margin) / stepY);

  // Disegna la griglia di rettangoli grandi
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = margin + x * stepX;
      let posY = margin + y * stepY;
      drawBigRectangle(posX, posY);
    }
  }
}

// Funzione per disegnare il rettangolo grande formato da 4 rettangoli piccoli
function drawBigRectangle(x, y) {
  let rectWidth = 10;
  let rectHeight = 25;
  for (let i = 0; i < 4; i++) {
    rect(x + i * rectWidth, y, rectWidth, rectHeight);
  }
}

// Ridisegna quando la finestra viene ridimensionata
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

*/
