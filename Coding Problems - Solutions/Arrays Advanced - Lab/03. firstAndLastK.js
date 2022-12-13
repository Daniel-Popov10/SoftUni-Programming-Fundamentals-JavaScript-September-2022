function firstandLastNums(arr) {

    let count = arr.shift();

    let firstElements = arr.slice(0, count);
    let lastElements = arr.slice(arr.length - count)

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));

}


firstandLastNums([2, 7, 8, 9]);