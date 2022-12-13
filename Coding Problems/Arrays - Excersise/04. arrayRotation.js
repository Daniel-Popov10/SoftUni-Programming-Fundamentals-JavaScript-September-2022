function arrRotation(arr, rotations) {

    for (index = 0; index < rotations; index++) {
        let rotationNum = arr.shift();
        arr.push(rotationNum);

    }

    console.log(arr.join(' '));
}


arrRotation([51, 47, 32, 61, 21], 2);