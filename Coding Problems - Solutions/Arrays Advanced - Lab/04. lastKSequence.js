function lastKsequence(n, k) {
    let sequenceArr = [1];

    for (let i = 1; i < n; i++) {
        let currentElement = Math.max(sequenceArr.length - k, 0)

        let lastElement = sequenceArr.slice(currentElement);
        let sum = 0;

        for (let element of lastElement) {
            sum += element
        }

        sequenceArr.push(sum);
    }

    console.log(sequenceArr.join(' '));
}

lastKsequence(6, 3);