function integerOrFloat(numOne, numTwo, numThree) {

    let sum = numOne + numTwo + numThree;

    let intOrFloat = sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(intOrFloat);
}

integerOrFloat(100, 200, 303);