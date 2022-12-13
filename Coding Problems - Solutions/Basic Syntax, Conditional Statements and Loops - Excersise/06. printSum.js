function sumRange(startNum, endNum) {

    let sum = 0;
    let output = '';
    for (let start = startNum; start <= endNum; start++) {

        output += `${start} `;
        sum += start


    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}


sumRange(5, 10);