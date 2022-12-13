function mergeArr(arrOne, arrTwo) {

    let resultArray = [];
    let firstArrayLength = arrOne.length

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            resultArray.push(Number(arrOne[i]) + Number(arrTwo[i]));


        } else if (i % 2 !== 0) {
            resultArray.push(arrOne[i] + arrTwo[i])
        }
    }

    console.log(resultArray.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);