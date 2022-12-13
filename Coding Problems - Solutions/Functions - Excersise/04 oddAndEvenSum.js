function oddAndEvenSum(number) {

    let sumEven = 0;
    let sumOdd = 0;
    let numString = number.toString();
    let numLength = numString.length;

    for (let index = 0; index < numLength; index++) {
        let currentNumber = Number(numString[index]);

        if (currentNumber % 2 === 0) {
            sumEven += currentNumber;
        } else if (currentNumber % 2 !== 0) {
            sumOdd += currentNumber;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(3495892137259234);