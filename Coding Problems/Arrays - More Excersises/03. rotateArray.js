function rotateArr(arr) {

    let rotationsCount = Number(arr.pop());

    for (let i = 0; i < rotationsCount; i++) {
        let rotateElement = arr.pop();
        arr.unshift(rotateElement);

    }
    console.log(arr.join(' '));

}

rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);