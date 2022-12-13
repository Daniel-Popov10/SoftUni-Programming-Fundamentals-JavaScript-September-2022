function distinct(arr) {

    let distinctArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (!distinctArr.includes(currentNumber)) {
            distinctArr.push(currentNumber);
        }
    }

    console.log(distinctArr.join(' '));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);