function isMatched(stringOne, char, stringTwo) {

    let res = stringOne.replace('_', char);
    let output = res === stringTwo ? 'Matched' : 'Not Matched';
    console.log(output);

}


isMatched('Str_ng', 'i', 'String');