function easter(input) {
    let string = input.shift();
    let line = input.shift();

    while (line !== 'Easter') {
        let [command, ...arguments] = line.split(' ');
        switch (command) {
            case 'Replace':
                const currentChar = arguments[0];
                const newChar = arguments[1];
                let replacePattern = new RegExp(currentChar, 'g');
                string = string.replace(replacePattern, newChar);
                console.log(string);
                break;
            case 'Remove':
                const substring = arguments[0];

                if (string.includes(substring)) {
                    let start = string.indexOf(substring);
                    let firstHalf = string.slice(0, start);
                    let end = firstHalf.length + substring.length;
                    let secondHalf = string.slice(end);
                    string = firstHalf + secondHalf;
                }
                console.log(string);
                break;
            case 'Includes':
                const str = arguments[0];

                if (string.includes(str)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Change':
                let upperOrLower = arguments[0];
                upperOrLower == 'Upper' ? string = string.toUpperCase() : string = string.toLowerCase();
                console.log(string);
                break;
            case 'Reverse':
                const startIndex = Number(arguments[0]);
                const endIndex = Number(arguments[1]);
                if (startIndex >= 0 && endIndex <= string.length) {
                    let captureString = string.slice(startIndex, endIndex + 1);
                    let reverse = captureString.split('').reverse().join('').toString();
                    console.log(reverse);
                }
                break;

        }
        line = input.shift();
    }
}



easter(['Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'])

