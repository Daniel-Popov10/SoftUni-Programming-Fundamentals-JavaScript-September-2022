function replaceRepeating(string) {

    let result = string[0];

    for (let index = 1; index < string.length; index++) {
        const letter = string[index];
        const previousLetter = string[index - 1];

        if (letter !== previousLetter) {
            result += letter;
        }
    }
    console.log(result);
}

replaceRepeating('qqqwerqwecccwd');