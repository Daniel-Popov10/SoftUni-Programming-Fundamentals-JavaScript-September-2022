function sumDigits(num) {

    let number = num.toString();
    let result = 0;
    let totalDigits = number.length;

    for (let i = 0; i <= totalDigits; i++) {
        let currentNumber = (Number)(number.charAt(i));
        result += Number(currentNumber);
    }

    console.log(result);

}

sumDigits(245678);