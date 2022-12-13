function resetPassword(input) {
    let rawPassword = input.shift();

    let line = input.shift();

    let rebuildPassword = '';

    while (line !== 'Done') {
        let [command, ...arguments] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                for (let i = 0; i < rawPassword.length; i++) {
                    let symbol = rawPassword[i];
                    if (i % 2 !== 0) {
                        rebuildPassword += symbol;
                    }
                }
                rawPassword = rebuildPassword;
                console.log(rawPassword);
                break;
            case 'Cut':
                const index = Number(arguments[0]);
                const length = Number(arguments[1]);
                let extractSubstr = rawPassword.substring(index, index + length);
                rawPassword = rawPassword.replace(extractSubstr, '');
                console.log(rawPassword);

                break;
            case 'Substitute':
                const substr = arguments[0];
                const substitute = arguments[1];

                if (rawPassword.includes(substr)) {
                    let replacement = new RegExp(substr, 'g');
                    rawPassword = rawPassword.replace(replacement, substitute);
                    console.log(rawPassword);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${rawPassword}`);
}

resetPassword(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);

