function countStrings(text, word) {

    let sentence = text.split(' ');

    let counter = 0;

    for (const searchWord of sentence) {
        if (searchWord === word) {
            counter++;
        }
    }
    console.log(counter);
}

countStrings('This is a word and it also is a sentence',
    'is'
);