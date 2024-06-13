var ctx;

function loadGame() {
    // created the game field
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    ctx = canvas.getContext('2d');
    document.body.insertBefore(canvas, document.body.childNodes[0]);
}
loadGame();