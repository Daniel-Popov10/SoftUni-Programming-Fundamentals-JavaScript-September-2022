function cutAndReverse(string) {
    let firstHalf = string.slice(0, string.length / 2)
        .split('')
        .reverse()
        .join('');
    let secondHalf = string.slice(string.length / 2)
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');