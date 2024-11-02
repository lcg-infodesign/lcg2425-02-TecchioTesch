/*let colors = [
    // rossi
    '#EB5D5D', '#FF8282', '#CD786F', '#CA6C6C', '#E7866C', 
    '#D28A42', '#F0C56F', '#F0F0F0', '#DDD06E', '#FFED4B', 
    // verdi
    '#92BA9F', '#94C084', '#56878E', '#407B4C', '#267230', 
    '#1EF738', '#6CCA74', '#37A66C', '#0F9252', '#82F06F',
    // blu
    '#95D5FD', '#6C9BCA', '#51A3E2', '#2E3AB9', '#52C4D5',
    '#606DB5', '#082A77', '#2E3762', '#5287A3', '#67ABC2'
  ];
  
  function setup() {
    createCanvas(550, 610);
    background(0); // Colore di sfondo nero
  
    let numRows = 16;          // Numero di righe di rettangoli grandi
    let numCols = 10;          // Numero di colonne di rettangoli grandi
    let rectWidth = 40;        // Larghezza di ciascun rettangolo grande
    let rectHeight = 25;       // Altezza di ciascun rettangolo grande
    let subRectWidth = 10;     // Larghezza di ciascun rettangolo piccolo
    let subRectHeight = 15;    // Altezza di ciascun rettangolo piccolo
    let padding = 10;           // Distanza tra i rettangoli grandi
    let margin = 30;           // Margine esterno su ogni lato
  
    // Loop per disegnare i rettangoli grandi con margine e padding specificati
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Calcola la posizione x e y per ogni rettangolo grande
        let x = margin + j * (rectWidth + padding);
        let y = margin + i * (rectHeight + padding);
  
        // Scegli i colori casuali per i rettangoli 1 e 4
        let color1 = color(random(colors));
        let color4 = color(random(colors));
  
        // Loop per disegnare i 4 rettangoli piccoli dentro ciascun rettangolo grande
        for (let k = 0; k < 4; k++) {
          // Calcola la posizione per ogni rettangolo piccolo
          let subRectX = x + k * subRectWidth;
          
          // Determina il colore per ciascun rettangolo usando color1, color4 e lerpColor
          if (k === 0) {
            fill(color1); // Rettangolo 1
          } else if (k === 3) {
            fill(color4); // Rettangolo 4
          } else if (k === 1) {
            fill(lerpColor(color1, color4, 0.33)); // Rettangolo 2, amt = 0.33
          } else if (k === 2) {
            fill(lerpColor(color1, color4, 0.66)); // Rettangolo 3, amt = 0.66
          }
  
          // Salva lo stato di trasformazione corrente
          push();
          
          // Trasla al centro del rettangolo piccolo
          translate(subRectX + subRectWidth / 2, y + subRectHeight / 2);
  
          // Ruota di un angolo casuale tra -5 e +5 gradi (convertito in radianti)
          rotate(radians(random(-5, 5)));
  
          // Disegna il rettangolo piccolo, centrato nella nuova origine
          rectMode(CENTER);
          rect(0, 0, subRectWidth, subRectHeight, 10);
  
          // Ripristina lo stato di trasformazione
          pop();
        }
      }
    }
  }
*/
  
/*
CON CONTORNI BIANCHI

let colors = [
  // rossi
  '#EB5D5D', '#FF8282', '#CD786F', '#CA6C6C', '#E7866C', 
  '#D28A42', '#F0C56F', '#F0F0F0', '#DDD06E', '#FFED4B', 
  // verdi
  '#92BA9F', '#94C084', '#56878E', '#407B4C', '#267230', 
  '#1EF738', '#6CCA74', '#37A66C', '#0F9252', '#82F06F',
  // blu
  '#95D5FD', '#6C9BCA', '#51A3E2', '#2E3AB9', '#52C4D5',
  '#606DB5', '#082A77', '#2E3762', '#5287A3', '#67ABC2'
];

function setup() {
  createCanvas(550, 610); // Dimensione del canvas aggiornata
  background(0); // Colore di sfondo nero

  let numRows = 16;          // Numero di righe di rettangoli grandi
  let numCols = 10;          // Numero di colonne di rettangoli grandi
  let rectWidth = 40;        // Larghezza di ciascun rettangolo grande
  let rectHeight = 25;       // Altezza di ciascun rettangolo grande
  let subRectWidth = 10;     // Larghezza di ciascun rettangolo piccolo
  let subRectHeight = 24;    // Altezza di ciascun rettangolo piccolo
  let padding = 10;          // Distanza aumentata tra i rettangoli grandi
  let margin = 30;           // Margine esterno su ogni lato

  // Loop per disegnare i rettangoli grandi con margine e padding specificati
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Calcola la posizione x e y per ogni rettangolo grande
      let x = margin + j * (rectWidth + padding);
      let y = margin + i * (rectHeight + padding);

      // Scegli i colori casuali per i rettangoli 1 e 4
      let color1 = color(random(colors));
      let color4 = color(random(colors));

      // Loop per disegnare i 4 rettangoli piccoli dentro ciascun rettangolo grande
      for (let k = 0; k < 4; k++) {
        // Calcola la posizione per ogni rettangolo piccolo
        let subRectX = x + k * subRectWidth;
        
        // Determina il colore per ciascun rettangolo usando color1, color4 e lerpColor
        if (k === 0) {
          fill(color1); // Rettangolo 1
        } else if (k === 3) {
          fill(color4); // Rettangolo 4
        } else if (k === 1) {
          fill(lerpColor(color1, color4, 0.33)); // Rettangolo 2, amt = 0.33
        } else if (k === 2) {
          fill(lerpColor(color1, color4, 0.66)); // Rettangolo 3, amt = 0.66
        }

        // Salva lo stato di trasformazione corrente
        push();
        
        // Trasla al centro del rettangolo piccolo
        translate(subRectX + subRectWidth / 2, y + subRectHeight / 2);

        // Ruota di un angolo casuale tra -5 e +5 gradi (convertito in radianti)
        rotate(radians(random(-5, 5)));

        // Disegna il rettangolo piccolo con bordi arrotondati e centrato nella nuova origine
        rectMode(CENTER);
        rect(0, 0, subRectWidth, subRectHeight, 10); // Border radius di 10 pixel

        // Ripristina lo stato di trasformazione
        pop();
      }

      // Disegna un cerchio al centro di ogni rettangolo grande
      let centerX = x + rectWidth / 2;
      let centerY = y + rectHeight / 2;
      let radius = random(2, 10);
      let strroke = random(1, 2, 3);
      // Raggio casuale tra 2 e 30 pixel

      noFill();               // Fill trasparente
      stroke(255);            // Colore del bordo bianco
      strokeWeight(stroke);        // Spessore del bordo
      ellipse(centerX, centerY, radius * 2, radius * 2); // Cerchio con raggio casuale
    }
  }
}

*/