function processString(input) {
    let encryptedMessage = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {

        let [command, operator, operatorTwo] = line.split('|');
        switch (command) {
            case 'Move':
                let lettersToMove = Number(operator);
                let cutString = encryptedMessage.slice(0, lettersToMove);
                encryptedMessage = encryptedMessage.slice(lettersToMove);
                encryptedMessage += cutString;
                break;
            case 'Insert':
                let index = Number(operator);
                let value = operatorTwo;
                let extractSecondPart = encryptedMessage.substring(index);
                let extractFirstPart = encryptedMessage.substring(0, index);
                let rebuildString = extractFirstPart += value;
                rebuildString += extractSecondPart;
                encryptedMessage = rebuildString;
                break;
            case 'ChangeAll':
                let subString = operator;
                let replacement = operatorTwo;

                for (const symbol of encryptedMessage) {
                    encryptedMessage = encryptedMessage.replace(subString, replacement);
                }

                break;
        }

        line = input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}

processString([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]

);