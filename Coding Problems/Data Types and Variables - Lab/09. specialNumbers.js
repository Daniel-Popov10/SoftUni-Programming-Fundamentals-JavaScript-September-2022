function specialNumbers(num) {

    let result = '';
    let sum = 0;

    for (i = 1; i <= num; i++) {
        i = i.toString()
        for (d = 0; d < i.length; d++) {
            sum += Number(i[d]);
        }

        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }

}
specialNumbers(100);