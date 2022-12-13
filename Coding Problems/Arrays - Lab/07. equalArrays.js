function equalArrays(arrOne, arrTwo) {

    let areEqual = true;
    let sum = 0;

    for (i = 0; i < arrOne.length; i++) {
        arrOne[i] = Number(arrOne[i]);


    }

    for (i = 0; i < arrTwo.length; i++) {
        arrTwo[i] = Number(arrTwo[i]);


    }


    for (i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += arrOne[i];
        }


    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}


equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '3', '4', '5']);