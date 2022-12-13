function triangleOfNums(num) {

    for (let startNum = 1; startNum <= num; startNum++) {
        let newRow = '';
        for (let startRow = 1; startRow <= startNum; startRow++) {
            newRow += `${startNum} `;

        }

        console.log(newRow);
    }
}


triangleOfNums(10);