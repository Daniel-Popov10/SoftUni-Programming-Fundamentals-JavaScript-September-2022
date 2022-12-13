function factorialDivision(numOne, numTwo) {

    let resultOne = 1;
    for (let i = numOne; i > 0; i--) {
        resultOne *= i
    }

    let resultTwo = 1;

    for (let i = numTwo; i > 0; i--) {
        resultTwo *= i
    }

    let finalResult = resultOne / resultTwo;

    console.log(finalResult.toFixed(2))

}


factorialDivision(6, 2);