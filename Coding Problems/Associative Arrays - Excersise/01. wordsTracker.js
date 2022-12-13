function trackWords(wordsArray) {
    let wordsList = {};

    let wordsToTrack = wordsArray.shift().split(' ');

    for (const word of wordsToTrack) {
        wordsList[word] = 0;
    }

    for (const word of wordsArray) {
        if (wordsList.hasOwnProperty(word)) {
            wordsList[word]++;
        }
    }

    let sortWords = Object.entries(wordsList).sort((a, b) => b[1] - a[1]);

    sortWords.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}

trackWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);