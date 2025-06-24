console.log("test");

const cdiv = document.querySelector('#container');
const button = document.getElementById("button");

function deleteGrid() {
  cdiv.innerHTML = '';
}

button.addEventListener("click", () => {
 let gridSize = prompt("Enter the grid size");
 deleteGrid();
 const cellSize = 960 / gridSize;
 cdiv.style.width = '960px';
 cdiv.style.width = '960px';
 if(gridSize > 100) {
    alert("Grid size to big must be smaller than 100");
 }
 else if (gridSize < 1) {
    alert("Grid size to small must be bigger than 1");
 }
 else {
  for (let i = 0; i < (gridSize * gridSize); i++) {
  const div = document.createElement('div');
  //div.style.backgroundColor = "red";
  div.className = 'grid-item';
  div.style.width = `${cellSize}px`;
  div.style.height = `${cellSize}px`;
  div.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  cdiv.appendChild(div);
}
  }
 })

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  //div.style.backgroundColor = "red";
  //div.className = 'grid-item';
  div.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
  cdiv.appendChild(div);
}
