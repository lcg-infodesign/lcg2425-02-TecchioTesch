function setup() {
    createCanvas(505, 535);
    background(0);
  
    let numRows = 16;           // Numero di righe di rettangoli grandi
    let numCols = 10;          // Numero di colonne di rettangoli grandi
    let rectWidth = 40;        // Larghezza di ciascun rettangolo grande
    let rectHeight = 25;       // Altezza di ciascun rettangolo grande
    let subRectWidth = 10;     // Larghezza di ciascun rettangolo piccolo
    let subRectHeight = 24;    // Altezza di ciascun rettangolo piccolo
    let padding = 5;           // Distanza tra i rettangoli grandi
    let margin = 30;           // Margine esterno su ogni lato
  
    // Loop per disegnare i rettangoli grandi con margine e padding specificati
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Calcola la posizione x e y per ogni rettangolo grande
        let x = margin + j * (rectWidth + padding);
        let y = margin + i * (rectHeight + padding);
  
        // Loop per disegnare i 4 rettangoli piccoli dentro ciascun rettangolo grande
        for (let k = 0; k < 4; k++) {
          rect(x + k * subRectWidth, y, subRectWidth, subRectHeight);
        }
      }
    }
  }
  