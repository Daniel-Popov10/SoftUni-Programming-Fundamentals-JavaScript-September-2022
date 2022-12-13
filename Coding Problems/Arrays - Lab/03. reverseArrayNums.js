function reverseArrayNums(num, inputArr) {

    let space = '';
    let newArr = [];

    for (let i = 0; i < num; i++) {
        newArr.push(inputArr[i]);
    }


    for (let i = newArr.length - 1; i >= 0; i--) {
        space += `${newArr[i]} `

    }

    console.log(space);

}



reverseArrayNums(3, [10, 20, 30, 40, 50]);