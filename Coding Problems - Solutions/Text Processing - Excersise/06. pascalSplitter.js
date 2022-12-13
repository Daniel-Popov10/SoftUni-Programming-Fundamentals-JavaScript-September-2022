function splitPascal(string) {
    let upperCase = '';
    let lowerCase = '';
    let result = '';
    let stringArr = string.split('');

    for (let char of stringArr) {
        if (char.toUpperCase() === char & result.length > 1) {
            result += ', ';
        }

        if (char.toUpperCase() === char) {
            upperCase += char;
            result += char
        }

        if (char.toLowerCase() === char) {
            lowerCase += char;
            result += char;
        }

    }

    console.log(result);
}

splitPascal('SplitMeIfYouCanHaHaYouCantOrYouCan');