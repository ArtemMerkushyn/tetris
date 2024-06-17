// create the field
const field = document.querySelector('.grid');
for(let i = 0; i < 200; i++) {
  const cell = document.createElement('div');
  field.appendChild(cell)
}