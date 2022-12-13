function addAndSubtract(firstNum, secondNum, thirdNum) {

    function add(firstNum, secondNum) {
        let sumOfNumbers = firstNum + secondNum
        return sumOfNumbers;
    }
    let sum = add(firstNum, secondNum);

    function subtract(sumOfTwo, thirdNum) {
        let finalResult = sumOfTwo - thirdNum;
        return finalResult;
    }
    let subtraction = subtract(sum, thirdNum);
    console.log(subtraction);
}

addAndSubtract(23, 6, 10);