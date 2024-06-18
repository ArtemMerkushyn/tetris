import { Tetris } from "./tetris.js";

// create the field
const field = document.querySelector('.grid');
if(field) {
  for(let i = 0; i < 200; i++) {
    const cell = document.createElement('div');
    field.appendChild(cell);
  }

  const tetris = new Tetris();
} else {
  console.error('Element with class .grid not found');
}
// for(let i = 0; i < 200; i++) {
//   const cell = document.createElement('div');
//   field.appendChild(cell)
// }

// const tetris = new Tetris();