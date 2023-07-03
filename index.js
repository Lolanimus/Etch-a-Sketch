const firstDiv = document.createElement('div');
firstDiv.className = "first";
document.body.appendChild(firstDiv)

let vertDiv = [];
for (let i = 0; i < 16; i++) {
    vertDiv[i] = document.createElement('div');        
    firstDiv.appendChild(vertDiv[i]);
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