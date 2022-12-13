function filterWords(list) {
    let words = {};

    for (const word of list) {

        if (!words[word]) {
            words[word] = 0;
        }
        words[word]++;
    }

    let sort = Object.entries(words).sort((a, b) => b[1] - a[1]);
    let sortedWords = Object.fromEntries(sort)


    for (const word in sortedWords) {
        console.log(`${word} -> ${sortedWords[word]} times`);
    }
}

filterWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);