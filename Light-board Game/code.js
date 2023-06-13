const board = document.querySelector('#board');
const colors = ['#ADFF2F', '#32CD32', '#008000', '#20B2AA', '#00FFFF',
'#00BFFF', '#9400D3', '#BA55D3', '#4B0082', '#40E0D0', '#00FF7F']
const SQUARES_NUMBER = 660;

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event){
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event){
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}