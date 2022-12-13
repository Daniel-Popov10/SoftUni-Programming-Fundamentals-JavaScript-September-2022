function processOddNums(input) {

    let odd = input.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse();
    console.log(odd.join(' '));
}

processOddNums([10, 15, 20, 25]);