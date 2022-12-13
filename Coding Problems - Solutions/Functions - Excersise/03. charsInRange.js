function charsInRange(firstChar, secondChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let allChars = [];

    for (let start = rangeStart + 1; start < rangeEnd; start++) {
        let currentChar = String.fromCharCode(start);
        allChars.push(currentChar);
    }

    console.log(allChars.join(' '));
}

charsInRange('A', '!');