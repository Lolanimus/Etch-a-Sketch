const firstDiv = document.createElement('div');
firstDiv.className = "first";
document.body.appendChild(firstDiv)

const button = document.createElement('button');
button.textContent = "Create new grid?";
document.body.appendChild(button);

let maxDivs = 16;
let vertDiv = [];

function createGrid() {
    for (let i = 0; i < maxDivs; i++) {
        vertDiv[i] = document.createElement('div');        
        firstDiv.appendChild(vertDiv[i]);
        let flexBas = 100/Math.sqrt(maxDivs);
        vertDiv[i].style.flexBasis = flexBas.toString() + '%';
    }
    
    vertDiv.forEach(e => {
        e.addEventListener('mouseenter', () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.style.backgroundColor = color;
            e.className = 'enter';
        });
    });
}

createGrid();

button.addEventListener('click', () => {
    let squares = prompt("How much squares do you want to generate for a new grid(Max 100)?", 16);
    if(squares > 100) {
        maxDivs = 100;
    }
    else {
        maxDivs = squares;
    }
    firstDiv.replaceChildren();
    createGrid();
})