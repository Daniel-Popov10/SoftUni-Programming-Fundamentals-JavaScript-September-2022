function sumOfOdd(num) {

    let sum = 0;

    let counter = 1;
    for (let index = 0; index < num; index++) {
        console.log(counter);
        sum += counter;
        counter += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOdd(5);
