function stringSub(word, text) {

    const textArr = text.split(' ');

    for (let element of textArr) {
        if (element.toLowerCase() === word) {
            return console.log(`${word}`)
        }
    }

    console.log(`${word} not found!`);
}

stringSub('javascript',
    'JavaScript is the best programming language'

);