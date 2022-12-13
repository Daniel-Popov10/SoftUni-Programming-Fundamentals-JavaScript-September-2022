function chessBoard(boardSize) {
    let currentColour = 'black';
    let nextColour = '';

    console.log('<div class="chessboard">');
    for (let rows = 1; rows <= boardSize; rows++) {
        console.log('<div>');

        for (let columns = 1; columns <= boardSize; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);
            nextColour = currentColour;
            currentColour = nextColour === 'black' ? 'white' : 'black';
        }

        console.log('  </div>')
        if (boardSize % 2 === 0) {
            nextColour = currentColour
            currentColour = nextColour === 'black' ? 'white' : 'black'
        }

    }
    console.log('</div>')
}
chessBoard(3);
