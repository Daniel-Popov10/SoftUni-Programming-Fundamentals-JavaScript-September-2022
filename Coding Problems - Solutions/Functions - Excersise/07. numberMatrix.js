function numberMatrix(num) {

    let matrixArr = [];

    let rowGenerator = () => {
        let singleRow = '';
        for (let i = 1; i <= num; i++) {
            singleRow += `${num} `;

        }
        return singleRow;
    }

    for (let k = 1; k <= num; k++) {
        matrixArr.push(rowGenerator());
    }

    console.log(matrixArr.join('\n'));

}

numberMatrix(3);