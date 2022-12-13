function bombNumbers(numbers, specialNumbers) {

    let bombNumber = specialNumbers[0];
    let powerOf = specialNumbers[1];

    let sum = 0;


    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum === bombNumber) {
            let indexOfBomb = numbers.indexOf(bombNumber);
            let startIndex = Math.max(indexOfBomb - powerOf, 0)
            numbers.splice(i, powerOf + 1);
            numbers.splice(startIndex, powerOf);
            i = 0;


        }
    }

    for (j = 0; j < numbers.length; j++) {
        let current = numbers[j];
        sum += current;
    }
    console.log(sum);

}


bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);