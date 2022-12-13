function sumEvens(numStrings) {


    let sum = 0;

    for (i = 0; i < numStrings.length; i++) {
        numStrings[i] = Number(numStrings[i]);

        if (numStrings[i] % 2 == 0) {
            sum += numStrings[i];
        }

    }

    console.log(sum);
}


sumEvens(['1', '2', '3', '4', '5', '6']);