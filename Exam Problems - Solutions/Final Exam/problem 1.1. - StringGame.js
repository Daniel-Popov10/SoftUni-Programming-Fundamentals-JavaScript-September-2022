function changeString(input) {
    let string = input.shift();

    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...arguments] = line.split(' ');

        switch (command) {
            case 'Change':
                const char = arguments[0];
                const replacement = arguments[1];
                let replaceChar = new RegExp(char, 'g');
                string = string.replace(replaceChar, replacement);
                console.log(string);
                break;
            case 'Includes':
                const substr = arguments[0];
                if (string.includes(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'End':
                const substring = arguments[0];
                if (string.endsWith(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Uppercase':
                string = string.toUpperCase();
                console.log(string);
                break;
            case 'FindIndex':
                const character = arguments[0];
                let indexOfChar = string.indexOf(character);
                console.log(indexOfChar);
                break;
            case 'Cut':
                const startIndex = Number(arguments[0]);
                const count = Number(arguments[1]);
                let cutString = string.slice(startIndex, count + startIndex);
                console.log(cutString);
                break;
        }

        line = input.shift();
    }
}


changeString(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])

