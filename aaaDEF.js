let colors = [
  // rossi
  '#EB5D5D', '#FF8282', '#CD786F', '#CA6C6C', '#E7866C', 
  '#D28A42', '#F0C56F', '#F0F0F0', '#DDD06E', '#FFED4B', 
  // blu
  '#95D5FD', '#6C9BCA', '#51A3E2', '#2E3AB9', '#52C4D5',
  '#606DB5', '#082A77', '#2E3762', '#5287A3', '#67ABC2',
  '#F1F2F2', '#C6E6EF', '#88ECEC', '#75C5C5', '#55B6B6',
  '#ADD6F1', '#78BBE7', '#5DA4D4', '#2B9CE7', '#039BFF'
];

let color_stroke = [
  // grigi-bianchi
  '#F0F0F0', '#F1F2F2', '#C6E6EF', '#DADADA', '#FFFFFF', 
]

function setup() {
  createCanvas(550, 610); 
  background(0); // Colore di sfondo nero

  let numRows = 16;          // Numero di righe di rettangoli grandi
  let numCols = 10;          // Numero di colonne di rettangoli grandi
  let rectWidth = 40;        // Larghezza di ciascun rettangolo grande
  let rectHeight = 25;       // Altezza di ciascun rettangolo grande
  let subRectWidth = 5;     // Larghezza di ciascun rettangolo piccolo
  let subRectHeight = 12;    // Altezza di ciascun rettangolo piccolo
  let padding = 10;          // Distanza tra i rettangoli grandi
  let margin = 30;           // Margine esterno su ogni lato

  // Loop per disegnare i rettangoli grandi con margine e padding specificati
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Calcola la posizione x e y per ogni rettangolo grande
      let x = margin + j * (rectWidth + padding);
      let y = margin + i * (rectHeight + padding);

      // Variabile per i colori casuali dei rettangoli 1 e 4 
      let color1 = color(random(colors));
      let color4 = color(random(colors));

      
      // CICLO FOR per DISEGNARE I RETTANGOLI PICCLI
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

        // Ruota di un angolo casuale tra -90 e +90 gradi (convertito in radianti)
        rotate(radians(random(-90, 90)));

        // Disegna il rettangolo piccolo con bordi arrotondati e centrato nella nuova origine
        rectMode(CENTER);
        noStroke(); // Rimuovi lo stroke dai rettangoli
        rect(0, 0, subRectWidth, subRectHeight, 10); // Border radius di 10 pixel

        // Ripristina lo stato di trasformazione
        pop();
      }

      
      // CERCHIO (con Push e Pop associati)
      // Disegna un cerchio al centro del rettangolo grande
      push();
      let num_cas = random(2, 4)
      let centerX = x + rectWidth / num_cas;
      let centerY = y + rectHeight / num_cas;
      let radius = random(2, 10); // Raggio casuale tra 2 e 5 pixel
      let Peso = random(1, 3); // Peso casuale dello stroke tra 2 e 5

      noFill();
      stroke(random(color_stroke)); // Colore casuale per il contorno del cerchio
      strokeWeight(Peso); // Spessore del contorno del cerchio
      ellipse(centerX, centerY, radius * 2, radius * 2); // Disegna il cerchio con il diametro
      pop();
    }
  }
}