function palindromeNums(numberArr) {

    let integerArrLength = numberArr.length;

    for (index = 0; index < integerArrLength; index++) {
        let currentNumAsString = numberArr[index].toString();
        let reversedNum = currentNumAsString.split('').reverse().join('');


        if (currentNumAsString === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeNums([123, 323, 421, 121]);