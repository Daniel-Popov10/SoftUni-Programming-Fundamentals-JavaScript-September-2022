function signCheck(numOne, numTwo, numThree) {
    let result = '';

    if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numThree > 0 && numTwo < 0) {
        result = 'Negative';
    } else if (numTwo > 0 && numThree > 0 && numOne < 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne < 0 && numThree && numTwo > 0) {
        result = 'Positive';
    } else if (numTwo < 0 && numThree < 0 && numOne > 0) {
        result = 'Positive';
    }

    return result;
}

let finalResult = signCheck(-6, 12, 14);
console.log(finalResult);