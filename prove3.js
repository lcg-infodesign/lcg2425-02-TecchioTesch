let color1 = [
    // rossi
    '#EB5D5D', '#FF8282', '#CD786F', '#CA6C6C', '#E7866C', 
    '#D28A42', '#F0C56F', '#F0F0F0', '#DDD06E', '#FFED4B', 
    // vedi
    '#92BA9F', '#94C084', '#56878E', '#407B4C', '#267230', 
    '#1EF738', '#6CCA74', '#37A66C', '#0F9252', '#82F06F',
   // blu
    '#95D5FD', '#6C9BCA', '#51A3E2', '#2E3AB9', '#52C4D5',
    '#606DB5', '#082A77', '#2E3762', '#5287A3', '#67ABC2',
   ]; // Aggiungi i colori specifici
   
   let color2 = [
    // rossi
    '#EB5D5D', '#FF8282', '#CD786F', '#CA6C6C', '#E7866C', 
    '#D28A42', '#F0C56F', '#F0F0F0', '#DDD06E', '#FFED4B', 
    // vedi
    '#92BA9F', '#94C084', '#56878E', '#407B4C', '#267230', 
    '#1EF738', '#6CCA74', '#37A66C', '#0F9252', '#82F06F',
   // blu
    '#95D5FD', '#6C9BCA', '#51A3E2', '#2E3AB9', '#52C4D5',
    '#606DB5', '#082A77', '#2E3762', '#5287A3', '#67ABC2',
   ]; // Aggiungi i colori specifici
   
   function setup() {
     createCanvas(550, 535);
     background(0); // Colore di sfondo nero
   
     let numRows = 16;          // Numero di righe di rettangoli grandi
     let numCols = 10;          // Numero di colonne di rettangoli grandi
     let rectWidth = 40;        // Larghezza di ciascun rettangolo grande
     let rectHeight = 25;       // Altezza di ciascun rettangolo grande
     let subRectWidth = 10;     // Larghezza di ciascun rettangolo piccolo
     let subRectHeight = 25;    // Altezza di ciascun rettangolo piccolo
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
           // Calcola la posizione per ogni rettangolo piccolo
           let subRectX = x + k * subRectWidth;
           
           // Assegna colore in base alla posizione (1 e 4)
           colorRectangles(k + 1); // Numero rettangolo da 1 a 4
           rect(subRectX, y, subRectWidth, subRectHeight, 10);
         }
       }
     }
   }
   
   
   // Funzione per assegnare un colore casuale ai rettangoli 1 e 4
   function colorRectangles(position) {
    let randomc1 = random(color1);
    let randomc2 = random(color2);
    let col2 = lerpColor(randomc1, randomc2, 0.33);
    let col3 = lerpColor(randomc1, randomc2, 0.66);
   

     if (position === 1) {
       fill(randomc1); // Colore casuale dall'array
     } 

     if (position === 4) {
       fill(randomc2); // Colore casuale dall'array
     }

     if (position === 2) {
       fill(col2); // Colore neutro per i rettangoli 2
     } 

     if (position === 3) {
       fill(col3); // Colore neutro per i rettangoli 3
     }
   }
   
   
   /*

   randomc1, randomc2, 0.33
   randomc1, randomc2, 0.66


   function setup() {
     createCanvas(100, 100);
   
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