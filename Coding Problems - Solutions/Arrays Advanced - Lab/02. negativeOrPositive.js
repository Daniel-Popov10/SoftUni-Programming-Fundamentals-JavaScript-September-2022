function negativeOrPositive(arr) {

    let newArr = [];

    for (let num of arr) {
        let number = Number(num);

        if (number < 0) {
            newArr.unshift(number);
        } else {
            newArr.push(number)
        }
    }

    console.log(newArr.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);