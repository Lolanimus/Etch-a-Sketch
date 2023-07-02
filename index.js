const firstDiv = document.createElement('div');
firstDiv.className = "first";
document.body.appendChild(firstDiv)

let vertDiv = [];

for (let i = 0; i < 16; i++) {
    vertDiv[i] = document.createElement('div');        
    firstDiv.appendChild(vertDiv[i]);
}
