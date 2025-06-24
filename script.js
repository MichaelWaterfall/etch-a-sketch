console.log("test");

const cdiv = document.querySelector('#container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  //div.style.backgroundColor = "red";
  div.className = 'grid-item';
  div.addEventListener('mouseenter', () => {
      div.classList.add('hovered');
  });
  cdiv.appendChild(div);
}
