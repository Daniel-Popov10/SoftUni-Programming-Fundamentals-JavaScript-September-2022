function trackOdd(input) {
    let occurrences = {};

    let inputArr = input.toString().split(' ').map(el => el.toLowerCase());

    for (const word of inputArr) {
        if (occurrences[word] == undefined) {
            occurrences[word] = 1;
        } else {
            occurrences[word]++;
        }

    }

    let result = '';

    for (const word of inputArr) {
        if (occurrences[word] % 2 === 1) {
            result += `${word} `
            delete occurrences[word];
        }

    }
    console.log(result);
}


trackOdd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');