function isAmazing(num) {
    let numString = num.toString();

    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        let currentNumber = Number(numString[i]);
        sum += currentNumber;

    }
    let output = sum.toString().includes('9');

    console.log(output ? `${numString} Amazing? True` : `${numString} Amazing? False`);
}


isAmazing(1233);