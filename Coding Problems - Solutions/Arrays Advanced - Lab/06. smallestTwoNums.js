function smallestTwoNums(arr) {
    let sortedNums = arr.sort((a, b) => a - b);
    let smallestNums = sortedNums.slice(0, 2);
    console.log(smallestNums.join(' '));

}


smallestTwoNums([30, 15, 50, 5]);