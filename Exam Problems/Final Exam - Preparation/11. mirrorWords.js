function findMirrorWords(input) {
    let mirrorPattern = /([@]|[#]{1})(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Z][a-z]{3,}|[a-zA-Z]{3,})\1{1}/g

    let words = input.shift();
    let mirrorWords = []
    let wordsCount = 0;
    let matchedWords = words.matchAll(mirrorPattern);

    for (const word of matchedWords) {
        wordsCount++;
        let firstWord = word.groups.firstWord;
        let secondWord = word.groups.secondWord

        let reverseSecond = secondWord.split('').reverse().join('');

        if (firstWord === reverseSecond) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }

    }

    if (wordsCount > 0) {
        console.log(`${wordsCount} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(`${mirrorWords.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }
}

findMirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']
);