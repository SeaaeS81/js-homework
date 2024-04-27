
var canvas = document.getElementById('board');
var context = canvas.getContext('2d');

var grid;
var count = 0;

function init() {
    grid = Array(20);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = Array(10);
    }
}

function drawSquare(x, y) {
    context.fillRect(x * 20, y * 20, 20, 20);
    context.strokeRect(x * 20, y * 20, 20, 20);
}

function update() {
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 10; x++) {
            if (grid[y][x]) {
                drawSquare(x, y);
            }
        }
    }
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    update();
    if (count % 10 === 0) {
        addRow();
    }
    count++;
}

function addRow() {
    for (var y = grid.length - 1; y >= 0; y--) {
        for (var x = 0; x < 10; x++) {
            if (y === 0) {
                grid[y][x] = Math.floor(Math.random() * 2);
            } else {
                grid[y][x] = grid[y - 1][x];
            }
        }
    }
}

init();
setInterval(render, 1000 / 2);