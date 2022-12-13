function processMessage(input) {
    let concealedString = input.shift();

    let line = input.shift();

    while (line !== 'Reveal') {

        let [command, ...arguments] = line.split(':|:');
        let isError = false;
        switch (command) {

            case 'InsertSpace':
                const index = arguments[0];
                concealedString = concealedString.slice(0, index) + ' ' + concealedString.slice(index);
                break;
            case 'Reverse':
                const substring = arguments[0];
                if (concealedString.includes(substring)) {
                    concealedString = concealedString.replace(substring, '');
                    let reversed = substring.split('').reverse().join('');
                    concealedString = concealedString + reversed;
                } else {
                    console.log('error');
                    isError = true;
                }
                break;
            case 'ChangeAll':
                const substr = arguments[0];
                const replacement = arguments[1];

                let occurences = new RegExp(substr, 'g');
                concealedString = concealedString.replace(occurences, replacement);
                break;
        }

        if (!isError) {
            console.log(concealedString);
        }

        line = input.shift();
    }

    console.log(`You have a new text message: ${concealedString}`);
}

processMessage([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);