function encryptMessage(input) {
    let numberOfMessages = Number(input.shift());

    let tagPattern = /([*@])(?<tag>[A-Z][a-z]{3,})\1: \[([A-Za-z])]\|\[([A-Za-z])]\|\[([A-Za-z)])]\|/g
    let line = input.shift();

    for (let index = 0; index < numberOfMessages; index++) {
        let current = tagPattern.exec(line);

        if (current !== null) {
            console.log(`${current[2]}: ${current[3].charCodeAt()} ${current[4].charCodeAt()} ${current[5].charCodeAt()}`);
        } else {
            console.log('Valid message not found!');
        }

        line = input.shift();
    }
}

encryptMessage(["3",
    "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
    "*tAGged*: [i][i][i]|",
    "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);


