function extractEmojis(input) {
    let coolThreshold = 1;
    let emojisCount = 0;
    let coolEmojis = [];
    let text = input.shift();
    let numbersPattern = text.match(/\d/g);

    for (let nums of numbersPattern) {
        let digit = Number(nums)
        coolThreshold *= digit;

    }

    console.log(`Cool threshold: ${coolThreshold}`)
    let emojiPattern = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    for (const emojis of emojiPattern) {
        let emojiValues = 0;
        let emoji = emojis[0]
        let name = emojis.groups.name;
        emojisCount++;
        for (let index = 0; index < name.length; index++) {
            emojiValues += name.charCodeAt(index);
        }
        if (emojiValues >= coolThreshold) {
            coolEmojis.push(emoji);
        }
    }

    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(emoji => {
        console.log(`${emoji}`);
    });
}

extractEmojis(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])