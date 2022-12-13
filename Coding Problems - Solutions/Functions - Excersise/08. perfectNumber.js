function perfectNumber(number) {
    let checkNumber = 0;
    for (let i = 1; i < number; i++) {

        if (number % i === 0) {
            checkNumber += i;
        }
    }

    if (checkNumber === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);