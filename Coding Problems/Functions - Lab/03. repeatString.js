function repeatString(string, count) {

    let concatenate = '';

    for (i = 0; i < count; i++) {
        concatenate += string;
    }

    return concatenate;
}

let repeatedString = repeatString('abc', 3);
console.log(repeatedString);
