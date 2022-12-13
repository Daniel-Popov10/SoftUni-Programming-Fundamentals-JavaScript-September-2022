function createList(input) {

    let piecesListNumber = Number(input.shift());

    let collection = {};

    for (let index = 0; index < piecesListNumber; index++) {
        let [piece, composer, key] = input.shift().split('|');

        collection[piece] = {
            composer,
            key,
        }
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [line, ...otherCommands] = command.split('|');

        switch (line) {
            case 'Add':
                const piece = otherCommands[0];
                const composer = otherCommands[1];
                const key = otherCommands[2];

                if (!collection.hasOwnProperty(piece)) {
                    collection[piece] = {
                        composer,
                        key,
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                const pieceToDelete = otherCommands[0];
                if (collection.hasOwnProperty(pieceToDelete)) {
                    delete collection[pieceToDelete];
                    console.log(`Successfully removed ${pieceToDelete}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToDelete} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                const changeKeyPiece = otherCommands[0];
                const newKey = otherCommands[1];

                if (collection.hasOwnProperty(changeKeyPiece)) {
                    collection[changeKeyPiece].key = newKey;
                    console.log(`Changed the key of ${changeKeyPiece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${changeKeyPiece} does not exist in the collection.`);
                }
                break;
        }
        command = input.shift();
    }
    for (const piece in collection) {
        console.log(`${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`);
    }
}


createList([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);